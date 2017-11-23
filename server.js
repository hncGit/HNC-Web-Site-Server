let express = require('express'),
    bodyParser = require('body-parser'),
    config = require("./config"),
    db = require('./database'),
    app = express()

    app.route("/")
        .get((req, res) => {res.send("HNC Website.")})

    app.listen(config.port);
    console.log("HNC website service started on : "+ config.port);

