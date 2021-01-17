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

/* Blob
const imagem = fetch('./image.png');

imagem
.then(r => r.blob())
.then(body =>{
  const blobUrl = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
});
*/

/* .clone()
const imagem = fetch('https://viacep.com.br/ws/01001000/json/');

imagem
.then(response => {
  response2 = response.clone();

  response.text();
  //console.log(response);

  response2.json()
  .then(body => console.log(body));
  console.log(response2);
})
.then(body => {
  console.log(body);
});
*/

/* .headers.forEach(console.log)
const cep = fetch('https://viacep.com.br/ws/01001000/json/');
cep
.then(response => {
  response.headers.forEach(console.log)
});
*/

/*
 //response.status url type ok
const cep = fetch('https://viacep.com.br/ws/01001000/json/');
cep
.then(response => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.url);
  console.log(response.type); //basic é do próprio servidor, cors é de fora, se for acessar o site do google vai dar erro, pois ele não aceita acesso externo.
  
  if(response.status === 404){
    console.log('Página não existe.');
  }
});
*/





