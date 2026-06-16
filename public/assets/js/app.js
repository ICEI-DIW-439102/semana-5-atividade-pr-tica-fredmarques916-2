// ESTRUTURA JSON DA APLICAÇÃO (Entidade Principal = Artistas | Entidade Secundária = Álbuns)
const artistas = [
    {
        "id": 1,
        "nome": "Luna Ravel",
        "descricao_curta": "Pop alternativo com influências etéreas e letras introspectivas.",
        "descricao_longa": "Luna Ravel iniciou sua carreira nos palcos independentes e rapidamente cativou o público com sua voz suave e composições profundas. Seus álbuns exploram temas de autodescoberta, sonhos e relacionamentos modernos, misturando sintetizadores com batidas pop.",
        "genero": "Pop Alternativo / Synth",
        "origem": "São Paulo, SP",
        "ano_inicio": 2018,
        "destaque": true,
        "imagem_principal": "https://picsum.photos/seed/luna42/1200/500",
        "imagem_thumb": "https://picsum.photos/seed/luna42/320/340",
        "albuns": [
            { "id": 101, "titulo": "Midnight Echoes", "ano": 2021, "imagem": "https://picsum.photos/seed/midnight11/460/260" },
            { "id": 102, "titulo": "Starlight", "ano": 2023, "imagem": "https://picsum.photos/seed/starlight/460/260" }
        ]
    },
    {
        "id": 2,
        "nome": "Kairo Vega",
        "descricao_curta": "Indie folk contemporâneo com violão e harmonias acústicas.",
        "descricao_longa": "Com raízes na música folk tradicional, Kairo Vega traz uma abordagem moderna e intimista. Suas canções são marcadas por arranjos de violão complexos e letras que falam sobre a conexão com a natureza, a nostalgia e a simplicidade da vida no interior.",
        "genero": "Indie Folk",
        "origem": "Curitiba, PR",
        "ano_inicio": 2015,
        "destaque": false,
        "imagem_principal": "https://picsum.photos/seed/kairo7/1200/500",
        "imagem_thumb": "https://picsum.photos/seed/kairo7/320/340",
        "albuns": [
            { "id": 201, "titulo": "Paper Sails", "ano": 2018, "imagem": "https://picsum.photos/seed/papersails/460/260" },
            { "id": 202, "titulo": "Wooden Hearts", "ano": 2020, "imagem": "https://picsum.photos/seed/wooden/460/260" },
            { "id": 203, "titulo": "Riverside", "ano": 2022, "imagem": "https://picsum.photos/seed/riverside/460/260" }
        ]
    },
    {
        "id": 3,
        "nome": "Milo Sato",
        "descricao_curta": "Lo-fi hip-hop com batidas suaves e atmosferas urbanas.",
        "descricao_longa": "Produtor musical que se destaca na cena Lo-fi global. Milo Sato cria trilhas sonoras perfeitas para estudo e relaxamento. Ele utiliza samples de jazz clássico e sons ambiente de metrópoles para criar camadas ricas, nostálgicas e tranquilizantes.",
        "genero": "Lo-fi Hip-Hop / Beats",
        "origem": "Tóquio, Japão",
        "ano_inicio": 2020,
        "destaque": true,
        "imagem_principal": "https://picsum.photos/seed/milo55/1200/500",
        "imagem_thumb": "https://picsum.photos/seed/milo55/320/340",
        "albuns": [
            { "id": 301, "titulo": "Neon Archive", "ano": 2021, "imagem": "https://picsum.photos/seed/neon7788/460/260" },
            { "id": 302, "titulo": "Rainy Days", "ano": 2022, "imagem": "https://picsum.photos/seed/rainy/460/260" },
            { "id": 303, "titulo": "Tokyo Nights", "ano": 2023, "imagem": "https://picsum.photos/seed/tokyonight/460/260" }
        ]
    },
    {
        "id": 4,
        "nome": "The Echoes",
        "descricao_curta": "Rock alternativo com guitarras marcantes e vocais rasgados.",
        "descricao_longa": "Banda de rock alternativo formada por amigos de faculdade. Eles combinam a energia crua do rock dos anos 90 com uma produção moderna e letras que abordam questões existenciais da juventude de forma enérgica e envolvente.",
        "genero": "Rock Alternativo",
        "origem": "Belo Horizonte, MG",
        "ano_inicio": 2012,
        "destaque": true,
        "imagem_principal": "https://picsum.photos/seed/echoesband/1200/500",
        "imagem_thumb": "https://picsum.photos/seed/echoesband/320/340",
        "albuns": [
            { "id": 401, "titulo": "Shattered Glass", "ano": 2016, "imagem": "https://picsum.photos/seed/shattered/460/260" },
            { "id": 402, "titulo": "Riot", "ano": 2019, "imagem": "https://picsum.photos/seed/riot/460/260" }
        ]
    }
];

// INICIALIZAÇÃO DEPENDENDO DA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    // Se o elemento do carrossel existir, significa que estamos na index.html
    if (document.getElementById('carousel-inner-destaques')) {
        carregarHomePage();
    }

    // Se o container de detalhe existir, estamos na detalhe.html
    if (document.getElementById('detalhe-container')) {
        carregarDetalhePage();
    }
});

// FUNÇÃO PARA RENDERIZAR A HOME (CRITÉRIO: SLIDER E LISTA DINÂMICA)
function carregarHomePage() {
    const carouselInner = document.getElementById('carousel-inner-destaques');
    const carouselIndicators = document.getElementById('carousel-indicators-destaques');
    const gridArtistas = document.getElementById('grid-todos-artistas');

    // 1. Filtrar destaques e renderizar Slider
    const artistasDestaque = artistas.filter(artista => artista.destaque === true);

    artistasDestaque.forEach((artista, index) => {
        const ativoClass = index === 0 ? 'active' : '';

        // Criar indicadores
        const btnIndicator = document.createElement('button');
        btnIndicator.type = 'button';
        btnIndicator.dataset.bsTarget = '#carouselDestaques';
        btnIndicator.dataset.bsSlideTo = index;
        if (index === 0) btnIndicator.classList.add('active');
        carouselIndicators.appendChild(btnIndicator);

        // Criar os slides em si
        const slide = document.createElement('div');
        slide.className = `carousel-item ${ativoClass}`;
        slide.style.cursor = "pointer";

        // Permite que o clique na imagem leve para os detalhes
        slide.onclick = (e) => {
            if (e.target.tagName !== 'A') {
                window.location.href = `detalhe.html?id=${artista.id}`;
            }
        };

        slide.innerHTML = `
              <img src="${artista.imagem_principal}" class="d-block w-100" alt="${artista.nome}" style="height: 480px; filter: brightness(0.5);">
              <div class="carousel-caption d-none d-md-block text-center" style="bottom: 4rem;">
                  <span class="tag" style="margin-bottom: 12px; display: inline-block;">${artista.genero}</span>
                  <h2 style="font-size: 42px; font-weight: 800; color: #fff;">${artista.nome}</h2>
                  <p style="color: #ddd; font-size: 18px; margin-bottom: 20px;">${artista.descricao_curta}</p>
                  <a href="detalhe.html?id=${artista.id}" class="btn btn--purple">Conhecer a fundo →</a>
              </div>
          `;
        carouselInner.appendChild(slide);
    });

    // 2. Renderizar Todos os Artistas (Cards)
    artistas.forEach(artista => {
        const article = document.createElement('article');
        article.className = 'card card--artist';
        article.innerHTML = `
              <a href="detalhe.html?id=${artista.id}" style="display:block; text-decoration:none;">
                  <div class="card__photo">
                      <img src="${artista.imagem_thumb}" alt="${artista.nome}" class="card__img" />
                  </div>
                  <div class="card__info">
                      <h3 class="card__name">${artista.nome}</h3>
                      <p class="card__bio">${artista.descricao_curta}</p>
                      <span class="btn btn--outline btn--sm btn--fw" style="margin-top: 15px;">Ver Detalhes</span>
                  </div>
              </a>
          `;
        gridArtistas.appendChild(article);
    });
}

// FUNÇÃO PARA RENDERIZAR A PÁGINA DE DETALHES (CRITÉRIO: PASSAGEM DE ID POR URL)
function carregarDetalhePage() {
    const container = document.getElementById('detalhe-container');

    // Captura o ?id= da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idArtista = parseInt(urlParams.get('id'));

    // Busca o artista correspondente no JSON
    const artista = artistas.find(a => a.id === idArtista);

    if (!artista) {
        container.innerHTML = `
              <div style="text-align:center; padding: 100px 0;">
                  <h2 class="section__h2">Artista não encontrado.</h2>
                  <br>
                  <a href="index.html" class="btn btn--purple">← Voltar ao Início</a>
              </div>
          `;
        return;
    }

    // Monta o layout da página de detalhes (Garantindo 5 pontos de informação e Fotos vinculadas)
    let html = `
          <div class="section__head">
              <div>
                  <p class="eyebrow">Visão Geral</p>
                  <h2 class="section__h2">Informações do Artista</h2>
              </div>
              <a href="index.html" class="btn btn--outline btn--sm">← Voltar</a>
          </div>
  
          <div class="detalhe-geral">
              <div class="detalhe-geral__img-wrapper">
                  <img src="${artista.imagem_thumb}" alt="Foto de ${artista.nome}">
              </div>
              <div class="detalhe-geral__info">
                  <h1>${artista.nome}</h1>
                  <ul class="detalhe-list">
                      <li><strong>1. Gênero Musical:</strong> ${artista.genero}</li>
                      <li><strong>2. Local de Origem:</strong> ${artista.origem}</li>
                      <li><strong>3. Em atividade desde:</strong> ${artista.ano_inicio}</li>
                      <li><strong>4. Artista em Destaque?:</strong> ${artista.destaque ? 'Sim' : 'Não'}</li>
                  </ul>
                  <p style="color: var(--clr-muted); line-height: 1.8;">
                      <strong>5. Biografia:</strong> ${artista.descricao_longa}
                  </p>
              </div>
          </div>
  
          <div class="section__head">
              <div>
                  <p class="eyebrow">Discografia</p>
                  <h2 class="section__h2">Álbuns Lançados</h2>
              </div>
          </div>
          <div class="cards cards--albums" style="margin-bottom: 80px;">
      `;

    if (artista.albuns && artista.albuns.length > 0) {
        artista.albuns.forEach(album => {
            html += `
                  <article class="card card--album">
                      <div class="card__thumb">
                          <img src="${album.imagem}" alt="Capa do álbum ${album.titulo}" class="card__img" />
                      </div>
                      <div class="card__info">
                          <h3 class="card__name">${album.titulo}</h3>
                          <p class="card__artist-name">Lançamento: ${album.ano}</p>
                      </div>
                  </article>
              `;
        });
    } else {
        html += `<p style="color: var(--clr-muted);">Nenhum álbum cadastrado.</p>`;
    }

    html += `</div>`;

    // Aplica o HTML gerado dinamicamente na tela
    container.innerHTML = html;
}