const express = require('express');
const session = require('express-session');
const MongoDbSession = require('connect-mongodb-session')(session);
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

/* DB CONNECTION */

//const mongoUri = 'mongodb://localhost:27017/gamestat';
const mongoUri = 'mongodb+srv://posso_martin:Sorensen2000$@manager.i9zso.mongodb.net/manager?retryWrites=true&w=majority';

const {mongoose} = require('./db/mongoose');

//const UrlDomain = 'http://localhost:4200';
const UrlDomain = 'https://gamestat-builder.heroku.com';

/* Sessions Mongo */
const store = new MongoDbSession({
    uri: mongoUri,
    collection: "mySessions",
});


/* Mongo Models */
const users = require('./routes/users');
const roles = require('./routes/roles');
const games = require('./routes/games');
const categories = require('./routes/categories');
const stats = require('./routes/stats');
const items = require('./routes/items');
const boosts = require('./routes/boosts');
const gamestats = require('./routes/gamestats');

/* Enable Cors Middleware */

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", UrlDomain); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
    next();
});

/* Middleware Parser */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* Express session Middleware */

app.use(session({
    secret: 'Key that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: store
}));

/* Set Static Folder */
app.use(express.static('public'));

/* Images Path */

app.use('/images', express.static(path.join('images')));


/* Routes */

app.use('/api/users', users);
app.use('/api/roles', roles);
app.use('/api/games', games);
app.use('/api/categories', categories);
app.use('/api/stats', stats);
app.use('/api/items', items);
app.use('/api/boosts', boosts);
app.use('/api/gamestats', gamestats);

/* Start Server */
app.listen(port, () => {
    console.log('Server is listening on Port: ' + port);
});