import Backendless from 'backendless';
import store from '../store';
import Page from './page';

export default class User {
  static accessToken;

  static async login(log) {
    return new Promise((resolve, reject) => {
      const options = {
        scope: 'profile',
        pkce: true,
      }
      window.amazon.Login.authorize(options, response => {
        if (response.error) {
          return reject('oauth error ' + response.error)
        }
        log('1/5 Authorize login...', response);

        window.amazon.Login.retrieveToken(response.code, response => {
          if (response.error) {
            return reject('oauth error ' + response.error)
          }
          log('2/5 Retrieve login token...', response);

          Backendless.UserService.loginWithOauth2('amazon', response.access_token, null, null, true)
            .then(user => {
              log('3/5 Login to amazon...', user)

              const token = User.token = response.access_token

              window.amazon.Login.retrieveProfile(token, response => {
                log(`4/5 Retrieve your profile...`, response.success);
                if (response.success === false) {
                  User.logout()
                } else {
                  Backendless.UserService.getCurrentUser().then(user => {
                    Page.getPages(user.objectId).then(items => {
                      log(`5/5 Fetch your landing pages...`);
                      store.dispatch('pages/setPages', items);

                      resolve({ user: response.profile, token });
                    })
                      .catch(reject)
                  })
                    .catch(reject)
                }
              })
            })
            .catch(reject)
        })
      });
    });
  }

  static logout() {
    window.amazon.Login.logout()
    Backendless.UserService.logout()
  }

  static getUser() {
    try {
      return Backendless.UserService.getCurrentUser();
    } catch (error) {
      User.logout();
    }
  }

  static setUser(user) {
    Backendless.UserService.setCurrentUser(user, true);
  }
}
