import { createContext, useState } from "react";

const FavContext = createContext();

const FavProvider = ({children}) => {
    const [productosFav, setProductosFav] = useState([]);
    const [totalFavs, setTotalFavs] = useState(0);

    function agregarFav(producto){
        setProductosFav([...productosFav, producto]);
        setTotalFavs(totalFavs + 1);
    }
    function sacarFav(id){
        setProductosFav(productosFav.filter( (producto) => producto.id !== id));
        setTotalFavs(totalFavs - 1);
    }
    function estaEnFav(id){
        return productosFav.find(product => product.id === id);
    }
    function clear(){
        setProductosFav([]);
        setTotalFavs(0);
    }

    const dataFav = {
        productosFav,
        totalFavs,
        agregarFav,
        sacarFav,
        estaEnFav,
        clear,
    }

    return(
        <FavContext.Provider value={dataFav}>
            {children}
        </FavContext.Provider>
    )
}

export default FavProvider;

export { FavContext }