const cursos = fetch('./dados.json');

/* Antes do método Json
cursos
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
});
*/
