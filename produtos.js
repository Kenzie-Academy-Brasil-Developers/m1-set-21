const produtos = [
    ["feijão",   "05/11/2021", "R$4,99"],
    ["arroz",    "15/11/2021", "R$6,15"],
    ["macarrão", "05/11/2021", "R$3,28"],
    ["azeite",   "15/10/2022", "R$23,05"],
    ["bolacha",  "04/11/2021", "R$3,25"]
];

function minDescount(oldValue){
    let price = parseFloat(oldValue.substr(2).replace(',','.'));
    let discount = price * 0.15;
    discount = price - discount;
    discount = discount.toFixed(2);

    let newPrice = discount.toString().replace('.', ',');

    return "R$" + newPrice;
}

function newList(oldList){
    let valuePrice;
    const newList = [];

    for(let product = 0; product < oldList.length; product++){
        if(oldList[product][1] <= "05/11/2021"){
            valuePrice = minDescount(oldList[product][2]);

            newList.push([oldList[product][0],oldList[product][1],valuePrice]);
        }else{
            newList.push(oldList[product]);
        }
    }
    return newList;
}

newList(produtos);