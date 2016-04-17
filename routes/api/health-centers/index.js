module.exports = function(router){
    var routeUrl = '/health-centers';

    router.get(routeUrl, require('./list'));
    router.get(routeUrl +'/:lat/:lng/:dist', require('./findByLocation'));
    router.get(routeUrl +'/:id', require('./view'));
    // router.post(routeUrl, require('./add'));
    // router.post(routeUrl +'/:id', require('./update'));
    // router.put(routeUrl +'/:id', require('./update'));
};

//http://localhost:3000/health-centers/near/16.395558000000/120.352060000000/30