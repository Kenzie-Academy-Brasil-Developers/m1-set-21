//LENGTH

//[1,2,3,4,5]
//strin./# g

//reverse() = inverte a ordem do array

let texto = "Um texto grande, que é separado por vírgula";
let novoTexto = [];

//for(let i = texto.length; i >= 0; i--){
 //   novoTexto.push(texto[i]);
//}

//console.log(texto.split('').reverse().join(''));

//split = dividir a frase e retornar em um array

//console.log(texto.split(','));

//JOIN

//SLICE

const metodoSlice = 'banana';

//b = 0
//a = 1
//n = 2

//a = 3
//n = 4
//a = 5

let numbrs = metodoSlice.length / 2;
//console.log(numbrs);

//console.log(metodoSlice.slice(numbrs));

//REPLACE

let metodoReplace = 'Texto para o replace';

//console.log(metodoReplace.replace('a', '@'));


//toUppercase
//toLowercase

//console.log(metodoReplace.toUpperCase());
//console.log(metodoReplace.toLowerCase());

const arrNumber = [3,4,8,1,7];

//console.log(arrNumber.indexOf(3));


if(arrNumber.indexOf(3) !== -1){
    //console.log("ok");
}else{
    ////console.log("não ok");
}

let existe = arrNumber.indexOf(3) !== -1 ? true : false;
//console.log(existe);

//for(let i = 0; i < arrNumber.length; i++){
    //let existe = arrNumber[i] === 3 ? console.log("ok") : console.log("não ok");
    //let position = arrNumber[i];

    //console.log(existe);
    //console.log(position);
//}

//-------------------METODOS DE ARRAY-----------------------------------//

//INCLUDES - utiliza ele pra pesquisar um paramentro dentro do array, com retorno de true ou false

const str = 'Texto para o includes encontrar a palavra';
const numberArr = [1,2,3,6];

console.log(str.includes('includes'));
console.log(str.includes('abobrinha'));

console.log(numberArr.includes(3));
console.log(numberArr.includes(8));

//FILTER - filtra dentro do array com o paramentro passado e retornar um novo array com os elementos
//que compoem a condição

const wordsArr = ['mouse', 'teclado', 'monitor', 'tomada', 'energia'];

const result = wordsArr.filter(word => word.length > 6);

console.log(result);
//function verificaPalavra(word){
    //return word.length > 6;
//}

let cities = [
    { name:'Rio de Janeiro', temperatura: 40 },
    { name:'Porto Alegre', temperatura: 27 },
    { name:'São Paulo', temperatura: 32 },
    { name: 'Curitiba', temperatura: 25 }
];

//if
//for
let temperaturaBaixa = [];
for(let i = 0; i < cities.length; i++){
    if(cities[i].temperatura < 30){
        temperaturaBaixa.push(cities[i]);
    }
}
console.log(temperaturaBaixa);

temperaturaBaixa = cities.filter(city => city.temperatura < 30);

console.log(temperaturaBaixa);

//INDEXOF
const frutas = ['banana', 'manga', 'morango', 'manga'];
console.log(frutas.indexOf('manga'));

//FIND
const numerosArr = [1,2,3,5,8,9,11,13,15];
const number = numerosArr.find(elemento => elemento > 10);

console.log(number);

//CONCAT
const doisArr = numerosArr.concat(frutas);
console.log(doisArr);

