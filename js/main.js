const valores = [10, 11, 33, 44, 55];
const valorX2 = valores.map((item) => item * 2);

console.log(valorX2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];

const arrayMin = aulas.map((aula) => aula.min);
/*
const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60
*/
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); 
//true

const every = frutas.every((item) => {
  return item === 'Uva';
});
// false pois nem todos são Uva

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2


////////// Exercicio



// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursosQuery = document.querySelectorAll('.curso');
const cursos = Array.from(cursosQuery);

cursos.forEach(curso => {
  console.log(curso);

});



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
