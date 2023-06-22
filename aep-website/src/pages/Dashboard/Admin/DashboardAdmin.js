import React from 'react'
import Header from '../../../components/Header/Header'
import './DashboardAdminStyles.css'

const DashboardAdmin = () => {
  return (
    <>
      <Header />
      <div className="dashboard__container">
        <div className="dashboard__sidebar">
          <p className='dashboar__paragraph'>Bem-vindo ao painel de controle! 🌟</p>
          <div className='dashboard-menu'>
            <nav className='page__menu'>
              <ul class="menu__list">
                <li class="menu__group"><a href="/#" class="menu__link">Dashboard</a>
                </li>
                <li class="menu__group"><a href="/dashboard/admin/listar-achados" class="menu__link">Achados</a>
                </li>
                <li class="menu__group"><a href="/dashboard/admin/listar-perdidos" class="menu__link">Perdidos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin