appAPI.ready(function($) {
  "use strict";
  var gremlinsActive;
  gremlinsActive = {};
  appAPI.browserAction.setResourceIcon('images/icon.png');
  appAPI.browserAction.setTitle('Click to Squirt');
  appAPI.browserAction.setBadgeText('Ready');
  appAPI.browserAction.setBadgeBackgroundColor([0, 255, 0, 150]);
  appAPI.browserAction.onClick(function() {
    appAPI.message.toActiveTab({
      "start": true
    });
  });
  appAPI.tabs.onTabSelectionChanged(function(tabInfo) {
    appAPI.browserAction.setBadgeText('');
    appAPI.message.toActiveTab({
      "getStatus": true
    });
    console.log("Tab selection changed; Requesting status", tabInfo);
  });
  appAPI.message.addListener(function(msg) {
    console.log("Msg from tab", msg);
    appAPI.browserAction.setBadgeText('Ready');
  });
});
