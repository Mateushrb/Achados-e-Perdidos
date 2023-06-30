import React, { useState, useEffect } from 'react'
import DashboardAdmin from '../../DashboardAdmin'
import './PerdidosStyles.css'
import Footer from '../../../../../components/Footer/Footer';
import EditarPerdidos from './EditarPerdidos';
import ButtonAdd from '../Achados/components/ButtonAdd';


const ListarPerdidos = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('http://45.235.53.125:8080/perdidos')
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


  return (
    <>
      <DashboardAdmin />
      <div className='table__container-achados'>
        <h2>Lista de itens Perdidos 📄</h2>
        <div className='container_additem'>
        <ButtonAdd>Adicionar item Perdido</ButtonAdd>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Hora</th>
              <th>Quem achou</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} onClick={() => handleProductClick(item)}>
                <td>{item.id}</td>
                <td>{item.nome_item}</td>
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
                    <EditarPerdidos product={selectedProduct} onSave={handleSave} onCancel={handleCancel} />
                  ) : (
                    <>
                      <h3>Detalhes do produto</h3><div className='modal__detail'>
                        <p>Id: {selectedProduct.id}</p>
                        <p>Item: {selectedProduct.nome_item}</p>
                        <p>Descrição: {selectedProduct.descricao}</p>
                        <p>local: {selectedProduct.local}</p>
                        <p>Quem achou: {selectedProduct.quem_achou}</p>
                        <p>Hora aproximada: {selectedProduct.hora_aproximada}</p>
                        <p>Dono encontrado: {selectedProduct.dono_encontrado}</p>
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

export default ListarPerdidos
