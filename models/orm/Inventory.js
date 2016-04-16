module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        unit: DataTypes.STRING(255),
        dosage: DataTypes.STRING(255),
        batch_code: DataTypes.STRING(255),
        lot_number: DataTypes.STRING(255),
        stock: DataTypes.INTEGER,
        consumed: DataTypes.INTEGER,
        date_expire: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        date_issued: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        status: {
            type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
            defaultValue: 'ACTIVE'
        }
    },
    {
        underscored: true,
        tableName: 'inventory',
        instanceMethods: {
        },
        classMethods: {
        associate: function(models) {
                Inventory.belongsTo(models.HealthCenter),
                Inventory.belongsTo(models.GenericName),
                Inventory.belongsTo(models.MedicineForm)
            }
        },
    });

    return Inventory;
};