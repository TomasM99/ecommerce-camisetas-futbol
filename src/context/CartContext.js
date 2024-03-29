import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productosCart, setProductosCart] = useState([]);
    const [total, setTotal] = useState(0);

    function removeItem(id, cantidad){
        setProductosCart(productosCart.filter( (producto) => producto.id !== id));
        setTotal(total - cantidad);
    }
    function addItem(producto, cantidad){
        let isInCart = productosCart.find(product => product.id === producto.id);
        if(isInCart){
            productosCart.find(product => product.id === producto.id).cantidad += cantidad;
        }else{
            setProductosCart([...productosCart, {...producto, cantidad}]);
        }
        setTotal(total + cantidad);
    }
    function clear(){
        setProductosCart([]);
        setTotal(0);
    }

    const data = {
        productosCart,
        total,
        setProductosCart,
        addItem,
        clear,
        removeItem,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export { CartContext }