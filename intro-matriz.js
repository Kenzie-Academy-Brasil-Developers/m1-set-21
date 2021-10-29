const produtos = [
  ["feijão", "arroz", "macarrão", "azeite", "bolacha"],
  ["05/11/2021", "15/11/2021", "05/11/2021", "15/10/2022", "04/11/2021"],
  ["R$4,99", "R$6,15", "R$3,28", "R$23,05", "R$3,25"],
];

console.table(produtos);

function retateMatrix(arr) {
  let tamanhoLinhaArr = arr[0].length;
  let tamanhoArr = arr.length;
  let arrResult = new Array(tamanhoLinhaArr);

  for (
    let colunaArrResult = 0;
    colunaArrResult < tamanhoArr;
    colunaArrResult++
  ) {
    arrResult[colunaArrResult] = Array(tamanhoArr);

    for (
      let linhaArrayResult = 0;
      linhaArrayResult < tamanhoArr;
      linhaArrayResult++
    ) {
      arrResult[colunaArrResult][linhaArrayResult] =
        arr[linhaArrayResult][tamanhoLinhaArr - 1 - colunaArrResult];
    }
  }
  console.table(arrResult);
  return arrResult;
}

retateMatrix(produtos);
