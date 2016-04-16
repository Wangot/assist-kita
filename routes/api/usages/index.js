module.exports = function(router){
    var routeUrl = '/usages';

    router.get(routeUrl + '/:id/:type', require('./list'));
    // router.get(routeUrl +'/:id', require('./view'));
    router.post(routeUrl +"/surplus", require('./surplus'));
    router.get(routeUrl +"/:id/claim/:destinationid", require('./claim'));
    // router.post(routeUrl +'/:id/pledge', require('./pledge'));
};