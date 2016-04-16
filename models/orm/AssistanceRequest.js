module.exports = function(sequelize, DataTypes) {
    var AssistanceRequest = sequelize.define("AssistanceRequest", {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: DataTypes.TEXT
    }, 
    {
        underscored: true,
        tableName: 'assistance_request',
        instanceMethods: {
        },
        classMethods: {
            associate: function(models) {
                AssistanceRequest.belongsTo(models.Inventory),
                AssistanceRequest.belongsTo(models.HealthCenter)
            }
        },
        hooks: {
        }
    });

    return AssistanceRequest;
};