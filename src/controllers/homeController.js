const pageName = 'index';

exports.getIndex = (req, res) => {
	// aqui está ocorrendo a renderização do index.ejs como exemplo
	res.render(pageName);
};
