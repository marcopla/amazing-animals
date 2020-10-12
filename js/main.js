// const pessoa = new Object({
//   nome: 'Marco',

// });

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(marca){
//     this.marca = marca;
//     return this;
//   },
//   acelerar(){
//     return this.marca + ' acelerou';
//   },
//   buzinar(){
//     return this.marca + ' buzinou';
//   }
// }

// const ferrari = Object.create(carro).init('Ferrari');

// //honda.marca = 'Honda';
// //honda.init('Honda')

// ferrari.acelerar;

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },

// }

// const moto = {
//   //rodas: 2,
//   capacete: true,
// };

// const caminhao = {
//   rodas: 4, 
//   mala: true,
// };

// Object.assign(moto, funcaoAutomovel);
// Object.assign(caminhao, funcaoAutomovel);

const moto = {
  //rodas: 2,
  capacete: true,
}

Object.defineProperties(moto, {
  rodas: {
    //enumerable: true,
    //value: 2,
   // configurable: false, // não pode excluir
    //writeble: true, // pode editar
    get() {
      return this._rodas;
    },
    set(valor){
      this._rodas = valor * 4;
    }
  }
});  

//delete moto.rodas;
console.log(moto); 

Object.getOwnPropertyDescriptor(Array);
//Object.getOwnPropertyDescriptor(Array.prototype);

//Object.keys(moto);

const carro = {
  marca: 'Honda',
  ano: 2020,
}

Object.freeze(carro);

carro.marca = 'Fiat'; // por causa do freeze não foi possível atribuir a marca Fiat.

console.log(carro);

''.constructor;
moto.constructor;

const frutas = ['Pera', 'Uva', 'Banana'];

Array.hasOwnProperty('map');
Array.prototype.hasOwnProperty('map');

Object.getOwnPropertyNames(frutas);

Array.prototype.isPrototypeOf(frutas);

Array.prototype.isPrototypeOf([]);

frutas.toString();

const somar = function(a, b){
  return a + b
}

somar.toString();

carro.toString(); // verifica se é uma string

Object.prototype.toString.call(frutas);

//Exercice

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado){
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado('a'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
  lados:{
    value: 4,
    enumerable: true,
  }
});

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

configuracao.width = 600;

Object.freeze(configuracao); // apenas depois do width

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
