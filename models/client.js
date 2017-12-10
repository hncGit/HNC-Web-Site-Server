module.exports = (sequelize, DataTypes) => {
    return sequelize.define('client', {
        tel: {
            type: DataTypes.STRING
        },
    })
}