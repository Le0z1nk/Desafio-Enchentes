import React from 'react'
import { useState } from 'react'
import api from "../../services/api"
import '../Desaparecido/desaparecido.css'

export default function Desaparecido() {
    const [desaparecido, setDesaparecido] = useState([])
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [genero, setGenero] = useState("")
    const [foto, setFoto] = useState("")
    const [telefone, setTelefone] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipo, setTipo] = useState("")
    const [local, setLocal] = useState("")
    const [dataHora, setDataHora] = useState("")

    async function enviarForm(e) {
        e.preventDefault()
        try {
            await api.post("/desaparecidos", { nome, idade, genero, foto, telefone, descricao, tipo, local, data_hora })
            const res = api.get("/desaparecidos")
            setDesaparecido(res.data)
            setNome("")
            setIdade("")
            setGenero("")
            setFoto("")
            setTelefone("")
            setDescricao("")
            setTipo("")
            setLocal("")
            setDataHora("")
        } catch(error) {
            alert("Erro ao cadastrar desaparecido" + error)
        }
    }

    return (
        <section id="mainDesaparecido">
            <section className="sectionDesaparecido">
                <h1>Registrar desaparecido</h1>
                <p>Preencha os dados para ajudar a localizar a pessoa</p>
                <form className="formDesaparecido" onSubmit={enviarForm}>
                    <div>
                        <label for="foto">Foto</label>
                        <input type="file" value={foto} onChange={(e) => setFoto(e.target.value)} />
                    </div>
                    <div>
                        <label for="name">Nome</label>
                        <input placeholder="Nome completo" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label for="idade">Idade</label>
                        <input placeholder="Idade aproximada" required value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </div>
                    <div>
                        <label for="genero">Gênero</label>
                        <select>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipo">Tipo</label>
                        <select>
                            <option value="desaparecido">Desaparecido</option>
                            <option value="encontrado">Encoltrado</option>
                        </select>
                    </div>
                    <div>
                        <label for="local">Última localização</label>
                        <input placeholder="Estado, cidade ou endereço completo" required value={local} onChange={(e) => setLocal(e.target.value)} />
                    </div>
                    <div>
                        <label for="dataHora">Data e hora do desaparecimento/encontro</label>
                        <input type="datetime-local" placeholder="Estado, cidade ou endereço completo" required value={dataHora} onChange={(e) => setDataHora(e.target.value)} />
                    </div>
                    <div>
                        <label for="telefone">Telefone para contato</label>
                        <input placeholder="(99) 99999-9999" required value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div>
                        <label for="desc">Descrição</label>
                        <textarea className="descricao" placeholder="Descreva características físicas, roupas, circunstancias do desaparecimento ou onde a pessoa foi encontrada, condições de saúde..." required value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </section>
    )
}