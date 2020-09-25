const perimetro = new Function('lado', 'return lado * 4');

function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
  console.log(this);
  this.element.classList.add(classe);
}

const ul = new Dom('ul');

const li = {
  element: document.querySelector('li');
}
// console.log(ul);
// console.log(ul.element);
ul.ativo.call(li, 'ativo');