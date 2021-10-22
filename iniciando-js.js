// + - * / %

// 2*3 => 2+2+2

//variaveis
//{} []

//LET CONST

function returnCar(){
    let car = "Land Rover";

    if(car === "Land Rover"){
       car = "Ferrari";
       let car2 = "outro carro";

        //console.log("Dentro do if:" + car);
    }
    //console.log("Fora do if:" + car);
    //console.log("Fora do if:" + car2);

    //console.log(car);

    return car;
}

//LAÇO DE REPETIÇÃO = LOOP
for(let i = 2000; i <= 2010; i++){
   // console.log(i);
}
//console.log(i);


//CONST
const IP = '127.0.0.1';
//console.log(IP);

const Fruta = "Banana";
const fruta = "Banana";

//STRING - TEXTO '' "" => "2154687"
//NUMBER - 12248
//BOOLEANO - TRUE FALSE

//let numero = boolean;

//FUNÇÃO - CONJUNTO DE INSTRUÇÕES


function nomeDaFuncao(parametro, esperado){

    return valorFinalEsperado;
}

//FAÇA UM ALGORITMO PARA LER DOIS VALORES E RETORNAR A SOMA DELES

function soma(number1,number2){
    let resultado = number1 + number2;

    return resultado;
}
soma(2,3);



//IF/ELSE
function sum(number1,number2){
    let soma;

    if(number1 === 2 && number2 === 3){
        soma = number1 + number2;
        //console.log("Entrou IF");
    }else if(number2 === 3){
        soma = number1 + number2 + number2;
        //console.log("Entrou no segundo IF");
    }else{
        soma = number1 + number1;
        //console.log("ENTROU NO ELSE");
    }

    return soma;    
}

// && = ambas validações TEM QUE SER true
// true + true

// || = uma das validações TEM QUE SER true
// true + false
// false + true
// true + true


// ! = a validação tem que contraria


//LOOP
//for(inicialização; condição; incremento){
    //código
//}

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log("Par:" + i);
    }else{
        console.log("Impar:" + i);
    }
   console.log(i);
}


if(2 === 2){
    //retorno
}else{
    //retorno
}

//let variavel = 2 === 2 ? console.log(true) : console.log(false);


// = atribuo valor
// == é igual a algo 
// === é identico

//ARRAY => armazenar um conjunto de valores dentro da variavel

const casa1 = "Amarela";
const casa2 = "Vermelha";
const casa3 = "Azul";

const casa = ["Amarela", "Vermelha", "Azul"];

//adiciona na posição especifica
casa[3] = "Verde";
casa[1] = "Pink";

console.log(casa);

//adiciono um elemento dentro do array
casa.push("Verde"); //adiciona no final do array
casa.unshift("Verde"); //adiciona no começo do array
casa.pop("Azul"); //retira o elemento do array

console.log(casa);

//saber a quantidade de elementos dentro do array
const quantidade = casa.length;
//console.log(quantidade);

//----------------------------------------------------------
const isabella = ["Isabella", 27, "São Calos", "SP", true];
console.log(isabella);

const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        //console.log("Par:" + i);
    }else{
        //console.log("Impar:" + i);
    }
    //console.log(i);
}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log("Par:" + numeros[i]);
    }else{
        console.log("Impar:" + numeros[i]);
    }
}

//array multidimensional
const pessoas = [
    ["Isabella", 27],
    ["Amanda", 21],
    ["Andre", 21],
    ["Nicole", 21]
]
console.log(pessoas);
console.log(pessoas[1][0]);
