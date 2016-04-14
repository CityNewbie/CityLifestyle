'use strict';

(function () {
  'use strict';

  angular
    .module('essential')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Important Locations',
      state: 'essential',
      roles: ['*']
    });

   }
})();
