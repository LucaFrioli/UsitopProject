const pageName = 'index';
const data = { location: pageName };

exports.getIndex = (req, res) => {
	res.render(pageName, data);
};
