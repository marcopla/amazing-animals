const frase = 'JavaScript';
const fraseNova = frase.replace(/J/, 'b');

console.log(fraseNova);

////////////////// padrão regex para ceps

// \d{5} cinco digitos 
// [\s-]? opcional ter espaço ou -
// \d{3} três dígitos
const regexParaCep = /\d{5}[\s-]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
]

for(const cep of ceps){
  console.log(cep, cep.match(regexParaCep));
}

////////////////// padrão regex para CPFs
// (\d{3}[\s.-]?){3} repete 3 vezes o padrão
// pra não capturar como grupo
const regexParaCpf = /(?:\d{3}[\s.-]?){3}\d{2}/g

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000000000-00',
  '000 000 000 00',
  '00000000000',
]

for(const cpf of cpfs){
  console.log(cpf, cpf.match(regexParaCpf));
}


////////////////// padrão regex para CNPJ

const regexParaCnpj = /\d{2}[\s.-]?(?:\d{3}[\s.-]?){2}\/?\d{4}[\s.-]?\d{2}/g

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.0000.00',
  '00.000.000.000000',
]

for(const cnpj of cnpjs){
  console.log(cnpj, cnpj.match(regexParaCnpj));
}

////////////////// padrão regex para telefone

const regexParaTelefone = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?/g

const regexp = /Java/g;
const frase2 = 'JavaScript e Java Linguagem 101';


// console.log(regexp.lastIndex);
// console.log(regexp.test(frase2));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase2));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase2));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase2));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase2));

// Looping com o .test();
let i = 1;
while(regexp.test(frase2)){
  console.log(i++, regexp.lastIndex);
}

// Looping com o resultado do exec();
const frase3 = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexParaFrase3 = /\w+/g;

let regexpResult;

while((regexpResult = regexParaFrase3.exec(frase3)) !== null){
  console.log(regexpResult[0]);
}

// .match()
const frase4 = 'JavaScript, TypeScript, CoffeeScript, Java, 222';

const regexParaFrase4 = /[A-Za-z]+/g;

const resultados = frase.match(regexParaFrase4);

console.log(resultados);

// .split()

const regexParaSplit = /\w/g;

const resultado = frase.split(regexParaSplit);

// replace()

const tags = `
  <ul>
    <li></li>
    <li></li>
  </ul>
`;

//const resultadoReplace = tags.replace('ul', 'div'); // assim o replace só muda o primeiro ul por div.

const regexpParaTags = /(?<=<\/?)\w+/g
const resultadoReplace = tags.replace(regexpParaTags, 'div');

// const resultadoReplace = tags.replace(regexpParaTags, '$& class="ativa"'); poderia fazer uma captura, assim adicionando uma classe na tag

console.log(resultadoReplace);

