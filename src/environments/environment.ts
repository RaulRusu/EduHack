// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // tslint:disable-next-line:max-line-length
    apiKey: 'AIzaSyDFfC6k-TJY0w6jFaCLELRs6I4duPwkIRI',
    authDomain: 'bway-eduhack.firebaseapp.com',
    databaseURL: 'https://bway-eduhack.firebaseio.com',
    projectId: 'bway-eduhack',
    storageBucket: 'bway-eduhack.appspot.com',
    messagingSenderId: '817507969697'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
