import React, { useState } from 'react'
import '../../styles/partial/cardItem.scss';

const CardItem = () => {
    const itemsPerPage = 10; // Quantidade de itens por página
    const totalItems = 50; // Total de itens na lista (exemplo)

    const [currentPage, setCurrentPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState([]);

    const loadMoreItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newItems = Array.from({ length: itemsPerPage }, (_, index) => `Item ${startIndex + index + 1}`);
        setDisplayedItems((prevItems) => [...prevItems, ...newItems]);
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            <div className='container__card-item'>
                <div className="card-item">
                    <div className='dentro-card'>
                        <img src="#" className="card-item__image" />
                        <h2 className="card-item__name">Cebola Roxa</h2>
                        <p className="card-item__description">Cebola perdida na sala de aula</p>
                        <p className="card-item__">Data: 19/05/2023</p>
                    </div>
                </div>
                <div>
                    {displayedItems.length < totalItems && (
                        <button onClick={loadMoreItems}>Carregar Mais</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default CardItem
