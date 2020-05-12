const porta = 3003 // criando uma porta por servidor
const express = require('express') // importando a biblioteca EXPRESS>>
const app = express() //instaciando servidor a partir do EXpress...
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
    //Usando o metodo GET pra mostra produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//salvando produtos no banco de dados...
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//excluindo produto..
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

//mostrando no console o servidor executando...
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})