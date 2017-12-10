module.exports = (sequelize, DataTypes) => {
    return sequelize.define('sujet', {
        titre: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        }
    });
}