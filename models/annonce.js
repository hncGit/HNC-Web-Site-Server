module.exports = (sequelize, DataTypes) => {
    return sequelize.define('annonce', {
        contenu: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        }
    });
}