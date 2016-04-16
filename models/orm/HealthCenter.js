var Q = require('q');
module.exports = function(sequelize, DataTypes) {
    var HealthCenter = sequelize.define("HealthCenter", {
        kmits_id: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        health_facility_type:{
            type: DataTypes.STRING(100),
            defaultValue: ''
        },
        province_name_psgc: {
            type:  DataTypes.STRING(100),
            validate: {
            }
        },
        region_name: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        health_facility_name: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        facility_code: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        health_facility_code_short: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        province_name: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        longitude: {
            type:  DataTypes.DECIMAL(18,12)
        },
        latitude: {
            type:  DataTypes.DECIMAL(18,12)
        },
        citymunicipality_name: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        }
    },
    {
        underscored: true,
        tableName: 'health_center',
        classMethods: {
            associate: function(models) {
                // HealthCenter.hasOne(models.User)
            }
        },
        hooks: {
        },
        instanceMethods: {
            //dist as distance in kilometers
            findByLocation: function (latitude, longitude, distance) {
                var deferred = Q.defer();
                sequelize.query("SELECT id, ( 6371 * acos( cos( radians(37) ) * cos( radians( " + latitude + " ) ) * cos( radians( "+ longitude +" ) - radians(-122) ) + sin( radians(37) ) * sin( radians( " + latitude + " ) ) ) ) AS distance FROM markers HAVING distance < "+ distance +" ORDER BY distance LIMIT 0 , 20;" )
                    .then(function (result) {
                        deferred.resolve(result);
                    })
                    .catch(function (err) {
                        deferred.reject(err);
                    });
                return deferred;
            }
        }
    });

    return HealthCenter;
};