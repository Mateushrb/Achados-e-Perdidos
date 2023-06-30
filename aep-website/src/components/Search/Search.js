import React from 'react';
import InputSearch from './components/InputSearch';
import './searchStyles.css';


const Search = ({ data }) => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [filteredData, setFilteredData] = useState([]);

    // const handleInputChange = (e) => {
    //     setSearchTerm(e.target.value);
    //     filterData(e.target.value);
    // };

    // const filterData = (searchTerm) => {
    //     const filtered = data.filter((item) =>
    //         item.nome_item.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setFilteredData(filtered);
    // };

    return (
        <div className="search-bar">
      <div className="search-bar__content">
        <InputSearch placeholder="Pesquisar" />
      </div>
    </div>
    );
};

export default Search;
