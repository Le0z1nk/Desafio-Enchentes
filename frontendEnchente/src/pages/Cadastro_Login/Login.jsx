import React from 'react'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useState, useContext} from 'react'
import '../Cadastro_Login/login.css'
import {AuthContext} from "../../context/AuthContext"
import api from "../../services/api"

export default function Login() {
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    async function handleLogin(e) {
        e.preventDefault()
        try {
            const res = api.post("/login", {email, senha})
            login(res.data.token)
            alert("Login realizado")
            navigate("/")
        } catch {
            alert("Erro ao logar")
        }
    }

    return (
         <section id="mainLogin">
            <section className="sectionLogin">
                <h1>Entrar</h1>
                <p>Acesse sua conta</p>
                <form className="formLogin" onSubmit={handleLogin}>
                    <div>
                        <label for="email">E-mail</label>
                        <input placeholder="Digite o email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input placeholder="Digite a senha" required onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button>Entrar</button>
                </form>
                <p>Não possui uma conta? <NavLink to="/cadastro">Cadastre-se!</NavLink></p>
            </section>
        </section>
    )
}