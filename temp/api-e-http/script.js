//const url = 'https://cors-anywhere.herokuapp.com/https://www.goggle.com';
const url = 'https://google.com'

fetch(url)
.then(response => {

  console.log(  response.text())
})


