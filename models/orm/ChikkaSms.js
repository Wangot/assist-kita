module.exports = function(sequelize, DataTypes) {
    var ChikkaSms = sequelize.define("ChikkaSms", {
        mobile_number: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        shortcode: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        message: {
            type: DataTypes.TEXT()
        },
        timestamp: {
            type: DataTypes.DATE
        }
    }, 
    {
        underscored: true,
        tableName: 'chikka_sms',
        instanceMethods: {
        },
        classMethods: {
            associate: function(models) {
            }
        },
        hooks: {
        }
    });

    return ChikkaSms;
};