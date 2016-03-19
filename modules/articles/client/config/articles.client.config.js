(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Events',
      state: 'articles.list',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Create an Event',
      state: 'articles.create',
      roles: ['admin']
    });


    // Add the dropdown list item
   // Menus.addSubMenuItem('topbar', 'articles', {
     // title: 'List of Events',
      //state: 'articles.list'
    //});

    // Add the dropdown create item
    //Menus.addSubMenuItem('topbar', 'articles', {
      //title: 'Create Event',
      //state: 'articles.create',
      //roles: ['user']
    //});
  }
})();
