module.exports = function(router){
    var routeUrl = '/assistance-request';

    // router.get(routeUrl, require('./list'));
    // router.get(routeUrl +'/:id', require('./view'));
    router.post(routeUrl, require('./add'));
    router.post(routeUrl +'/:id/pledge', require('./pledge'));
};