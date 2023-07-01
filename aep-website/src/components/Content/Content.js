import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import './contentStyles.css';

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://45.235.53.125:8080/achados?page=1')
      .then((response) => response.json())
      .then((json) => setData(json.achados));
  }, []);

  return (
    <>
      <Search data={data} />
      <div className='container-main'>
        <div className='container__item'>
          {data.map(item => (
            <div className='wrapper__item' key={item.id}>
              <div className='content__item'>
                <h1 className='image__item'>🛴</h1>
                <div className='container__name-text'>
                  <h2 className='item__name'>{item.nome_item}</h2>
                  <div className='item__text'>
                    <span className='item__label'>Descrição:</span>
                    <span className='item__descricao-text'>{item.descricao}</span>
                  </div>
                  <div className='item__text'>
                    <span className='item__label'>Local:</span>
                    <span className='item__descricao-text'>{item.local}</span>
                  </div>
                  <div className='item__text'>
                    <span className='item__label'>Hora:</span>
                    <span className='item__descricao-text'>{item.hora_aproximada}</span>
                  </div>
                  <div className='item__text'>
                    <span className='item__label'>Quem achou:</span>
                    <span className='item__descricao-text'>{item.quem_achou}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;