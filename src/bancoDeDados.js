//criando um objeto que representa uma sequencia..de ids
const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}
    //salvando produtos
function salvarProdutos(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
//pegando os IDs dos produtos...
function getProduto(id) {
    return produtos(id) || {}
}

//pegando os valores dos produtos...
function getProdutos() {
    return Object.values(produtos)
}

//excluindo produtos...
function excluirProduto(id) {
    const produto = produto[id]
    delete produto[id]
    return produto
}

module.exports = { salvarProdutos, getProduto, getProdutos, excluirProduto }