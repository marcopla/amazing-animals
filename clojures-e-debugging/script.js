function contagem(){
  let total = 0; // a função incremento() tem acesso a essa variável através de Clojures
  return function incremento(){
    total++;
    console.log(total);
  }
}

const ativar = contagem();

ativar();