'use strict';
((app, BrowserWindow) => {
  let win;
  let settings = {
    autoHideMenuBar: true,
    useContentSize: true
  };
  var url = `file://${__dirname}/app/index.html`;

  app.on('ready', () => {
    win = new BrowserWindow(settings);
    win.loadURL(url);

    win.on('closed', () => { win = null });
  });
})(
  require('app'),
  require('browser-window')
);
