module.exports = function(router){
    var routeUrl = '/users';

    router.get(routeUrl +"/test", require('./add'));
    // router.post(routeUrl +'/reset-password', require('./resetPassword'));

    // var changePass = require('./changePassword');
    // router.get(routeUrl +'/password-change/:token', changePass.get);

    router.get(routeUrl, require('./list'));
    // router.get(routeUrl + '/auth', require('./authUser'));
    router.get(routeUrl + '/:userId', require('./view'));
    router.post(routeUrl, require('./add'));
    // router.post(routeUrl +'/:userId', require('./update'));
    // router.put(routeUrl +'/:userId', require('./update'));

};