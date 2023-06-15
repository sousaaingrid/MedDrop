// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    stripe_key: 'pk_test_51N9BvXDmpzzBxcb83LN0RkvHf0tUMZCuxefUCABztxgkKgqUJ0wVsSTpcVUB7zz6d27QXiIXbnN09UEOybsX3Veu00rzqfp2FN',
    google: {
      "web": {
          "client_id": "369703697342-lnigbpqt2n7qrrsv73p5j3rl4kcnv3o5.apps.googleusercontent.com",
          "project_id": "meddrop-389919",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_secret": "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",
          "javascript_origins": [
              "http://localhost:4200"
          ]
      }
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