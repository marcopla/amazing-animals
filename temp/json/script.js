const cursos = fetch('./dados.json');

/* Antes do método Json
cursos
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
});
*/
cursos
.then(r => r.json())
.then(json => {

})

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes);

const stringConfig = JSON.parse(localStorage.config);
console.log(stringConfig);