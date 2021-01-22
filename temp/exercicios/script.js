const form = document.querySelector('form'),
  valorBitcoin = document.querySelector('#valor-bitcoin'),
  chuckJoke = document.querySelector('#joke'),
  btnNextJoke = document.querySelector('#btn-next-joke');

btnNextJoke.addEventListener('click', chuckNorrisJokes);

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

  joke
  .then(joke => joke.json())
  .then(body => {
    chuckJoke.innerText = body.value;
  } )
}

cep(form);
bitcoin();
setInterval(bitcoin, 30000);
chuckNorrisJokes();


