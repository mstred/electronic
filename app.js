'use strict';

(function(app, BrowserWindow) {

  var $window;
  var $settings = {};
  var $url = `file://${__dirname}/app/index.html`;

  app.on('ready', function() {

    $window = new BrowserWindow($settings);
    $window.loadURL($url);

    $window.on('closed', function () { $window = null });

  });

})(
  require('app'),
  require('browser-window')
);
