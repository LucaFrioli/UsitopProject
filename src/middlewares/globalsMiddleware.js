exports.demo = (req, res, next) => {
	console.log('\nestou funcionando\n');
	next();
};

exports.csrfCheckErr = (err, req, res, next) => {
	if (err && err.code === 'EBADCSRFTOKEN') {
		return res.render('404');
	} else {
		next();
	}
};

exports.csrfMidd = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};
