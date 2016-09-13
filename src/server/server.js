import express from 'express';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';

import config from './config';

import api from './routes/api';
import routes from './routes/frontend';

// Define our app
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

// Setup nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');

const port = process.env.PORT || config.port;

let router = express.Router();

// API router
app.use('/api', api());

// FE router
app.use('/', routes());

// Start server
app.listen(port);
console.log('Huzzah! Checkout port: ' + port);
