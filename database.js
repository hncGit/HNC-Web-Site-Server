let Sequelize = require("sequelize");
let config = require("./config");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort, 
    dialect: 'postgres',
    native: true,
    pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })