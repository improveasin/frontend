import Backendless from 'backendless';

class Page {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getTitle() {
    return this.rawData.ItemInfo.Title.DisplayValue;
  }
}

export default class PageService {
  static async getPages(userId) {
    return new Promise((resolve, reject) => {
      const whereClause = `ownerId = '${userId}'`
      const queryBuilder = Backendless.DataQueryBuilder.create()
        .setWhereClause(whereClause)
        .setPageSize(100)

      Backendless.Data.of('pages')
        .find(queryBuilder)
        .then(async pages => {
          console.log('pages', pages)

          const items = await Promise.all(
            pages.map(async page => {
              page.impression = await Backendless.Counters.get(
                `pages_${page.objectId}_view`
              )
              page.click = await Backendless.Counters.get(
                `pages_${page.objectId}_click`
              )

              return page
            })
          )
          resolve(items)
        })
        .catch(reject)
    });
  }

  static async createPage(asin) {
    return new Promise((resolve, reject) => {
      const response = Backendless.APIServices.invoke(
        'AmazonService',
        'fetchProduct',
        asin
      )
      response.then(data => {
        const rawData = data.ItemsResult.Items[0]
        /* jshint ignore:start */
        const page = {
          title: rawData.ItemInfo.Title.DisplayValue,
          asin,
          salesRank: rawData.BrowseNodeInfo.BrowseNodes[0].SalesRank,
          category: rawData.BrowseNodeInfo.BrowseNodes[0].DisplayName,
          image: {
            url: rawData.Images.Primary.Large.URL,
            width: rawData.Images.Primary.Large.Width,
            height: rawData.Images.Primary.Large.Height,
          },
          images:
            'Variants' in rawData.Images
              ? [rawData.Images.Primary, ...rawData.Images.Variants]
              : [rawData.Images.Primary],
          color: rawData.ItemInfo.ProductInfo?.Color?.DisplayValue,
          size: rawData.ItemInfo.ProductInfo?.Size?.DisplayValue,
          features: rawData.ItemInfo.Features?.DisplayValues,
          productUrl: rawData.DetailPageURL,
          rawData,
        }

        if (rawData.ItemInfo.ByLineInfo.Brand) {
          page.brand = rawData.ItemInfo.ByLineInfo.Brand?.DisplayValue;
        } else if (rawData.ItemInfo.ByLineInfo.Contributors) {
          page.brand = rawData.ItemInfo.ByLineInfo.Contributors.reduce((brand, contributor, index) => {
            return `${brand}, ${contributor.Name}`;
          }, '');
        } else {
          page.brand = '';
        }

        if ('Offers' in rawData) {
          if ('SavingBasis' in rawData.Offers?.Listings[0]) {
            page.price = rawData.Offers.Listings[0].SavingBasis.DisplayAmount;
            page.reducedPrice = rawData.Offers?.Listings[0]?.Price?.DisplayAmount;
          } else {
            page.price = rawData.Offers?.Listings[0]?.Price?.DisplayAmount;
            page.reducedPrice = undefined
          }
        }
        else {
          page.price = undefined;
          page.reducedPrice = undefined;
        }

        /* jshint ignore:end */

        Backendless.Data.of('pages')
          .save(page)
          .then(resolve)
          .catch(reject)
      })
      response.catch(reject)
    });
  }

}
