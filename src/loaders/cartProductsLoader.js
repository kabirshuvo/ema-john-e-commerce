import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

//* if cart data is in database, then I had to use async await
//but here my datas are not in async await format so I'm doing this is regular way;

const storedCart = getShoppingCart();

const savedCart = [];

console.log(storedCart);

for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);

    }
}
    // if I have to send two things 
    // return [products, savedCart] "I can send like this or"
    //return {products, savedCart}


    return savedCart;
}

export default cartProductsLoader;