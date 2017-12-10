module.exports = (sequelize, DataTypes) => {
    return sequelize.define('panier', {
        prixTotal: {
            type: DataTypes.DECIMAL
        },
        nbArticles: {
            type: DataTypes.INTEGER
        }
    });
}