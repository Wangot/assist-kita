module.exports = function(sequelize, DataTypes) {
    var MedicineForm = sequelize.define("MedicineForm", {
        name: {
            type:  DataTypes.STRING(100),
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
        tableName: 'medicine_form',
        instanceMethods: {
        },
        classMethods: {
        },
        associate: function(models) {
        },
    });

    return MedicineForm;
};