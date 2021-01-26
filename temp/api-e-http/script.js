async function puxarDados(){}

const responseDados = await fetch('./dados.json')
console.log(responseDados)
}
puxarDados()