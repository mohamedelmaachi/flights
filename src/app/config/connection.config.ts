import { environment } from '../../environments/environment';
import { COUNT } from './vars.config';

export class Config {

  private static url = environment.url;

  public static get api(): any {
    const account_url: string = this.url + 'account';
    const user_url: string = this.url + 'user';
    const setting_url: string = this.url + 'Your url here';
    const statistic_url: string = this.url + 'Your url here';

    return {

      // Compte
      account: {
        old: account_url + 's/list?filter=old&rows=' + COUNT,
        new: account_url + 's/list?filter=new&rows=' + COUNT,
        all: account_url + 's/list?filter=all&rows=' + COUNT,
        status: account_url + 's/status/update'
      },

      // Utilisateur
      user: {
        all: user_url + 's/list?rows=' + COUNT,
        create: user_url + '/create',
        update: user_url + '/update',
        delete: user_url + '/delete',
      },

      // Auth
      auth: {
        login: this.url + 'auth/login',
        logout: this.url + 'auth/logout',
      },

      // Configuration
      setting: {
        detail: setting_url + 'Your url here',
        update: setting_url + 'Your url here',
      },

      // Statistics
      statistics: {
        detail: statistic_url ,
      }
    };
  }

}
