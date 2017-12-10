module.exports = (sequelize, DataTypes) => {
    return sequelize.define('rubrique', {
        titre: {
            type: DataTypes.STRING
        }
    });
}