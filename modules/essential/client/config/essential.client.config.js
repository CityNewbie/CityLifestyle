'use strict';

(function () {
  'use strict';

  angular
    .module('essential')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Essential Lifestyle',
      state: 'essential',
      roles: ['*']
    });

   }
})();
