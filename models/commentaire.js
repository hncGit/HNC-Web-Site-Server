module.exports = (sequelize, DataTypes) => {
    return sequelize.define('commentaire', {
        message: {
            type: DataTypes.STRING
        }
    });
}