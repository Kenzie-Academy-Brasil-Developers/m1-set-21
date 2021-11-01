// chave: valor
// chave -> string
// valor -> qualquer tipo de informação

const exemploArr = [];

const exObejto = {};

let persons = [
    {
        firstName: 'Isabella',
        lastName: 'Bertini',
        age: 27,
        city: 'São Carlos'
    },
    {
        firstName: 'Acauan',
        lastName: 'Nascimento',
        age: 27,
        city: 'São Carlos'
    },
    {
        firstName: 'Alessandra',
        lastName: 'Vecchi',
        age: 27,
        city: 'São Carlos'
    }
    
];

console.log(persons);

for(const infoIndividual in persons){
    console.log(persons);
}

//console.log(person);

//nomeObjeto.nomePropriedade
//nomeObjeto['nomePropriedade']

//console.log(person.firstName);
//console.log(person['lastName']);

//adcionar uma nova chave no objeto
//person.age = 27;

//console.log(person);

//deletar uma chave do objeto
//delete person.age;

//console.log(person);

let carros = {};
//console.log(carros);

carros.fabricante = 'Ford';
carros.modelo = 'Mustang';
carros.ano = '1970';

console.log(Object.keys(carros));
console.log(Object.values(carros));
//let infosCarro = ['Ford', 'Fiat', 'Ferrari'];

//for(let i = 0; i < infosCarro.length; i++){
//    carros.fabricante = infosCarro[i];
//}

console.log(carros);

//retornar um conjunto de objetos com os fabricantes
