import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/Login/LoginPage'
import ContatoPage from '../pages/Contato/ContatoPage'
import DashboardAdmin from '../pages/Dashboard/Admin/DashboardAdmin'

import ListarPerdidos from '../pages/Dashboard/Admin/components/Perdidos/ListarPerdidos'
import ListarAchados from '../pages/Dashboard/Admin/components/Achados/ListarAchados'
import CadastrarAchados from '../pages/Dashboard/Admin/components/Achados/CadastrarAchados'
import CadastrarPerdidos from '../pages/Dashboard/Admin/components/Perdidos/CadastrarPerdido'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contato" element={<ContatoPage />} />

                {/* ROTA PARA PAINEL DO ADMIN */}

                <Route path="/dashboard/admin" element={<DashboardAdmin />} />
                <Route path="/dashboard/admin/listar-perdidos" element={<ListarPerdidos />} />
                <Route path="/dashboard/admin/listar-achados" element={<ListarAchados />} />
                <Route path="/dashboard/admin/cadastrar-achados" element={<CadastrarAchados />} />
                <Route path="/dashboard/admin/cadastrar-perdidos" element={<CadastrarPerdidos />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
