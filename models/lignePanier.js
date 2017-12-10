module.exports = (sequelize, DataTypes) => {
    return sequelize.define('lingnePanier', {
        quantite: {
            type: DataTypes.INTEGER
        },
        libelle: {
            type: DataTypes.STRING
        },
        prix: {
            type: DataTypes.DECIMAL
        }
    });
}