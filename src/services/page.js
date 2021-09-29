import Backendless from 'backendless';

export default class Page {
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
        const page = {
          title: rawData.ItemInfo.Title.DisplayValue,
          asin,
          salesRank: rawData.BrowseNodeInfo.BrowseNodes[0].SalesRank,
          category: rawData.BrowseNodeInfo.BrowseNodes[0].DisplayName,
          brand: rawData.ItemInfo.ByLineInfo.Brand.DisplayValue,
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

        // is offer?
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

        Backendless.Data.of('pages')
          .save(page)
          .then(resolve)
          .catch(reject)
      })
      response.catch(reject)
    });
  }

}
