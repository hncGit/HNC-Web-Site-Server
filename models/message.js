module.exports = (sequelize, DataTypes) => {
    return sequelize.define('message', {
        date: {
            type: DataTypes.DATE
        },
        contenu: {
            type: DataTypes.STRING
        }
    });
}