
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
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
      "onesignal-cordova-plugin": "2.11.4"
    };
    // BOTTOM OF METADATA
    });
    