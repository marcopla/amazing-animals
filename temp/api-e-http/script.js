async function puxarDados(){
  try {
    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json();
    console.log(jsonDados);
    document.body.innerText = jsonDados.aula;
  }catch(erro){

  }
}
puxarDados()