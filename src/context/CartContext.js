import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productosCart, setProductosCart] = useState([]);

    function addItem(producto){
        setProductosCart([...productosCart, producto])
    }

    const data = {
        productosCart,
        setProductosCart,
        addItem
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export { CartContext }