import React, { useState } from 'react';
import '../styles/search.css';

const Search = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        filterData(e.target.value);
    };

    const filterData = (searchTerm) => {
        const filtered = data.filter((item) =>
        item.nome_item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className='container__input'>
            <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleInputChange}
            />

            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
