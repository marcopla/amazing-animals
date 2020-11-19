// const btn = document.querySelector('button');
// btn.addEventListener('click', handleClick);

// function handleClick(){
//   setTimeout(function(){
//     this.classList.add('active');
//   });
// }


// let contarAte10 = setInterval(callback, 1000);

// let i = 0;

// function callback(){
//   console.log(i++);
//   if(i > 10){
//     clearInterval(contarAte10);
//   }
// }


////////////////////////////////////////Exercícios

/*
Exercício 1
function mudarClasse(){
  document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);
*/

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 1000);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo(){
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
  
}
function resetarTempo(){
  i = 0;
  clearInterval(timer);
  tempo.innerText = 0;
}


/*
function handleClick(){
  console.log(this);
  this.classList.add('active');
}

function espera (texto){
  console.log(texto);
}

setTimeout(espera, 1000, 'Testando');

setTimeout(() =>{
  console.log('testando');
}, 0);

for(let i = 0; i < 20 ; i++){
  setTimeout(() =>{
    console.log(i);
  }, 1000);
}
*/

