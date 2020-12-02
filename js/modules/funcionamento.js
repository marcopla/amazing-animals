export default function initFuncionamento() {

}

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora  = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

if(horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]){
  console.log('Dentro do horário');
}else{
  console.log('Fora do horário');
};

console.log(semanaAberto);

