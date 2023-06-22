import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/Login/LoginPage'
import ContatoPage from '../pages/Contato/ContatoPage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contato" element={<ContatoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
