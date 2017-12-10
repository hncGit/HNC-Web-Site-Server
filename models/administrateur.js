module.exports = (sequelize, DataTypes) => {
    return sequelize.define('administrateur', {
        niveau: {
            type: DataTypes.INTEGER
        }
    })
}

