// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyAm0JfV4aJBaHGIzDZG07kEE87OsAPoC_M',
      authDomain: 'weather-app-be515.firebaseapp.com',
      databaseURL: 'https://weather-app-be515.firebaseio.com',
      projectId: 'weather-app-be515',
      storageBucket: 'weather-app-be515.appspot.com',
      messagingSenderId: '765455562656'
    }
};
