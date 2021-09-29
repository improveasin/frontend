import Backendless from 'backendless';

export default class Settings {
  static async getSettings() {
    const user = await Backendless.UserService.getCurrentUser();
    const whereClause = `ownerId = '${user.objectId}'`
    const queryBuilder = Backendless.DataQueryBuilder.create()
      .setWhereClause(whereClause)
      .setPageSize(100)

    return new Promise((resolve, reject) => {

      Backendless.Data.of('settings')
        .find(queryBuilder)
        .then(async settings => {
          console.log(`settings`, settings)

          resolve(settings[0])
        })
        .catch(async error => {
          reject(error);
        })
    });
  }

  static async saveSettings(settings) {
    return Backendless.Data.of('settings')
      .save(settings);
  }
}
