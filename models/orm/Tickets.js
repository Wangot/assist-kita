module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        title: {
            type: DataTypes.STRING(100)
        },
        content: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM('ACTIVE', 'CLOSED'),
            defaultValue: 'ACTIVE'
        }
    }, 
    {
        underscored: true,
        tableName: 'ticket',
        classMethods: {
            associate: function(models) {
                Ticket.belongsTo(models.ChikkaSms),
                Ticket.belongsTo(models.User, {as: 'Maker', foreignKey: 'maker_id'}),
                Ticket.belongsTo(models.User, {as: 'Agent', foreignKey: 'agent_id'}),
                Ticket.hasMany(models.Ticket, { as: { singular: 'SubTicket', plural: 'SubTickets'}, foreignKey: 'parent_id'})
            }
        },
        hooks: {
        }
    });

    return Ticket;
};