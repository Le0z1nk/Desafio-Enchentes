import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import '../Main/home.css'
import api from "../../services/api"

export default function Home() {
    const [desaparecido, setDesaparecido] = useState([])

    useEffect(() => {
        async function carregarDesaparecidos() {
            try {
                const res = await api.get("/desaparecidos")
                setDesaparecido(res.data)
            } catch (error) {
                console.log("Erro ao carregar desaparecidos" + error)
            }
        }
        carregarDesaparecidos()
    }, [])

    return (
        <main>
            <section className="sectioninicio">
                <h1 className="titulo">Reunindo Famílias em Momentos de Emergência</h1>
                <p className="subtitulo">Plataforma solidária para ajudar pessoas a encontrar seus entes queridos durante enchentes e situações de emergência.
                    Registre, busque e reencontre.</p>
                    <NavLink to="/registrar-desaparecido"><button className="botaoInicio">Registrar Desaparecido</button></NavLink>
            </section>
            <section className="sectionBusca">
                <h2 className="tituloBusca">Buscar Pessoas</h2>
                <p className="subtituloBusca">Enconre pessoas desaparecidas ou encontradas</p>
                <div className="divPesquisa">
                    <input placeholder="Buscar por nome..." />
                    <button>Buscar</button>
                    <button><svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3H16V1H0V3Z" fill="#000000" />
                        <path d="M2 7H14V5H2V7Z" fill="#000000" />
                        <path d="M4 11H12V9H4V11Z" fill="#000000" />
                        <path d="M10 15H6V13H10V15Z" fill="#000000" />
                    </svg> Filtrar</button>
                </div>
                <div className="divBotoesPessoas">
                    <button>Todos</button>
                    <button>Desaparecidos</button>
                    <button>Encontrados</button>
                </div>
                <div>
                    {desaparecido.length === 0 ? (
                        <p>Sem desaparecidos....</p>
                    ) : (
                        desaparecido.map((desaparecido) => (
                            <section key={desaparecido.id} desaparecido={desaparecido}>

                            </section>
                        ))
                    )} 
                </div>
            </section>
        </main>
    )
}