module.exports = (sequelize, DataTypes) => {
    return sequelize.define("categorie", {
        titre: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING
        }
    })
}