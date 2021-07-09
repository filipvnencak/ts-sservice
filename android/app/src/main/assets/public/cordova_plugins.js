
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "onesignal-cordova-plugin.OneSignal",
          "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
          "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
          "OneSignal"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-inappbrowser": "5.0.0",
      "onesignal-cordova-plugin": "2.11.4"
    };
    // BOTTOM OF METADATA
    });
    