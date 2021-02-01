// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

console.log(btnStyles.backgroundColor);
console.log(btnStyles.color);
console.log(btnStyles.margin);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor, color, margin);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
