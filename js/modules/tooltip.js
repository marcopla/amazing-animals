export default function intittoolTip() {

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event){
  const tooltipBox = criartoolTipBox(this);
  tooltipBox.style.top = event.pageY + 'px';
  tooltipBox.style.left = event.pageX + 'px';
 
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
  toolipBox:'',
  element: '',
  handleEvent(){
    this.tooltipBox.remove();  
    this.element.removeEventListener('mouseleave', onMouseLeave);
  }
}

function criartoolTipBox(element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox; 
}

}
