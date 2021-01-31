import Countdown from './countdown.js';

const diasParaNatal = new Countdown('24 December 2021 23:59:59 GMT-0300');

setInterval(() => {
  console.log(diasParaNatal.total);
},1000);
