import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardAdmin from '../../DashboardAdmin'
import './PerdidosStyles.css'
import Footer from '../../../../../components/Footer/Footer';
import EditarPerdidos from './EditarPerdidos';
import ButtonAdd from '../Achados/components/ButtonAdd';
import ModalCadastrarPerdidos from './ModalCadastrarPerdidos';
import CadastrarPerdidos from './CadastrarPerdido';
import API from '../../../../../services/api';


const ListarPerdidos = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Usuário não está autenticado, redirecionar para a página de login
      navigate('/');
    }

    API.getPerdidos().then((response) => response.json())
    .then((data) => setData(data.perdidos))
    .catch((error) => console.log(error))
  }, [navigate]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null)
    API.getPerdidos()
      .then((response) => response.json())
      .then((data) => setData(data.perdidos))
      .catch((error) => console.log(error))
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

  const handleDelete = (id) => {
    API.deletePerdidos(id)
      .then((response) => response.json())
      .then((data) => {
        return setData(data.perdidos)
      })
      .catch((error) => console.log(error))
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
        <h2>Lista de itens Perdidos 📄</h2>
        <div className='container_additem'>
          <ButtonAdd onClick={openModalAdd}>Adicionar item perdido</ButtonAdd>
          {isOpenModalAdd && (
            <ModalCadastrarPerdidos>
              <button className='button__close' onClick={closeModalAdd}>X</button>
              <CadastrarPerdidos />
            </ModalCadastrarPerdidos>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quem perdeu</th>
              <th>E-mail</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} onClick={() => handleProductClick(item)}>
                <td>{item.id}</td>
                <td>{item.nome_item}</td>
                <td>{item.descricao}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
              </tr>
            ))}
          </tbody>
          {/* MODAL  */}
          {selectedProduct &&  (
            <>
              <div className='modal__table'>
                <div className='modal__content'>
                  {isEditing ?  (
                    <EditarPerdidos productData={selectedProduct} onSave={handleSave} onCancel={handleCancel} onClose={closeModal} />
                  ) : (
                    <>
                      <h3>Detalhes do produto</h3><div className='modal__detail'>
                        <p>Id: <span>{selectedProduct.id}</span></p>
                        <p>Item: <span>{selectedProduct.nome_item}</span></p>
                        <p>Descrição: <span>{selectedProduct.descricao}</span></p>
                        <p>Quem perdeu: <span>{selectedProduct.nome}</span></p>
                        <p>E-mail: <span>{selectedProduct.email}</span></p>
                        <p>Telefone: <span>{selectedProduct.telefone}</span></p>
                      </div>
                      <div className="button-group">
                        <button className="button__edit" onClick={handleEdit}>Editar</button>
                        <button className='button__delete' onClick={() => handleDelete(selectedProduct.id)}>Deletar</button>
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
