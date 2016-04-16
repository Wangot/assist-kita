module.exports = function(router){
    var routeUrl = '/usages';

    // router.get(routeUrl, require('./list'));
    // router.get(routeUrl +'/:id', require('./view'));
    router.post(routeUrl +"/surplus", require('./surplus'));
    // router.post(routeUrl +'/:id/pledge', require('./pledge'));
};