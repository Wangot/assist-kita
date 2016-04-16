// var path = require('path');
 
module.exports = function(filter, query, isRawQuery){
    var perPage = 20;

    if(isRawQuery){
        if(query.orderBy){
            var orderBy = true; //ASC
            query.sortBy || (query.sortBy = 'ASC');

            if(query.sortBy.toUpperCase() != 'ASC'){
                orderBy = false;
            }

            filter.order(query.orderBy, orderBy);
        }

        query.page || (query.page = 0);
        query.perPage || (query.perPage = perPage);

        if(query.page > 0){
            filter.limit(query.perPage);
            filter.offset( (query.page - 1) * query.perPage );
        }else{
            query.page = 1;
        }
    }else{
        filter.offset = 0;

        if(query.orderBy){
            var sortBy = 'ASC';
            if(query.sortBy) sortBy = query.sortBy;
            filter.order = [[query.orderBy, sortBy]];
        }

        if(query.perPage){
            filter.limit = query.perPage;
        } else{
            filter.limit = query.perPage = perPage;
        }

        if(query.page || query.page > 0){
            filter.offset = (query.page - 1) * filter.limit;
        } else {
            query.page = 1;
        }


        if(query.page == 0){
            delete filter.limit;
            delete filter.offset;
            delete query.page;
            delete query.perPage;
        }
    }
}