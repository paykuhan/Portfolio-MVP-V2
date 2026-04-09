// Array de projetos
const projetos = [
  {
    titulo: "Portfólio Profissional V1",
    descricao: "Site pessoal moderno focado em UI/UX, utilizando HTML5, CSS3 avançado e JavaScript.",
    tecnologias: ["html5", "css3-alt", "js"], // ícones do FontAwesome (sem o fa-)
    link: "https://paykuhan.github.io/Portfolio-MVP-V1/"
  },
  {
    titulo: "Calculadora Minimalista",
    descricao: "Uma calculadora simples com visual limpo, desenvolvida em JavaScript puro.",
    tecnologias: ["html5", "css3-alt", "js"],
    link: "https://paykuhan.github.io/Calculadora/"
  },
  // Posso adicionar mais projetos facilmente aqui:
  // {
  //   titulo: "Em breve",
  //   descricao: "Descrição do seu próximo grande projeto de Sistemas para Internet.",
  //   tecnologias: ["node-js", "react"],
  //   link: "#"
  // }
];

// Renderização dinâmica dos projetos
const listaProjetos = document.getElementById("lista-projetos");

if (listaProjetos) { // Proteção para caso o elemento não exista
  projetos.forEach(projeto => {
    // Criação dos ícones de tecnologia
    const tagsTecnologia = projeto.tecnologias.map(tech => 
      `<i class="fab fa-${tech}"></i>`
    ).join(' ');

    const div = document.createElement("div");
    div.classList.add("projeto");
    
    div.innerHTML = `
      <div class="projeto-header">
        <h3>${projeto.titulo}</h3>
        <div class="tech-tags">${tagsTecnologia}</div>
      </div>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">
        Ver no GitHub
      </a>
    `;
    listaProjetos.appendChild(div);
  });
}
