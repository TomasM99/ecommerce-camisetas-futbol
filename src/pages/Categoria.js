import './Spinner.scss';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useState, useEffect } from "react"
import BeatLoader from "react-spinners/BeatLoader";

const Categoria = () => {
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false);
        }, 500)
    }, [])

    return(
        <section>
            {
                spinner?
                <div className='spinner'>
                    <BeatLoader color="#000000" loading margin={5} size={10} />
                </div>
                :
                <>
                <ItemListContainer />
                </>
            }
        </section>
    )
}

export default Categoria