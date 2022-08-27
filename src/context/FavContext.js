import { createContext, useState } from "react";

const FavContext = createContext();

const FavProvider = ({children}) => {
    const [productosFav, setProductosFav] = useState([]);

    return(
        <FavContext.Provider >
            {children}
        </FavContext.Provider>
    )
}

export default FavProvider;

export { FavContext }