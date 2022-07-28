import './ItemList.scss';
import Item from '../Item/Item';

function ItemList({data}) {
    return (
        <>
            {data.map((producto) => {return <Item key={producto.id} data={producto} />})}
        </>
    );
}

export default ItemList;