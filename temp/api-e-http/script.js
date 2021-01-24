const url = 'http://jsonplaceholder.typicode.com/posts';

const options = {
  method: 'HEAD',

  }

fetch(url, options)
.then(response => {
  response.headers.forEach(header => console.log(header))
})

