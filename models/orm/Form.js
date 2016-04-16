module.exports = function(sequelize, DataTypes) {
    var Form = sequelize.define("Form", {
        name: {
            type:  DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
            defaultValue: 'ACTIVE'
        }
    },
    {
        underscored: true,
        tableName: 'form',
        instanceMethods: {
        },
        classMethods: {
        },
        associate: function(models) {
        },
    });

    return Form;
};