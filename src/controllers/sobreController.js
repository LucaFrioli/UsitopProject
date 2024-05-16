const pageName = 'sobre';
const data = { location: pageName };

exports.getSobre = (req, res) => {
	res.render(pageName, data);
};
