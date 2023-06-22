import React, { useState, useEffect } from 'react'
import DashboardAdmin from '../../DashboardAdmin'
import './AchadosStyles.css'


const ListarAchados = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://45.235.53.125:8080/achados')
      .then((response) => response.json())
      .then((json) => setData(json.achados));
  }, []);

  return (
    <>
      <DashboardAdmin />
      <div className='table__container-achados'>
        <h2>Lista de itens Achados 📄</h2>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome_item}</td>
                <td>{item.hora_aproximada}</td>
                <td>{item.quem_achou}</td>
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

export default ListarAchados
