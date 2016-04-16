module.exports = function(sequelize, DataTypes) {
    var HealthCenter = sequelize.define("HealthCenter", {
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
        city_municipality_name: {
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
        }
    });

    return HealthCenter;
};