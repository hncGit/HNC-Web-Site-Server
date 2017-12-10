let Sequelize = require("sequelize");
let config = require("./config");

let User = require('./models/test');

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
        console.log("Connection to database has been established successfully.");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

const Test2 = sequelize.import(__dirname + "/models/test");
const Administrateur = sequelize.import(__dirname + "/models/administrateur");
const Adresse = sequelize.import(__dirname + "/models/adresse");
const Annonce = sequelize.import(__dirname + "/models/annonce");
const Categorie = sequelize.import(__dirname + "/models/categorie");
const Client = sequelize.import(__dirname + "/models/client");
const Commande = sequelize.import(__dirname + "/models/commande");
const Commentaire = sequelize.import(__dirname + "/models/commentaire");
const Forum = sequelize.import(__dirname + "/models/forum");
const LignePanier =sequelize.import(__dirname + "/models/lignePanier");
const Message = sequelize.import(__dirname + "/models/message");
const Panier = sequelize.import(__dirname + "/models/panier");
const Produit = sequelize.import(__dirname + "/models/produit");
const Photo = sequelize.import(__dirname + "/models/photo");
const Rubrique = sequelize.import(__dirname + "/models/rubrique");
const Sujet = sequelize.import(__dirname + "/models/sujet");
const Utilisateur = sequelize.import(__dirname + "/models/utilisateur"); 

//-------------------------------------------------------

Utilisateur.hasOne(Administrateur) ;
Utilisateur.hasOne(Client);

Utilisateur.sync({force: true}).then(() => {
    console.log("Utilisateur created") ;
});

Administrateur.sync({force: true}).then(() => {
    console.log("Administrateur created") ;
});  

Client.sync({force: true}).then(() => {
    console.log("Client created") ;
});


//Photo.hasOne(Utilisateur);

//----------------------------------------------------------

Categorie.hasOne(Forum);
Categorie.hasMany(Rubrique, {as : 'Rubriques'});
Rubrique.hasMany(Produit, {as : 'Produits'});

Categorie.sync({force: true}).then(() => {
    console.log("Categorie created") ;
});

Forum.sync({force: true}).then(() => {
    console.log("Forum created") ;
});

Rubrique.sync({force: true}).then(() => {
    console.log("Rubrique created") ;
});

Produit.sync({force: true}).then(() => {
    console.log("Produit created") ;
});

//----------------------------------------------------------
Produit.hasMany(Photo, {as : "Photos"});
Produit.hasMany(Commentaire, {as : 'Commentaires'});
Produit.hasOne(LignePanier);

Client.hasMany(Commentaire, {as : 'Commentaires'});
Client.hasMany(Panier, {as : 'Paniers'});
Client.hasMany(Commande, {as : 'Commandes'});
Client.hasMany(Adresse, {as : 'Adresses'});

Commande.hasMany(LignePanier, {as : 'LignePanier'});

Photo.sync({force: true}).then(() => {
    console.log("Photo created") ;
});

Commande.sync({force: true}).then(() => {
    console.log("Commande created") ;
});

Panier.sync({force: true}).then(() => {
    console.log("Panier created") ;
});

LignePanier.sync({force: true}).then(() => {
    console.log("LignePanier created") ;
});


Commentaire.sync({force: true}).then(() => {
    console.log("Commentaire created") ;
});

Adresse.sync({force: true}).then(() => {
    console.log("Adresse created") ;
});

//------------------------------------------------
Forum.hasMany(Sujet, {as : 'Sujets'});
Forum.hasMany(Annonce, {as : 'Annonces'});

Sujet.hasMany(Message, {as : 'Messages'}) ;
Administrateur.hasMany(Annonce, {as : 'Annonces'});
Utilisateur.hasMany(Sujet, {as : 'Sujets'}) ;
Utilisateur.hasMany(Message, {as : 'Messages'});

Annonce.sync({force: true}).then(() => {
    console.log("Annonce created") ;
});

Sujet.sync({force: true}).then(() => {
    console.log("Sujet created") ;
});

Message.sync({force: true}).then(() => {
    console.log("Message created") ;
});





