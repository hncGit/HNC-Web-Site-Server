module.exports = (sequelize, DataTypes) => {
    return sequelize.define('adresse', {
        numeroRue: {
            type: DataTypes.INTEGER
        },
        nomQuartier: {
            type: DataTypes.STRING
        },
        ville: {
            type: DataTypes.STRING
        },
        pays: {
            type: DataTypes.STRING
        },
        tel: {
            type: DataTypes.STRING
        }
    })
}