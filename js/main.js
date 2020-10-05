const pessoa = new Object({
  nome: 'Marco',

});

console.log(pessoa);

const carro = {
  rodas: 4,
  init(marca){
    this.marca = marca;
    return this;
  },
  acelerar(){
    return this.marca + ' acelerou';
  },
  buzinar(){
    return this.marca + ' buzinou';
  }
}

const ferrari = Object.create(carro).init('Ferrari');

//honda.marca = 'Honda';
//honda.init('Honda')

ferrari.acelerar;

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },

}

const moto = {
  rodas: 2,
  capacete: true,
};

const caminhao = {
  rodas: 4, 
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(caminhao, funcaoAutomovel);

Object.defineProperties();