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

let soma = 0;
transacoes.forEach(transacao=> {
  let onlyNumberString = transacao.valor.slice(2);
  let onlyNumber = parseInt(onlyNumberString);
  soma += onlyNumber;
});

console.log(`Valor total da soma é: ${soma}`);

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


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


