const retificacoes = [
  {
    titulo: "Período de inscrição ajustado",
    data: "22/03 a 05/04/2026",
    descricao:
      "No cronograma aparecem as datas 22/03 a 31/03 e também 22/03 a 05/04. A coordenação adota a janela mais ampla da versão publicada.",
  },
  {
    titulo: "Período de submissão ajustado",
    data: "06/04 a 10/05/2026",
    descricao:
      "No cronograma aparecem 02/04 a 10/05 e 06/04 a 10/05. Mantida a data alinhada ao item 2.5 do edital.",
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

renderLista("retificacoes", retificacoes, "titulo");
renderLista("cronograma", cronograma, "etapa");
