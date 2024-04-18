const pageName = 'produtos';
const data = {location : pageName};

exports.getProdutos = (req, res) => {
    res.render(pageName, data);
}