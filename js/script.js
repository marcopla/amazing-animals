// const div = document.querySelector('[data-cor]');

// div.dataset.height = 1000;

// delete div.dataset.width;

// div.dataset.totalHeight = 2000;

// console.log(div.dataset)

import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import {testando as teste, testando2 } from './modules/teste.js';
import * as tudo from './modules/teste2.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js'


teste();
testando2();

tudo.cumprimenta();
console.log(tudo.senha);

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector( '.btn');

function handleChange(event){
  console.log(event);
}