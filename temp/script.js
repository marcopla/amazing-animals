/* arquivo
const doc = fetch('./doc.txt'); // é uma promise

doc
.then(response => {
  return response.text()
})
.then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body;
  console.log(body);
});

*/

/* CEP
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
.then(r => r.json())
.then(body => {
  const logradouro = body.logradouro;
  console.log(logradouro);
})
*/

/* HTML
const sobre = fetch('./sobre.html');

sobre
.then(r => r.text())
.then((body) => {
  const div = document.createElement('div');
  div.innerHTML = body;
  const titulo = div.querySelector('title');
  document.querySelector('h1').innerHTML = titulo.innerHTML;
  console.log(titulo);
});

*/

const imagem = fetch('./image.png');

imagem
.then(r => r.blob())
.then(body =>{
  
})