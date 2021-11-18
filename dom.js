/**
 * DOM
 * MODELO DE DOCUMENTO DE OBJETO * 
 */

//MÉTODOS -> criar, modificar, deletar, selecionar ... elementos do html
//EVENTOS -> vamos usar pra controlar quando algo/alguma coisa vai acontecer

//document.
//getElementByID() => 
//getElementsByClassName() =>

const starting = document.getElementById('start');
console.log(starting);

const buttons = document.getElementsByClassName('buttons');
console.log(buttons);

const moreButtons = document.getElementsByTagName('button');
console.log(moreButtons);

const firstElement = document.querySelector('.buttons');
console.log(firstElement);

// { ....... }

starting.addEventListener('click', function(e) {
    //executo alguma coisa    
    chamafunction();
    console.log('Botão start clicado');
}, false);

starting.addEventListener('click', chamafunction);