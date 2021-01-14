const promessa = new Promise(function(resolve, reject){ 
  let condicao = true;
  if(condicao){
    setTimeout(() => {
      resolve({nome: 'Marco', idade: 37, sexo: 'M'});
    },1000);
  } else {
    reject(Error('Um erro ocorreu na promise.'));
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

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas);
})

console.log(retorno);