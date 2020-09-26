// const perimetro = new Function('lado', 'return lado * 4');

// function Dom(seletor){
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe){
//   this.element.classList.add(classe);
// }

// const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li');
// }
// // console.log(ul);
// // console.log(ul.element);
// ul.ativo.call(li, 'ativo');


const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.mostrarThis = function() {
  console.log(this);
}

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3
}
