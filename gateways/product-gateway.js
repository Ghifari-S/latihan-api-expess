let products = [];
let productId = 1;


// add products
module.exports.addProductGateway = (product) => {
    product.product_id = productId++; 
    products.push(product); 
}

// get all product
module.exports.getAllProductGateway = () =>{
    return products; 
}

// get product by id
module.exports.getProductByIdGateway = (id) =>{
    const product = products.find((p) => p.product_id === id); 
    return product
}

// update product by id
module.exports.updateProductByIdGateway = (id, data) => {
    const productIndex = products.findIndex((p) => p.product_id === id);
    if(productIndex !== -1){
        products[productIndex] = {
            ...products[productIndex],
            ...data,
          };
          return true
    } else{
       return false 
    }
}

// delete product by id
module.exports.deleteProductByIdGateway = (id) =>{
    const productIndex = products.findIndex((p) => p.product_id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1); 
        return true
    }else{
        return false
    }
}