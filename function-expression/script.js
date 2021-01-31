// function daclaration
// function somar(a, b){
//   return a + b;
// }


//funcition expression
// const somar = function(a, b){
//   return a + b;
// }

const somar = (a, b) => a + b;

const quadrado = a => a * a;

//console.log(somar(1, 7));

//console.log(quadrado(3));

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function(){
  console.log(`IIFE executada`);
})();
// Como podemos utilizar
// a função abaixo.
const active = callback => callback();


active(function(){
  console.log('teste');
});