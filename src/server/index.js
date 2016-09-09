import http from 'http';
import express from 'express';
import nunjucks from 'nunjucks';
import cors from 'cors';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');

// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// FE router
	app.get('/', (req, res) => {
		res.render('index');
	});

	// api router
	app.use('/api', api({ config, db }));

	app.server.listen(process.env.PORT || config.port);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
