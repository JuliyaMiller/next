const { products } = require('./products.json');

const allProductRequest = (req, res) => {
    if(req.method === "GET"){
        res.status(200).json(products);
    }
    else{
        res.status(405).json({'message':'product/all work only with "GET" method'})
    }
}

export default allProductRequest