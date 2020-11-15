const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(){
  setTimeout(function(){
    this.classList.add('active');
  });
}


let contarAte10 = setInterval(callback, 1000);

let = 0;

function callback(){
  console.log(i++);
  if(i > 10){
    clearInterval(contarAte10);
  }
}


//Exercícios
function mudarClasse(){
  document.body.classList.toggle('active');
}

mudarClasse();
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

