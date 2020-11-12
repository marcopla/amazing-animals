function espera (texto){
  console.log(texto);
}

setTimeout(espera, 1000, 'espera');

setTimeout(() =>{
  console.log('Após 0s?');
});

function executa (texto){
  console.log(texto);
}

setTimeout(espera2, 1000, 'executa');