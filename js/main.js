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

// applay

const li = documen.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
});

console.log(filtro());

console.log(li);

const numeros = [33, 232, 33, 323, 32, 232];

const $ = document.querySelector.bind(document, 'li');

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo} `;
  }
}

const honda = {
  marca: 'Honda'
}

const aceleraHonda = carro.acelerar.bind(honda);

console.log(aceleraHonda(300, 20));

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento (tag, classe, conteudo) {
  const elemento  = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHtml = conteudo : null;
  return elemento;
}

console.log(criarElemento('li', 'ativa'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJs = h1Titulo('Curso de JavaScript');
const cursosHtml = h1Titulo('Curso de Html');

console.log()
console.log(cursosJs, cursosHtml)