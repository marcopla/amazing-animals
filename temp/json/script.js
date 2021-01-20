const cursos = fetch('./dados.json');

cursos
.then(response => response.json())
.then(body => {
  console.log(body);
})
