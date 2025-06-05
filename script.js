const k = 8.99e9; // Constante eletrostática em N·m²/C²
let selecionados = [];
 
const elementosCalculo = document.querySelectorAll('.caixacalculo .elemento-calculo');
 
elementosCalculo.forEach(el => {
  el.addEventListener('click', () => {
    if (selecionados.includes(el)) return;
 
    el.classList.add('selecionado');
    selecionados.push(el);
 
    if (selecionados.length === 2) {
      calcularInteracao(selecionados[0], selecionados[1]);
    }
  });
});
 
function calcularInteracao(el1, el2) {
  const carga1 = parseFloat(el1.dataset.carga);
  const carga2 = parseFloat(el2.dataset.carga);
  const distancia = 1; // distância fictícia (1 metro)
 
  const forca = k * (carga1 * carga2) / (distancia * distancia);
  const tipo = forca > 0 ? 'Repulsão' : 'Atração';
 
  alert(`Interação entre ${el1.textContent} e ${el2.textContent}:\n` +
        `Cargas: ${carga1} C e ${carga2} C\n` +
        `Força: ${Math.abs(forca).toExponential(2)} N\n` +
        `Tipo: ${tipo}`);
 
  // Resetar seleção
  selecionados.forEach(el => el.classList.remove('selecionado'));
  selecionados = [];
}