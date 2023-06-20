import React, { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import './searchStyles.css';

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
        <div className="search-bar">
      <div className="search-bar__content">
        <input type="text" className="search-bar__input" placeholder="Pesquisar..." />
        <button type="submit" className="search-bar__button">
          <RiSearchLine />
        </button>
      </div>
    </div>
    );
};

export default Search;
