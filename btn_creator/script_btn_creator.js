const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  backgroundColor: 'azul', 
  backgroundColor(value){
    btn.style.backgroundColor = value;
  },
  height(value){
    btn.style.height = value +'px';
  }
}
function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  btn.style.backgroundColor = value;
  console.log(event);
  console.log(name, value);
}