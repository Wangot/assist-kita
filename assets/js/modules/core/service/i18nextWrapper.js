
var i18nextWrapper = function($q, $i18next) {
  return {
    init : function() {
      var def = $q.defer();

      var interval = setInterval(function() {
        if (window.i18n.isInitialized() == true) {
          def.resolve(true);
          clearInterval(interval);
        }
      }, 100);

      return def.promise;
    },
    t : function(namespace, params) {
      var translated = (window.i18n.t(namespace)) ? window.i18n.t(namespace) : namespace;
      if (params) {
        translated = (window.i18n.t(namespace, params)) ? window.i18n.t(namespace, params) : namespace;
      }

      return translated;
    }
  };
};


module.exports = i18nextWrapper;