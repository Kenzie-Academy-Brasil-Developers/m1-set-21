//Uma loja precisa calcular o desconto de 20% em cima de todos os produtos
//que estão em promoção, o Gerente não sabe quantos produtos serão,
//ele precisa que esse calculo seja rápido e possível de reutilizar

// 1 - Criar uma função que calcule o desconto de 20%
// A função irá receber o valor do produto para calcular
// 10% - 10/100 => 20% - 20/100 - 0.20
// Pra descobrir o valor de desconto: pego o valor original e multiplico por 0.20
// valorOriginal * 0.20 = valor a ser descontado
// Com o valorDescontado, faço uma subtração do valorOriginal

// 2 - Criar uma função que recebe o valor sem desconto e o nome do produto
// 3 - Chamar a função de desconto pra saber o novo valor do produto


const lista = [];
const listaProduto = [30,45,65,15,88,105];

//função de desconto
function desconto(valueOriginal){
    let valorDescontado = valueOriginal * 0.20;
    let novoValor = valueOriginal - valorDescontado;

    return novoValor;
}

function produtos(produto, valor){
    let valorDesconto = desconto(valor);

    lista.push(valorDesconto);
    console.log(lista);

    console.log(produto + ": " + valorDesconto);

    return valorDesconto;
}

produtos("espelho", 50);
produtos("pente", 15);
produtos("boneca", 65);