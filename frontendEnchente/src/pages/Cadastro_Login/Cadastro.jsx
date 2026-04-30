import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Cadastro_Login/cadastro.css'
import api from "../../services/api"

export default function Cadastro() {
    return (
        <section id="mainCadastro">
            <section class="sectionCadastro">
                <h1>Criar Conta</h1>
                <p>Cadastre-se para registrar pessoas e acompanhar buscas</p>
                <form class="formCadastro">
                    <div>
                        <label for="name">Nome</label>
                        <input placeholder="Nome completo" required/>
                    </div>
                    <div>
                        <label for="email">E-mail</label>
                        <input placeholder="seu@email.com" required/>
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input placeholder="Mínimo 5 caracteres" required/>
                    </div>
                    <button>Criar conta</button>
                </form>
                <p>Já possui uma conta? <NavLink to="/login">Fazer login</NavLink></p>
            </section>
        </section>
    )
}