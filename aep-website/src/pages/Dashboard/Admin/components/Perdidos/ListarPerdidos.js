import React, { useState, useEffect } from 'react'
import DashboardAdmin from '../../DashboardAdmin'
import './PerdidosStyles.css'


const ListarPerdidos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://45.235.53.125:8080/perdidos');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };


  return (
    <>
      <DashboardAdmin />
      <div className='table__container-achados'>
        <h2>Lista de itens Perdidos</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListarPerdidos
