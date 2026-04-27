import React from 'react'
import '../Desaparecido/desaparecido.css'

export default function Desaparecido() {
    return (
        <section id="mainDesaparecido">
            <section class="sectionDesaparecido">
                <h1>Registrar desaparecido</h1>
                <p>Preencha os dados para ajudar a localizar a pessoa</p>
                <form class="formDesaparecido">
                    <div>
                        <label for="foto">Foto</label>
                        <input type="file"/>
                    </div>
                    <div>
                        <label for="name">Nome</label>
                        <input placeholder="Nome completo" required />
                    </div>
                    <div>
                        <label for="idade">Idade</label>
                        <input placeholder="Idade aproximada" required />
                    </div>
                    <div>
                        <label for="genero">Gênero</label>
                        <select>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>
                    <div>
                        <label for="genero">Tipo</label>
                        <select>
                            <option value="masculino">Desaparecido</option>
                            <option value="feminino">Encoltrado</option>
                        </select>
                    </div>
                    <div>
                        <label for="local">Última localização</label>
                        <input placeholder="Estado, cidade ou endereço completo" required />
                    </div>
                    <div>
                        <label for="local">Data e hora do desaparecimento/encontro</label>
                        <input type="datetime-local" placeholder="Estado, cidade ou endereço completo" required />
                    </div>
                    <div>
                        <label for="telefone">Telefone para contato</label>
                        <input placeholder="(99) 99999-9999" required />
                    </div>
                    <div>
                        <label for="desc">Descrição</label>
                        <textarea class="descricao" placeholder="Descreva características físicas, roupas, circunstancias do desaparecimento ou onde a pessoa foi encontrada, condições de saúde..." required/>
                    </div>
                    <button>Enviar</button>
                </form>
            </section>
        </section>
    )
}