appAPI.ready(function($) {
  "use strict";
  appAPI.message.addListener(function(msg) {
    var err;
    console.log("Received", msg);
    if (msg.getStatus) {
      appAPI.message.toBackground({
        ready: true
      });
    } else {
      try {
        appAPI.resources.addInlineJS('js/squirt.js');
      } catch (_error) {
        err = _error;
        console.warn(err.message);
      }
    }
  });
});
