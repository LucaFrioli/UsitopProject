const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const Store = require('connect-mongo');
const flash = require('connect-flash');
const csrf = require('csurf');

const routes = require(path.resolve(__dirname, 'routes.js'));
const { csrfCheckErr, csrfMidd } = require(
	path.resolve(__dirname, 'src', 'middlewares', 'globalsMiddleware.js')
);
const app = express();
const port = process.env.PORT || 3000;
const daySessionsEnable = 2;

if (process.env.PRODUCTION === 'y') {
	const helmet = require('helmet');
	app.use(helmet());
}
// conexão como banco de dados :
mongoose
	.connect(process.env.CONNECTIONSTRING)
	.then(() => {
		app.emit('connected');
	})
	.catch((e) => {
		console.log(e);
		app.get('/404', (req, res) => {
			res.render('404');
		});
	});
//

// configuração de sessão
const SessionConfig = session({
	secret: process.env.SECRETSESSIONENTRY,
	store: Store.create({ mongoUrl: process.env.CONNECTIONSTRING }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * daySessionsEnable,
		httpOnly: true
	}
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());

app.use(SessionConfig);
app.use(csrf());
app.use(csrfCheckErr);
app.use(csrfMidd);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('connected', () => {
	app.listen(port, () => {
		console.log(`Aplicação rodando na porta ${port}`);
		console.log(`Acesse: http://localhost:${port}`);
	});
});
