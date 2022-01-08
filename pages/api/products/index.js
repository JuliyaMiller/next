const { products } = require('./products.json');

const ProductRequest = (req, res) => {
    if(req.method === "GET"){
       res.status(200).json(products.slice(0,5))
    }
    else{
        res.status(405).json({'message':'product/ work only with "GET" method'})
    }
}

export default ProductRequest