const texto1 = 'Bom dia, ';
const texto2 = 'Como vai você?';

String.concat();
const texto3 = texto1.concat(texto2, '!!!', ' mais texto.');

//Exercícios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTaxa = 0;
transacoes.forEach(transacao => {
  if(transacao.descricao.toLocaleLowerCase().includes('taxa')){
    let onlyNumberString = transacao.valor.slice(2);
    let onlyNumber = parseInt(onlyNumberString);
    somaTaxa += onlyNumber;
  }
});

console.log(`A soma das taxas é: ${somaTaxa}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

let transportesArray = transportes.split(';');

console.log(transportesArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let arrayHtml = html.split('<span>');
let newHtml = arrayHtml.join('<a>');
arrayHtml = newHtml.split('</span>');
newHtml = arrayHtml.join('</a>');
console.log(newHtml);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length -1]);

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTaxas = 0;
transacoes.forEach((transacao) => {
  if(transacao.toLowerCase().includes('taxa')){
    ++totalTaxas;
  }
});
console.log(totalTaxas);
