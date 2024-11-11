let products = [];
let productId = 1;

module.exports.addProductGateway = (product) => {
    product.product_id = productId++; // menambahkan ID produk
    products.push(product); // menyimpan produk ke array  
}

module.exports.getAllProductGateway = () =>{
    return products; 
}
module.exports.getProductByIdGateway = (id) =>{
    const product = products.find((p) => p.product_id === id); // mencari produk
    return product
}
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

module.exports.deleteProductByIdGateway = (id) =>{
    const productIndex = products.findIndex((p) => p.product_id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1); 
        return true
    }else{
        return false
    }
}