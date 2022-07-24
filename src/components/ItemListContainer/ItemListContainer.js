import './ItemListContainer.scss';
import ItemCard from '../ItemCard/ItemCard';

function ItemListContainer({division}) {
    return (
        <div className='seccion-items'>
            <h2>{division}</h2>
            <div className='lista-items'>
                <ItemCard imagen={'camiseta-argentina.png'} nombre="Camiseta titular Argetina 2022" precio={14500} stock={25}/>
                <ItemCard imagen={'camiseta-brasil.jpg'} nombre="Camiseta titular Brasil 2022" precio={12500} stock={10}/>
                <ItemCard imagen={'camiseta-boca.jpg'} nombre="Camiseta titular boca 2021" precio={6500} stock={5}/>
                <ItemCard imagen={'camiseta-river.jpg'} nombre="Camiseta titular river 2021" precio={6500} stock={5}/>
                <ItemCard imagen={'camiseta-estudiantes.jpg'} nombre="Camiseta titular estudiantes 2021" precio={6500} stock={3}/>
            </div>
        </div>
    );
}

export default ItemListContainer;