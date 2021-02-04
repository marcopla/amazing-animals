const cpfList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => elements.map(element => element.innerText);
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}
const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}
const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}
const atualizarCPFSNoHtml = (cpfElements) => {
  const cpfs = elementsInnerText(cpfElements);
  const cpfsFormatados = formatarCPF(cpfs);
  console.log(cpfsFormatados);
  cpfElements.forEach((cpf, index) => {
    cpf.innerText = cpfsFormatados[index]
  })
}

atualizarCPFSNoHtml(cpfList);