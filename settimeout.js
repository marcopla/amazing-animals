function espera (texto){
  console.log(texto);
}

setTimeout(espera, 1000, 'Testando');

setTimeout(() =>{
  console.log('testando');
}, 0);


for(let i=0; i < 20 ; i++){
  console.log(i + ` Primeiro for`)
}

for(let i=0; i < 20 ; i++){
  setTimeout(() =>{
    console.log(i + ` Segundo for`);
  })
}