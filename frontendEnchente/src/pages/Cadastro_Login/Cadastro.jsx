import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Cadastro_Login/cadastro.css'
import api from "../../services/api"

export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    async function handleRegister(e) {
        e.preventDefault()
        try {
            await api.post("/usuarios", {nome, email, senha})
            alert("Usuário criado, você será redirecionado para a tela login")
            navigate("/login")
        } catch (error) {
            alert("Erro ao cadastrar")
        }
    }

    return (
        <section id="mainCadastro">
            <section className="sectionCadastro">
                <h1>Criar Conta</h1>
                <p>Cadastre-se para registrar pessoas e acompanhar buscas</p>
                <form className="formCadastro" onSubmit={handleRegister}>
                    <div>
                        <label for="name">Nome</label>
                        <input placeholder="Nome completo" required onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label for="email">E-mail</label>
                        <input placeholder="seu@email.com" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input placeholder="Mínimo 5 caracteres" required onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button>Criar conta</button>
                </form>
                <p>Já possui uma conta? <NavLink to="/login">Fazer login</NavLink></p>
            </section>
        </section>
    )
}