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
console.log(numbrs);

console.log(metodoSlice.slice(numbrs));

//REPLACE

let metodoReplace = 'Texto para o replace';

//console.log(metodoReplace.replace('a', '@'));


//toUppercase
//toLowercase

//console.log(metodoReplace.toUpperCase());
//console.log(metodoReplace.toLowerCase());

const arrNumber = [3,4,8,1,7];

console.log(arrNumber.indexOf(3));


if(arrNumber.indexOf(3) !== -1){
    console.log("ok");
}else{
    console.log("não ok");
}

let existe = arrNumber.indexOf(3) !== -1 ? true : false;
console.log(existe);

//for(let i = 0; i < arrNumber.length; i++){
    //let existe = arrNumber[i] === 3 ? console.log("ok") : console.log("não ok");
    //let position = arrNumber[i];

    //console.log(existe);
    //console.log(position);
//}