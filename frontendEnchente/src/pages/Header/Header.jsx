import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import '../Header/header.css'
import Main from "../Main/Home"
import Desaparecido from "../Desaparecido/Desaparecido"
import Cadastro from "../Cadastro_Login/Cadastro"
import Login from "../Cadastro_Login/Login"

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <h1><NavLink to="/">Reencontro</NavLink></h1>
                <nav>
                    <ul>
                        <li><svg class="searchIcon" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><NavLink to="/">Buscar Pessoas</NavLink></li>
                        <li><NavLink to="/registrar-desaparecido">Registrar Pessoa</NavLink></li>
                    </ul>
                </nav>
                <section class="sectionConta">
                    <div class="divBotoesConta">
                        <NavLink to="/login"><button class="botaoLogin"><svg class="loginIcon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Entrar</button></NavLink>
                         <NavLink to="/cadastro"><button class="botaoCadastrar">Cadastre-se</button></NavLink>
                    </div>
                </section>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registrar-desaparecido" element={<Desaparecido />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}