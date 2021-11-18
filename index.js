/***** TO DO LIST *****
 * 1. criar a lista de forma dinamica via input => função de criar item - OK
 * 2. armazenar o valor do item da lista em um array - OK
 * 3. QUANDO der check no item o estilo dele tem que mudar no css (riscar o texto no meio)
 * 4. Poder excluir um item da lista => função de excluir
 **/

const toDoLista = [];
const allList = document.getElementById('allList');
const buttonAdd = document.getElementById('add');

function criarItem(){
    const valueList = document.getElementById("valueList");

    const itemLista = document.createElement("li");
    const itemInput = document.createElement("input");
    itemInput.type = "checkbox";
    const itemLabel = document.createElement("label");
    const itemSpan = document.createElement("span");
    itemSpan.innerText = "x";

    const nameValue = valueList.value;
    itemLabel.innerText = nameValue;

    itemLista.appendChild(itemInput);
    itemLista.appendChild(itemLabel);
    itemLista.appendChild(itemSpan);

    allList.appendChild(itemLista);

    toDoLista.push(nameValue);
}

buttonAdd.addEventListener('click', criarItem);