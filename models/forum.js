module.exports = (sequelize, DataTypes) => {
    return sequelize.define('forum', {
        titre: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
    });
}