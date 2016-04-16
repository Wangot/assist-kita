module.exports = function(sequelize, DataTypes) {
    var Usage = sequelize.define("Usage", {
        note: {
            type:  DataTypes.TEXT,
            defaultValue: ''
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'PENDING', 'CANCELLED'),
            defaultValue: 'ACTIVE'
        },
        type: {
            type: DataTypes.ENUM('SURPLUS', 'PLEDGE', 'CONSUMPTION'),
            defaultValue: 'CONSUMPTION'
        }
    },
    {
        underscored: true,
        tableName: 'usage',
        instanceMethods: {
        },
        classMethods: {
        },
        associate: function(models) {
            Usage.belongsTo(models.Inventory);
        },
    });

    return Usage;
};