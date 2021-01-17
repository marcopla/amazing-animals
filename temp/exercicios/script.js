const form = document.querySelector('form');
const valorBitcoin = document.querySelector('#valor-bitcoin');

function cep(form){
  form.addEventListener('change', handleChangeForm);

  function handleChangeForm(event){
    const cep = document.querySelector('#cep').value;
    const endereco = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    endereco
    .then(response => response.json())
    .then(body => {
      const enderecoCompleto = document.querySelector('#endereco-completo');
      const logradouro = body.logradouro;
      const bairro = body.bairro;
      const cidade = body.localidade; 
      enderecoCompleto.innerText = `\nRua: ${logradouro},\n Bairro: ${bairro},\n Cidade: ${cidade}`; 
    });
  }
}

function bitcoin(){
  const bitcoinValue = fetch('https://www.blockchain.com/ticker');
  console.log('Executou')
  bitcoinValue
  .then(response => response.json())
  .then(body => {
    valorBitcoin.innerText = body["BRL"].buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  });
}

function chuckNorrisJokes(){

  const joke = fetch('https://api.chucknorris.io/jokes/random');
  
}
cep(form);
setInterval(bitcoin, 30000);



