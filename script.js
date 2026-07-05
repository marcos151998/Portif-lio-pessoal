// Lista de 7 projetos apontando para os caminhos da sua pasta local (img/projetos/)
const meusProjetos = [
    {
        id: "01",
        title: "Landing Page Institucional",
        desc: "Landing page desenvolvida para apresentação do chalé, com foco em conversão de reservas e experiência do usuário..",
        techs: ["React", "Node.js", "Redis"],
        github: "https://github.com/marcos151998/ECOCHAL-S",
        deploy: "https://marcos151998.github.io/ECOCHAL-S/",
        images: [
            "img/chale1.png",
            "img/chale 2.png",
            "img/chale 4.png"
        ]
    },
    {
        id: "02",
        title: "Site Institucional",
        desc: "Site institucional criado para apresentar os serviços, acomodações e informações do chalé de forma clara e atrativa.",
        techs: ["TypeScript", "NestJS", "Docker"],
        github: "https://github.com/marcos151998/chal-rochedo",
        deploy: "https://chalerochedo.com/",
        images: [
            "img/rochedo 1.png",
            "img/rochedo 2.png",
            "img/rochedo 4.png"
        ]
    },
    {
        id: "03",
        title: "Loja Virtual",
        desc: "Loja virtual de moda com catálogo de produtos, carrinho de compras e navegação otimizada.",
        techs: ["Next.js", "GraphQL", "Prisma"],
        github: "https://github.com/marcos151998/Decor-Lima",
        deploy: "https://decorlima.com/",
        images: [
            "img/decor 1.png",
            "img/decor 2.png",
            "img/decor 4.png"
        ]
    },
    {
        id: "04",
        title: "E-Commerce",
        desc: "E-commerce para venda de produtos de decoração, com foco em usabilidade, organização e facilidade na compra online.",
        techs: ["React", "Python", "Tailwind"],
        github: "https://github.com/marcos151998/Aura---loja-virtual",
        deploy: "https://marcos151998.github.io/Aura---loja-virtual/",
        images: [
            "img/loja 1.png",
            "img/loja 2.png",
        ]
    },
    {
        id: "05",
        title: "Aplicativo",
        desc: "Aplicativo desenvolvido para automatizar cálculos jurídicos, proporcionando praticidade, rapidez e precisão.",
        techs: ["Node.js", "MQTT", "InfluxDB"],
        github: "https://github.com/marcos151998/calculadora-trabalhista",
        deploy: "https://marcos151998.github.io/calculadora-trabalhista/",
        images: [
            "img/cal tra 1.png",
            "img/cal tra 2.png",
        ]
    },
    {
        id: "06",
        title: "Site Institucional",
        desc: "Site institucional criado para apresentar a pousada, seus serviços e facilitar o contato e as reservas.s",
        techs: ["TypeScript", "Web3", "Postgres"],
        github: "https://github.com/marcos151998/eco-brisa",
        deploy: "https://marcos151998.github.io/eco-brisa/",
        images: [
            "img/pousada 1.png",
            "img/pousada 2.png",
            "img/pousada 4.png"
        ]
    }
];

const gridProjetos = document.getElementById('projects-grid');
gridProjetos.innerHTML = ""; // Limpa o container anterior

// Injeção estruturada com LÓGICA DE SLIDE INDIVIDUAL
meusProjetos.forEach((projeto, indexDoProjeto) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techsHTML = projeto.techs.map(t => `<span>#${t}</span>`).join(' ');

    // Cria a galeria escondendo as imagens extras por padrão
    const imagesHTML = projeto.images.map((imgUrl, indexDaImagem) => `
        <img src="${imgUrl}" alt="Demonstração" class="slide-img" style="display: ${indexDaImagem === 0 ? 'block' : 'none'}; width: 100%; height: 220px; object-fit: cover; border-radius: 8px;">
    `).join('');

    card.innerHTML = `
        <div class="project-header-row">
            <span class="project-number">${projeto.id}</span>
            <div class="project-meta-links">
                <a href="${projeto.github}" target="_blank" title="Código-Fonte"><i class="fa-brands fa-github"></i></a>
                <a href="${projeto.deploy}" target="_blank" title="Visualizar Live"><i class="fa-solid fa-rocket"></i></a>
            </div>
        </div>
        
        <div class="project-info">
            <h3>${projeto.title}</h3>
            <p>${projeto.desc}</p>
            <div class="proj-techs">${techsHTML}</div>
        </div>

        <div class="project-slider-container" style="position: relative; margin-top: 15px; overflow: hidden; border-radius: 8px;">
            <div class="slides-wrapper" id="slides-${indexDoProjeto}">
                ${imagesHTML}
            </div>
            
            ${projeto.images.length > 1 ? `
                <button class="slide-btn prev" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 10px; cursor: pointer; border-radius: 50%; z-index: 10; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="slide-btn next" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 10px; cursor: pointer; border-radius: 50%; z-index: 10; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-chevron-right"></i></button>
            ` : ''}
        </div>
    `;

    gridProjetos.appendChild(card);

    // Lógica interna para rodar o slide de forma independente por card
    if (projeto.images.length > 1) {
        let currentSlide = 0;
        const totalSlides = projeto.images.length;
        const wrapper = card.querySelector(`#slides-${indexDoProjeto}`);
        const imagensDoSlider = wrapper.querySelectorAll('.slide-img');
        const btnPrev = card.querySelector('.slide-btn.prev');
        const btnNext = card.querySelector('.slide-btn.next');

        function updateSlide(nextSlide) {
            imagensDoSlider[currentSlide].style.display = 'none';
            currentSlide = (nextSlide + totalSlides) % totalSlides;
            imagensDoSlider[currentSlide].style.display = 'block';
        }

        btnNext.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlide(currentSlide + 1);
        });

        btnPrev.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlide(currentSlide - 1);
        });
    }
});