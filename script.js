const alvos = document.querySelectorAll('.split-text, .split-media, .service-card, .team-card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });
  alvos.forEach((elemento) => observer.observe(elemento));
} else {
  alvos.forEach((elemento) => elemento.classList.add('visible'));
}

// Preencha cada WhatsApp com DDI + DDD + número, somente dígitos.
// Exemplo: 5511999999999. Os contatos não constam no PDF nem nos arquivos do site.
const profissionais = [
  {
    nome: "Eliane Schlichting",
    funcao: "Psicoterapeuta Sistêmica Integrativa, fundadora e gestora do Ateliê do Ser",
    foto: "./src/profissioanais/Eli.jpg",
    resumo: [
      "Psicoterapeuta, atua com desenvolvimento humano há mais de 20 anos, graduada em Psicologia e especialista em Saúde Mental.",
      "Conduz processos terapêuticos fundamentados na Abordagem Sistêmica, na Psicogenealogia e em práticas integrativas.",
      "Utiliza Constelação Familiar, vivências simbólicas e técnicas terapêuticas para favorecer consciência, transformação e fortalecimento dos vínculos.",
      "Acompanha pessoas em momentos de ansiedade, depressão, traumas, conflitos relacionais e desafios da vida.",
      "Integra corpo, mente, emoções e alma, promovendo autoconhecimento, equilíbrio e novos caminhos."
    ],
    whatsapp: ""
  },
  {
    nome: "Edna M. Contato",
    funcao: "Terapeuta Energética",
    foto: "./src/profissioanais/Edna Terapia de Florais.jpg",
    resumo: [
      "Atua desde 1993 com práticas integrativas voltadas ao equilíbrio energético e emocional.",
      "Especialista em Florais de Bach, Reiki e Terapias Energéticas.",
      "Desenvolve atendimentos que favorecem relaxamento, acolhimento e harmonização integral.",
      "Auxilia pessoas que buscam mais equilíbrio emocional, vitalidade e conexão consigo mesmas."
    ],
    whatsapp: ""
  },
  {
    nome: "Rosângela Silva",
    funcao: "Fisioterapeuta · CREFITO 181 383-F",
    foto: "./src/profissioanais/Rosangela - Fisio.jpg",
    resumo: [
      "Fisioterapeuta formada pela UNIMEP, especialista em Terapia Manual.",
      "Atua como Microfisioterapeuta desde 2017 e também com Terapia Manual Estrutural (TME).",
      "Trabalha considerando as relações entre corpo, emoções e memória biológica.",
      "Busca aliviar dores, restaurar o equilíbrio do organismo e promover qualidade de vida."
    ],
    whatsapp: ""
  },
  {
    nome: "Giselle Roseni",
    funcao: "Reflexoterapeuta e Acupunturista",
    foto: "./src/profissioanais/Giselle - Acunputura -Reflexoterapia.jpg",
    resumo: [
      "Formada em Pedagogia e Psicopedagogia, com mais de 22 anos dedicados ao desenvolvimento humano.",
      "Especialista em Reflexoterapia Podal Física e Emocional e formada em Acupuntura pela Ebramec.",
      "Utiliza recursos da Medicina Tradicional Chinesa, como Auriculoterapia, Moxabustão, Ventosaterapia, Guasha e Acupuntura Estética Facial.",
      "Promove cuidado integrativo para favorecer equilíbrio físico, emocional e energético."
    ],
    whatsapp: ""
  },
  {
    nome: "Rogélia Silva",
    funcao: "Instrutora de Yoga",
    foto: "./src/profissioanais/Rogélia - yoga.jpg",
    resumo: [
      "Atua com Hatha Yoga Vinyasa Krama, em formação fundamentada na tradição de T. Krishnamacharya e TKV Desikachar.",
      "Integra movimento, respiração e consciência corporal em uma prática respeitosa às necessidades individuais.",
      "Oferece aulas individuais e em grupo, favorecendo equilíbrio físico, emocional e mental."
    ],
    whatsapp: ""
  },
  {
    nome: "Ana Lúcia B. Simões",
    funcao: "Psicóloga Clínica · CRP 06/78603",
    foto: "./src/profissioanais/Ana Psicanalista.jpg",
    resumo: [
      "Psicóloga clínica com mais de 20 anos de experiência e formação em Teoria Psicanalítica.",
      "Oferece um espaço acolhedor para escuta, elaboração e compreensão da própria história.",
      "Auxilia seus pacientes a compreender as relações entre mente, corpo e comportamento.",
      "Favorece autoconhecimento, fortalecimento emocional e desenvolvimento pessoal."
    ],
    whatsapp: ""
  },
  {
    nome: "Rafael Italliani",
    funcao: "Terapeuta Reiki",
    foto: "./src/profissioanais/Rafael - Reiki.jpg",
    resumo: [
      "Terapeuta Reiki com formação em Canalização Energética.",
      "Desenvolve atendimentos voltados ao equilíbrio físico, emocional, mental e energético.",
      "Auxilia na redução do estresse, melhora do sono, relaxamento profundo e fortalecimento da vitalidade.",
      "Atendimentos presenciais e on-line, promovendo bem-estar e autoconhecimento."
    ],
    whatsapp: ""
  },
  {
    nome: "Aline Sales",
    funcao: "Nutricionista",
    foto: "./src/profissioanais/Aline Sales.jpg",
    resumo: [
      "Nutricionista com atuação em nutrição clínica, esportiva e obesidade.",
      "Desenvolve planos alimentares personalizados para emagrecimento, ganho de massa muscular e reeducação alimentar.",
      "Incentiva uma alimentação equilibrada, prática e sustentável.",
      "Atendimento humanizado, presencial e on-line."
    ],
    whatsapp: ""
  },
  {
    nome: "Bruna Orizio",
    funcao: "Fisioterapeuta",
    foto: "./src/profissioanais/Bruna - Fisioterapeuta.jpg",
    resumo: [
      "Atua na prevenção, reabilitação física e tratamento da dor.",
      "Desenvolve tratamentos personalizados para dores musculares, articulares e lesões esportivas.",
      "Auxilia na recuperação dos movimentos, funcionalidade e qualidade de vida.",
      "Atendimento humanizado, promovendo autonomia, bem-estar e recuperação integral."
    ],
    whatsapp: ""
  },
  {
    nome: "Rodrigo Duarte",
    funcao: "Gestão administrativa",
    foto: "./src/profissioanais/Rodrigo Duarte.jpg",
    resumo: [
      "Atua na organização interna, desenvolvimento de projetos e melhoria contínua dos processos.",
      "Dá suporte à equipe, contribuindo para que o cuidado aos clientes aconteça com excelência.",
      "Trabalha no fortalecimento da estrutura e no desenvolvimento sustentável do Ateliê do Ser."
    ],
    whatsapp: ""
  }
];

(() => {
  const root = document.querySelector(".profissionais");
  if (!root || profissionais.length === 0) return;

  const profile = root.querySelector("[data-profile]");
  const dots = root.querySelector("[data-dots]");
  const status = root.querySelector("[data-status]");
  const previous = root.querySelector("[data-previous]");
  const next = root.querySelector("[data-next]");
  if (!profile || !dots || !status || !previous || !next) return;
  let atual = 0;

  function mostrar(indice) {
    atual = (indice + profissionais.length) % profissionais.length;
    const pessoa = profissionais[atual];

    const card = document.createElement("article");
    card.className = "profissionais__card";
    const detalhes = document.createElement("div");
    detalhes.className = "profissionais__details";

    const nome = document.createElement("h3");
    nome.className = "profissionais__name";
    nome.textContent = pessoa.nome;
    const funcao = document.createElement("p");
    funcao.className = "profissionais__role";
    funcao.textContent = pessoa.funcao;
    const bio = document.createElement("ul");
    bio.className = "profissionais__bio";
    pessoa.resumo.forEach((texto) => {
      const item = document.createElement("li");
      item.textContent = texto;
      bio.append(item);
    });

    const fotoWrap = document.createElement("div");
    fotoWrap.className = "profissionais__photo-wrap";
    const foto = document.createElement("img");
    foto.className = "profissionais__photo";
    foto.src = pessoa.foto;
    foto.alt = "Foto de " + pessoa.nome;
    foto.loading = "lazy";
    foto.addEventListener("error", () => {
      const placeholder = document.createElement("div");
      placeholder.className = "profissionais__photo--missing";
      placeholder.setAttribute("role", "img");
      placeholder.setAttribute("aria-label", "Foto de " + pessoa.nome + " indisponível");
      placeholder.textContent = pessoa.nome.trim().charAt(0).toLocaleUpperCase("pt-BR");
      foto.replaceWith(placeholder);
    }, { once: true });

    const contato = document.createElement("a");
    contato.className = "profissionais__whatsapp";
    contato.target = "_blank";
    contato.rel = "noopener noreferrer";

    const iconeWhatsapp = document.createElement("img");
    iconeWhatsapp.src = "./src/whatsapp.svg";
    iconeWhatsapp.alt = "";
    iconeWhatsapp.setAttribute("aria-hidden", "true");

    const textoWhatsapp = document.createElement("span");
    if (pessoa.whatsapp.trim()) {
      const numero = pessoa.whatsapp.replace(/\D/g, "");
      contato.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(
        "Olá, " + pessoa.nome + "! Gostaria de agendar um atendimento."
      );
      textoWhatsapp.textContent = "Agendar pelo WhatsApp";
    } else {
      contato.removeAttribute("href");
      contato.setAttribute("aria-disabled", "true");
      textoWhatsapp.textContent = "WhatsApp não informado";
    }
    contato.append(iconeWhatsapp, textoWhatsapp);
    fotoWrap.append(foto, contato);
    detalhes.append(nome, funcao, bio);
    card.append(detalhes, fotoWrap);
    profile.replaceChildren(card);

    dots.replaceChildren(...profissionais.map((profissional, i) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "profissionais__dot";
      botao.setAttribute("aria-label", "Mostrar " + profissional.nome);
      botao.setAttribute("aria-current", String(i === atual));
      botao.addEventListener("click", () => mostrar(i));
      return botao;
    }));
    status.textContent = pessoa.nome + ", profissional " + (atual + 1) + " de " + profissionais.length;
  }

  previous.addEventListener("click", () => mostrar(atual - 1));
  next.addEventListener("click", () => mostrar(atual + 1));
  mostrar(0);
})();