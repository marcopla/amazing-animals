/*
const doc = fetch('./doc.txt'); // é uma promise

doc
.then(response => response.text())
.then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body;
  console.log(body);
});

*/

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
.then(r => r.json())
.then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body.logradouro;
});