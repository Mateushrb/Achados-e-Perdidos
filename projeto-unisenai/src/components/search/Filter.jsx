import React from 'react'
import '../../styles/partial/filter.scss';


const filter = () => {
    return (
        <>
            <div className="filter-component">
                <select>
                    <option value="">Selecione uma opção</option>
                    <option value="latest">Último adicionado</option>
                    <option value="oldest">Primeiro adicionado</option>
                </select>
            </div>
        </>
    )
}

export default filter
