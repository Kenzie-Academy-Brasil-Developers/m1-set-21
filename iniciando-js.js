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

        console.log("Dentro do if:" + car);
    }
    console.log("Fora do if:" + car);
    console.log("Fora do if:" + car2);

    console.log(car);

    return car;
}

//LAÇO DE REPETIÇÃO = LOOP
for(let i = 2000; i <= 2010; i++){
    console.log(i);
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




//IF/ELSE
function sum(number1,number2){
    let soma;

    if(number1 === 2 && number2 === 3){
        soma = number1 + number2;
        console.log("Entrou IF");
    }else if(number2 === 3){
        soma = number1 + number2 + number2;
        console.log("Entrou no segundo IF");
    }else{
        soma = number1 + number1;
        console.log("ENTROU NO ELSE");
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

let variavel = 2 === 2 ? console.log(true) : console.log(false);


// = atribuo valor
// == é igual a algo 
// === é identico