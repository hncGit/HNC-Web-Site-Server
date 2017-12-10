module.exports = (sequelize, DataTypes) => {
    return sequelize.define('photo', {
        nom: {
            type: DataTypes.STRING
        },
        extension: {
            type: DataTypes.STRING
        }
    });
}