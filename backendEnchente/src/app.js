require("dotenv").config()
const express = require("express")
const pool = require("./config/db")
const validarUsuarios = require("./validacao/usuarios")
const jwt = require("jsonwebtoken")
const auth = require("./auth/authLogin")
const bcrypt = require("bcrypt")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
}

app.get("/usuarios", async (req, res) => {
    try {
        const resultado = await pool.query(
            `
            SELECT * FROM usuario
            `
        )
        res.json(resultado.rows)
    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao buscar dados de usuarios"
        })
    }
})

app.post("/usuario", validarUsuarios, async (req, res) => {
    try {
        const { nome, email, senha } = req.body
        const senhaHash = await bcrypt.hash(senha, 10)
        const resultado = await pool.query(
            `
            INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *
            `,
            [nome, email, senha]
        )
        res.status(201).json({
            mensagem: "usuario criado com sucesso!",
            usuario: resultado.rows[0]
        })
    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao criar usuario"
        })
    }
})

app.post("/login", async (req, res) => {
    const { email, senha } = req.body
    const usuario = await pool.query(
        `
        SELECT * FROM usuario WHERE email = $1
        `,
        [email]
    )
    if (usuario.rows.length === 0) {
        return res.status(400).json({
            mensagem: "Usuario não encontrado"
        })
    }
    const senhaValida = await bcrypt.compare(senha_hash, usuario.rows[0].senha)
    if (!senhaValida) {
        return res.status(400).json({
            mensagem: "senha inválida"
        })
    }
    const token = jwt.sign({ id: usuario.rows[0].id }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    })
    res.json({ token })
})

app.post("/desaparecidos", auth, async (req, res) => {
    try {
        const { nome, idade, genero, telefone, descricao, tipo, local, data_hora } = req.body
        const foto = req.file ? `/uploads/${req.file.filename}` : null
        const pessoaResultado = await pool.query(
            `
            INSERT INTO pessoa (nome, idade, genero, foto, telefone, descricao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
            `,
            [nome, idade, genero, foto, telefone, descricao]
        )
        const pessoaId = pessoaResultado.rows[0].id
        const ocorrenciaResultado = await pool.query(
            `
            INSERT INTO ocorrencia (tipo, local, data_hora, pessoa_id) VALUES ($1, $2, $3, $4) 
            `,
            [tipo, local, data_hora, pessoaId]
        )
        res.statusMessage(201).json({
            mensagem: "cadastrado com sucesso"
        })
    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao criar postagem"
        })
    }
})

app.put("/desaparecidos/:id", auth, validarPost, async (req, res) => {
    try {
        const { id } = req.params
        const {tipo, local, data_hora } = req.body
        const ocorrencia = await pool.query(`SELECT * FROM ocorrencia WHERE id=$1`, [id])
        if (ocorrencia.rows.length === 0) {
            return res.status(404).json({
                mensagem: " Ocorrencia não encontrada"
            })
        }

        if (ocorrencia.rows[0].usuario_id !== req.usuario.id) {
            return res.status(403).json({
                mensagem: "Sem permissão"
            })
        }

        const resultado = await pool.query(
            `UPDATE ocorrencia SET tipo=$1, local=$2, data_hora=$3 WHERE id=$4 RETURNING *`,
            [tipo, local, data_hora, id],
        )
        res.status(200).json({
            mensagem: "Ocorrencia atualizada com sucesso",
            ocorrencia: resultado.rows[0],
        })
    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao atualizar ocorrencia",
        })
    }
})

module.exports = app