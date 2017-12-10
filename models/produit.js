module.exports = (sequelize, DataTypes) => {
    return sequelize.define('produit', {
        titre: {
            type: DataTypes.STRING
        },
        dateDeParution: {
            type: DataTypes.DATE
        },
        prix: {
            type: DataTypes.DECIMAL
        },
        nombreDeLike: {
            type: DataTypes.INTEGER
        },
        nomAuteur: {
            type: DataTypes.STRING
        }
    });
}