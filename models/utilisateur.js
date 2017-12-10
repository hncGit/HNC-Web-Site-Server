module.exports = (sequelize, DataTypes) => {
    return sequelize.define('utilisateur', {
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        dateCreationCompte: {
            type: DataTypes.DATE
        },
        motDePasse: {
            type: DataTypes.STRING
        },
        login: {
            type: DataTypes.STRING
        }
    })
}