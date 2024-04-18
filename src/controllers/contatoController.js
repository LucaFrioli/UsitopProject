const pageName = 'contato';
const data = {location : pageName}

exports.getContato = (req, res) => {
    res.render(pageName, data);
}