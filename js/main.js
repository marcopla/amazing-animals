const perimetro = new Function('lado', 'return lado * 4');

function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe);
}

const ul = new Dom('ul');

console.log(ul);
console.log(ul.element);