const frutas = ['Banan','Uva','Morango'];

const frase = 'Isso é JavaScript';

for(const fruta of frutas){
  console.log(fruta);
}

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
  btn.style.color = 'blue';
}

console.log(...buttons);


const carro = {
  marca : 'Honda',
  ano : 2018
}


// in para não iteráveis

Object.defineProperties(carro, {
  rodas: {
    value : 4,
    enumerable : true
  }
})

for(const key in carro) {
  console.log(key, carro[key] );
}

// se usar o in em um array:

for(const f in frutas) {
  console.log(f);  // ele irá imprimir somente a posição do elemento no array
}


const btnUnico = document.querySelector('button');

const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles){
 // console.log(`${style} : ${btnStyles[style]}`);
}


// do while
let i = 0;
do {
  console.log(i++);
}while(i<=9)




