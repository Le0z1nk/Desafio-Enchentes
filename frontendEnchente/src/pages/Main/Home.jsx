import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Main/home.css'
import api from "../../services/api"

export default function Home() {
    return (
        <main>
            <section class="sectioninicio">
                <h1 class="titulo">Reunindo Famílias em Momentos de Emergência</h1>
                <p class="subtitulo">Plataforma solidária para ajudar pessoas a encontrar seus entes queridos durante enchentes e situações de emergência.
                    Registre, busque e reencontre.</p>
                    <NavLink to="/registrar-desaparecido"><button class="botaoInicio">Registrar Desaparecido</button></NavLink>
            </section>
            <section class="sectionBusca">
                <h2 class="tituloBusca">Buscar Pessoas</h2>
                <p class="subtituloBusca">Enconre pessoas desaparecidas ou encontradas</p>
                <div class="divPesquisa">
                    <input placeholder="Buscar por nome..." />
                    <button>Buscar</button>
                    <button><svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3H16V1H0V3Z" fill="#000000" />
                        <path d="M2 7H14V5H2V7Z" fill="#000000" />
                        <path d="M4 11H12V9H4V11Z" fill="#000000" />
                        <path d="M10 15H6V13H10V15Z" fill="#000000" />
                    </svg> Filtrar</button>
                </div>
                <div class="divBotoesPessoas">
                    <button>Todos</button>
                    <button>Desaparecidos</button>
                    <button>Encontrados</button>
                </div>
            </section>
        </main>
    )
}