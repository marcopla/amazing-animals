const url = 'http://jsonplaceholder.typicode.com/posts';

const options = {
  method: 'POST',
  body: '{"title": "javascript"}',
  headers: { 
    "Content-type": "application/json; charset=utf-8"  
  }
}

fetch(url, options)
.then(r => r.json())
.then(body => console.log(body))