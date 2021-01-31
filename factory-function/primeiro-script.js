// function createButton(text){
//   function element(){
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({ //não permite que o objeto seja modificiado
//     text,
//     element
//   })
// }


// const botaoComprar = createButton('Comprar');
// const botaoVender = createButton('Vender');

function Pessoa(nome){
  if(!(this instanceof Pessoa)) //verifica se foi utilizado o new para criação
    return new Pessoa(text);
  this.nome = nome;
}

Pessoa.prototype.andar = function() { 
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer);