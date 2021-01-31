function $$(selectedElements){
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
    element.style.display = 'none';
    });
    return $$(selectedElements); // o this pode substituir $$(selectedElements)
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    })
    return $$(selectedElements);
  }

  function on(onEvent, callBack) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callBack);
    })
    return $$(selectedElements);
  }
  
  function addClass(className) {
    elements.forEach(element =>{
      element.classList.add(className);
    });
    return $$(selectedElements);
  }

  function removeClass(className) {
    elements.forEach(element =>{
      element.classList.remove(className);
    });
    return $$(selectedElements);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}

const btns = $$('button');



function handleClick(event){
  console.log(event.target);
}

btns.on('click', handleClick);

btns.addClass('ativo').removeClass('ativo');
