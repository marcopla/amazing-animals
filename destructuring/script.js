

const carro = {
  marca: 'Honda',
  ano: 2021
}

const {marca} = carro;

console.log(marca);

// Nesting

const cliente = {
  nome : "André",
  compras : {
    digitais : {
      livros : ['livro 1', 'livro 2'],
      videos : ['video 1', 'video 2'],
    },
    fisicas : {
      cadernos : ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {digitais, fisicas, digitais : {videos, livros}} = cliente.compras;

console.log(livros);
console.log(videos);

// tipo alias

const cliente2 = {
  nome: 'Andre',
  compras : 10
}

const {nome: qualquerCoisa, email = 'teste@teste.com.br'} = cliente2;

console.log(qualquerCoisa);

// array

[primeiro, segundo, terceiro] = ['primeiro', 'segundo', 'terceiro'];

// argumento

document.addEventListener('keyup', handleKeyboard);

// function handleKeyboard(event) {
//   console.log(event.key);
// }

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

