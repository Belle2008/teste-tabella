const elementos = [  
    // ... seus elementos (não alterei a estrutura)
  ];
  
  const container = document.getElementById("tabela");
  const tooltip = document.getElementById("tooltip-global");
  
  elementos.forEach(el => {
    const elemento = document.createElement("div");
    elemento.classList.add("elemento");
    elemento.style.gridRowStart = el.linha;
    elemento.style.gridColumnStart = el.coluna;
    elemento.style.backgroundColor = `#${el.corHexCpk}`;
    elemento.innerHTML = `
      <span class="simbolo">${el.simbolo}</span><br>
      <span class="numero-atomico">${el.numeroAtomico}</span>
    `;
  
    elemento.addEventListener("mouseover", () => {
      tooltip.innerHTML = `
        <div class="tooltip-titulo" style="background-color: #${el.corHexCpk};">
          ${el.nome}
        </div>
        <div class="tooltip-box">
          <div class="tooltip-info-esq" style="background-color: #${el.corHexCpk};">
            <div class="simbolo-big">${el.simbolo}</div>
            <div>${el.nome}</div>
            <div>${el.numeroAtomico}</div>
            <div>${el.massaAtomica}</div>
          </div>
          <div class="tooltip-info-dir">
            <table>
              <tr><td>Símbolo</td><td>${el.simbolo}</td></tr>
              <tr><td>Nº atômico</td><td>${el.numeroAtomico}</td></tr>
              <tr><td>Massa</td><td>${parseFloat(el.massaAtomica).toFixed(3)}</td></tr>
              <tr><td>Config. eletrônica</td><td>${el.configuracaoEletronica}</td></tr>
            </table>
          </div>
        </div>
      `;
      tooltip.style.display = "block";
    });
  
    elemento.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });
  
    container.appendChild(elemento);
  });
  