// function perimetroForma(lado, totalLados){
//   totalLados = totalLados || 4;
//   return lado * totalLados;
// }

// perimetroForma(10, 4);
// perimetroForma(10);

// arguments
// function perimetroForma(lado, totalLados = 4){
//   const argArray = Array.from(arguments);
//   console.log(argArray);
//   return lado * totalLados;
// }

// perimetroForma(10, 4);
// perimetroForma(10);


// // rest
// function lista(...listaArgumentos){
// console.log(listaArgumentos);
// }

// lista(10,'', 'bavc', 343);

// diferenca de arguments e rest
// function perimetroForma(lado, totalLados, ...listaArgumentos){
//   console.log(listaArgumentos); // objeto
//   console.log(arguments); //todos os argumentos, array like

//   return lado * totalLados;
// }

// perimetroForma(10, 4, 'oi', 30, 342);

// spread
// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas,'Pizza', ...legumes];

// console.log(comidas);

