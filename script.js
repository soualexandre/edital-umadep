const retificacoes = [
  {
    titulo: "Retificação 01 - Período de inscrição",
    antes: "22/03 a 31/03/2026",
    depois: "22/03 a 05/04/2026",
  },
  {
    titulo: "Retificação 02 - Período de submissão",
    antes: "02/04 a 10/05/2026",
    depois: "06/04 a 10/05/2026",
  },
];

const cronograma = [
  { etapa: "Publicação do edital", data: "22/03/2026" },
  { etapa: "Inscrições", data: "22/03 a 05/04/2026" },
  { etapa: "Submissão das composições", data: "06/04 a 10/05/2026" },
  { etapa: "Triagem e validação", data: "11/05 a 15/05/2026" },
  { etapa: "Publicação dos vídeos e início da votação", data: "16/05/2026" },
  { etapa: "Votação popular", data: "16/05 a 31/05/2026" },
  { etapa: "Avaliação do júri técnico", data: "29/05 a 12/06/2026" },
  { etapa: "Fechamento das avaliações", data: "12/06/2026" },
  { etapa: "Divulgação do vencedor", data: "13 ou 14/06/2026" },
];

function renderLista(elementId, dados, campoTitulo) {
  const lista = document.getElementById(elementId);
  if (!lista) return;

  lista.innerHTML = dados
    .map(
      (item) => `
        <li>
          <div class="item-head">
            <strong>${item[campoTitulo]}</strong>
            <span class="date">${item.data}</span>
          </div>
          ${
            item.descricao
              ? `<p class="item-note">${item.descricao}</p>`
              : ""
          }
        </li>
      `
    )
    .join("");
}

function renderRetificacoes() {
  const lista = document.getElementById("retificacoes");
  if (!lista) return;

  lista.innerHTML = retificacoes
    .map(
      (item) => `
        <li>
          <div class="item-head">
            <strong>${item.titulo}</strong>
          </div>
          <p class="item-note">
            <span class="label">Antes:</span>
            <span class="date-before">${item.antes}</span>
          </p>
          <p class="item-note">
            <span class="label">Depois:</span>
            <span class="date-after">${item.depois}</span>
          </p>
        </li>
      `
    )
    .join("");
}

renderRetificacoes();
renderLista("cronograma", cronograma, "etapa");
