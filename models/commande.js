module.exports = (sequelize, DataTypes) => {
    return sequelize.define('commande', {
        modePaiement: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        delaisLivraison: {
            type: DataTypes.DATE
        },
        motantTotal: {
            type: DataTypes.DECIMAL
        }
    });
}