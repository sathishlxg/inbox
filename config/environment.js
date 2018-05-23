/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: "inbox",
        environment: environment,
        rootURL: "/",
        locationType: "auto",
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    ENV.contentSecurityPolicy = {
        "default-src": "'none'",
        "script-src": "'self' http://inbox-sathishlxg.c9users.io:8081",
        "media-src": "'self'",
        "content-src":
            "'self' http://inbox-sathishlxg.c9users.io:8081 ws://inbox-sathishlxg.c9users.io:8081",
        "font-src": "'self' https://maxcdn.bootstrapcdn.com/",
        "style-src":
            "'self' http://inbox-sathishlxg.c9users.io:8081 https://maxcdn.bootstrapcdn.com",
        "img-src":
            "'self' https://ssl.gstatic.com https://lh4.googleusercontent.com https://mail.google.com"
    };

    if (environment === "development") {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === "test") {
        // Testem prefers this...
        ENV.rootURL = "/";
        ENV.locationType = "none";

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = "#ember-testing";
    }

    if (environment === "production") {
    }

    return ENV;
};
