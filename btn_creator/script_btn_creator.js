const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn, 
  backgroundColor(value){
    this.style.backgroundColor = value;
  },
  height(value){
    this.style.height = value +'px';
  }, 
}

handleStyle.height(2);

function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;

  hsndleStyle[name](vale);
}