export default function initDropdownMenu (){

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach( menu => {
    ['touchstart', 'click'].forEach( userEvent => {
      menu.addEventListener( userEvent, handleclick);
    });
  });

  function handleclick(event){
    event.preventDefault();
    this.classList.toggle('active');
  };
}