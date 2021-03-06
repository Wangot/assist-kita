module.exports = function(sequelize, DataTypes) {
    var GenericName = sequelize.define("GenericName", {
        name: {
            type:  DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        code: {
            type:  DataTypes.STRING(255),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
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
        tableName: 'generic_name',
        instanceMethods: {
        },
        classMethods: {
        associate: function(models) {
            }
        },
    });

    return GenericName;
};