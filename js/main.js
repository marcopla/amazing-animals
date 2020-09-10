let valor = 48.49;
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

console.log(valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

////////Exercícios

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.round(Math.random()* (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
let min = 9999;
const numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(', ');
console.log(Math.min(...numerosArray));

/*numerosArray.forEach((numero,index)=> {
  numerosArray[index] = Number.parseInt(numero);
  if(numerosArray[index] < min){  
    min = numerosArray[index];
  }
});
console.log(`O menor número é: ${min}`);
*/

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222','R$ 230  ', 'r$  200'];

function limpaPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let somaPrecos = 0;
listaPrecos.forEach((preco) => {
  somaPrecos += limpaPreco(preco);
})
console.log(somaPrecos.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));
limpaPreco(listaPrecos[0]);
/*
function limpaPrecos(listaPrecos){
  let somaPrecos = 0;
  let arrayPrecos = [];
  listaPrecos.forEach((preco) => {
    console.log(Number.parseFloat(preco).toFixed(2));
    arrayPrecos.push(Number.parseFloat(preco).toFixed(2));
    somaPrecos += Number.parseFloat(preco).toFixed(2);
  }); 
  console.log(arrayPrecos);

}   

*/