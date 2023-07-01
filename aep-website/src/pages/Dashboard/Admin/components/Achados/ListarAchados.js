import React, { useState, useEffect } from 'react'
import DashboardAdmin from '../../DashboardAdmin'
import Footer from '../../../../../components/Footer/Footer';

import './AchadosStyles.css'
import './ModalStyles.css'
import EditAchados from './EditAchados';
import ButtonAdd from './components/ButtonAdd';
import ModalCadastrarAchados from './ModalCadastrarAchados';
import CadastrarAchados from './CadastrarAchados';

const ListarAchados = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  useEffect(() => {
    fetch('http://45.235.53.125:8080/achados?page=1')
      .then((response) => response.json())
      .then((json) => setData(json.achados));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedProduct) => {
    console.log('Salvar alterações:', updatedProduct);
    setSelectedProduct(updatedProduct);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log('Deletar produto:', selectedProduct);
  };

  const openModalAdd = () => {
    setIsOpenModalAdd(true);
  }

  const closeModalAdd = () => {
    setIsOpenModalAdd(false);
  };

  return (
    <>
      <DashboardAdmin />
      <div className='table__container-achados'>
        <h2>Lista de itens achados 📄</h2>
        <div className='container_additem'>
          <ButtonAdd onClick={openModalAdd}>Adicionar item achado</ButtonAdd>
          {isOpenModalAdd && (
            <ModalCadastrarAchados>
              <button className='button__close' onClick={closeModalAdd}>X</button>
              <CadastrarAchados />
            </ModalCadastrarAchados>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Local</th>
              <th>Hora</th>
              <th>Quem achou</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} onClick={() => handleProductClick(item)}>
                <td>{item.id}</td>
                <td>{item.nome_item}</td>
                <td>{item.local}</td>
                <td>{item.hora_aproximada}</td>
                <td>{item.quem_achou}</td>
              </tr>
            ))}
          </tbody>

          {/* MODAL  */}
          {selectedProduct && (
            <>
              <div className='modal__table'>
                <div className='modal__content'>
                  {isEditing ? (
                    <EditAchados product={selectedProduct} onSave={handleSave} onCancel={handleCancel} />
                  ) : (
                    <>
                      <h3>Detalhes do produto</h3><div className='modal__detail'>
                        <p>Id: <span>{selectedProduct.id}</span></p>
                        <p>Item: <span>{selectedProduct.nome_item}</span></p>
                        <p>Descrição: <span>{selectedProduct.descricao}</span></p>
                        <p>local: <span>{selectedProduct.local}</span></p>
                        <p>Quem achou: <span>{selectedProduct.quem_achou}</span></p>
                        <p>Hora aproximada: <span>{selectedProduct.hora_aproximada}</span></p>
                        <p>Dono encontrado: <span>{selectedProduct.dono_encontrado}</span></p>
                      </div>
                      <div className="button-group">
                        <button className="button__edit" onClick={handleEdit}>Editar</button>
                        <button className='button__delete' onClick={handleDelete}>Deletar</button>
                      </div>
                    </>
                  )}
                  <button className='button__close' onClick={closeModal}>X</button>
                </div>
              </div>
            </>
          )}
        </table>
      </div>
      <Footer />
    </>
  )
}

export default ListarAchados
