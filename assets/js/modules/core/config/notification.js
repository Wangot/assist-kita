'use strict';

angular.module('app.core').config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    startTop: 10,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    replaceMessage: true,
    positionX: 'center',
    positionY: 'top'
  });
});

angular.module('app.core').config(['$i18nextProvider', function ($i18nextProvider) {
    // Optionally specify the instance of i18next to use; otherwise, it's obtained from `window`
    // $i18nextProvider.i18next = require('i18next');

    $i18nextProvider.options = {
        lng: 'de',
        useCookie: false,
        useLocalStorage: false,
        fallbackLng: 'dev',
        resGetPath: '../locales/__lng__/__ns__.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
}]);
