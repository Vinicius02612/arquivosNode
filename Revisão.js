//Revisando alguns conseitos de ESnext...
//Arrow function....
const soma = (a, b) => a + b
console.log(4, 6)
    //O this de  uma finção Arrow, é local que esta associado ao local que a função foi escrita...
    //operadores rest 
function total(...nummero) {
    let num = 0
    nummero.forEach(n => num += n)
    return num
}
console.log(total(2, 3, 4, 5, 6, 6))

//Object.values ...pega todos os valores...
//Object.entries...pega o conjuto de chaves e valores
//Object.keys...pega todo conjuto de chaves...
const obj = { a: 1, b: 3, c: 4 }
console.log(`valores ${Object.values(obj)}`)
console.log(`Chaves ${Object.keys(obj)}`)
console.log(`Valores e chaves ${Object.entries(obj)}`)

//Notação literal de OBjetos...pode-se atribuir um objeto diretamente numa variavel constante...
const nome = 'Vinicius'
const pessoa = {
    nome,
    ola() {
        return 'Ola gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Operadores rest(juntar) e spread(espalhar)...

//Usando rest com Objeto...Juntando os tributos do Objeto Funcionário no Objeto clone...
const funcionario = { nome: 'Vinicius', salario: 123.32340 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usando spread pra espalhar os atributos de um Arrey em outro Arrey...
const grupoA = ['Vinicius', 'Liézio', 'Fernanda']
const grupoFinal = ['Fatima', 'Lara', 'Salvador', 'Salvadora', ...grupoA]
console.log(grupoFinal)