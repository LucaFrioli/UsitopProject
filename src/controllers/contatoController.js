const pageName = 'contato';
const data = { location: pageName }

exports.getContato = (req, res) => {
	res.render(pageName, data);
}

exports.postContato = (req, res) => {
	const dataPost = { ...data, ...req.body };
	console.log(dataPost);
	res.render(pageName, dataPost);
}
