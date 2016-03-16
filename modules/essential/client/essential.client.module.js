(function (app) {
  'use strict';

  app.registerModule('essential');
  app.registerModule('essential.services');
  app.registerModule('essential.routes', ['ui.router', 'essential.services']);
})(ApplicationConfiguration);
