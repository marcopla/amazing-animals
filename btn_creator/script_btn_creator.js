const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn, 
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px';
  }, 
  width(value){
    this.element.style.width = value + 'px';
  },
  texto(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  }
}

function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  //console.log(name, value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value){
  localStorage[name] = value;
}

function setValues(){
  const properties = Object.keys(localStorage);

  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);  
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

const promessa = new Promise(function(resolve, reject){ 
  let condicao = false;
  if(condicao){
    setTimeout(() => {
      resolve({nome: 'Marco', idade: 37, sexo: 'M'});
    },1000);
  } else {
    reject(Error('Um erro ocorreu na promisse.'));
  }
});

const retorno = promessa
.then( resolucao => {
  console.log(resolucao); 
  resolucao.profissao = 'Designer';
  return resolucao;
})
.then(resolucao =>{
  console.log(resolucao);
}, rejeitada => {
  console.log(rejeitada)
})
.finally(() => console.log('finally executado'));

const login = new Primisse(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});

const dados = new Promisse(resolve => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const tudoCarregado = Promisse.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas);
})

console.log(retorno);