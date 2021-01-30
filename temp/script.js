function Button(text, background){
  this.text = text;
  this.background = background;
}

Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background; 
  return buttonElement;
}
static 






// class Button {
//   constructor(text, background,color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element(){
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background; 
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target){
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const buttonBlue = new Button('Comprar', 'blue', 'white'); 

// buttonBlue.appendTo('body');

// const redButtonStatic = Button.createButton('Click aqui', 'red');

// console.log(redButtonStatic);