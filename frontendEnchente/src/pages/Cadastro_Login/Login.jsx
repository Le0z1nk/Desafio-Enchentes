import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Cadastro_Login/login.css'

export default function Login() {
    return (
         <section id="mainLogin">
            <section class="sectionLogin">
                <h1>Entrar</h1>
                <p>Acesse sua conta</p>
                <form class="formLogin">
                    <div>
                        <label for="email">E-mail</label>
                        <input placeholder="Digite o email" required/>
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input placeholder="Digite a senha" required/>
                    </div>
                    <button>Entrar</button>
                </form>
                <p>Não possui uma conta? <NavLink to="/cadastro">Cadastre-se!</NavLink></p>
            </section>
        </section>
    )
}