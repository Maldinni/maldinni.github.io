/* ===================================================================
   Enzo Maldinni — Portfolio · vanilla JS
   Dados PT/EN, render de skills/soft-skills/projetos, i18n e efeitos.
   =================================================================== */
(function () {
  "use strict";

  /* ---------- i18n strings ---------- */
  var STR = {
    pt: {
      navAbout: "Sobre", navSoft: "Soft skills", navSkills: "Stack", navProjects: "Projetos", navIa: "IA Autoral", navContact: "Contato",
      heroRole: "AI ENGINEER × CIENTISTA DE DADOS",
      heroTag: "Transformo dados brutos em sistemas que aprendem, decidem e escalam.",
      heroCta: "VER PROJETOS", heroCta2: "CONTATO", scroll: "ROLE PARA EXPLORAR",
      aboutKicker: "// SOBRE", aboutTitle: "Quem está por trás do teclado",
      aboutBody1: "Sou o Enzo — engenheiro de IA e cientista de dados, formando em Engenharia de Computação na UEMA. Trabalho na fronteira entre dado, modelo e produto. Na prática: pego um problema bagunçado — planilha solta, chamado de suporte acumulado, fraude escondida em milhares de registros — e devolvo um sistema que coleta, decide e roda sozinho.",
      aboutBody2: "Faço o caminho inteiro: da extração ao deploy, do monitoramento à interface. Gosto de problema difícil, código limpo e de entregar coisa que funciona fora da demo.",
      aboutBody3: "Se você tem dado parado sem virar decisão, provavelmente dá pra resolver.",
      statusTitle: "STATUS DO SISTEMA", statusRole: "AI Engineer / Cientista de Dados", statusLoc: "São Luís, MA — Remoto, mundo todo", statusAvail: "Aberto a projetos",
      softKicker: "// SOFT SKILLS", softTitle: "Além do código", softNote: "Como trabalho com pessoas, produto e problemas.",
      skillsKicker: "// STACK", skillsTitle: "Tecnologias que utilizo", skillsNote: "Ferramentas que uso para construir, treinar e operar.",
      projectsKicker: "// PROJETOS", projectsTitle: "Trabalhos selecionados", projectsNote: "Projetos reais de IA, dados, automação e web — cada card vende o resultado, não a stack.",
      projClient: "CLIENTE", projHow: "Como funciona", projContrib: "Minha contribuição", projGallery: "Ver imagens", projOne: "Ver imagem",
      iaKicker: "// IA AUTORAL", iaTitle: "IA de verdade. Sua, não alugada.",
      iaBody1: "Hoje quase toda \"solução de IA\" do mercado é a mesma coisa por baixo: um cano ligado na API da OpenAI. Funciona até a conta chegar, até o preço mudar, até cair o serviço — e você nunca foi dono de nada.",
      iaBody2: "Eu construo o outro tipo. Modelo treinado no seu dado, pro seu problema, rodando na sua infra. Do zero ou portado pra open-source local — embeddings, NLP, detecção de padrão, agente que decide. Sem mensalidade pra gigante de tecnologia, sem caixa-preta, sem depender de internet pra pensar.",
      iaBody3: "Já fiz isso valer na prática: peguei um pipeline de pesquisa que só rodava com API paga e infra pesada e reescrevi pra rodar 100% local em PC modesto — mesmo resultado, custo zero de API. O que era exclusivo de quem tinha verba virou reproduzível por qualquer um.",
      iaQuote: "Se a IA é o coração do seu produto, ela não pode ser alugada de terceiro. Ela tem que ser sua.",
      iaPracticeLabel: "NA PRÁTICA",
      iaPoint1: "Modelo treinado no seu dado, não num genérico",
      iaPoint2: "Roda local — sem mensalidade de API, sem vazamento",
      iaPoint3: "Código e modelo são seus, do começo ao fim",
      iaPoint4: "Da prova de conceito ao deploy em produção",
      iaCta: "QUERO UMA IA AUTORAL",
      contactKicker: "// CONTATO", contactTitle: "Vamos construir algo",
      contactBody: "Tem um problema que envolve dado, IA ou automação e não sabe se é viável? Manda mesmo assim. Topo conversa sobre projeto freelance, colaboração ou só trocar ideia sobre o assunto. Respondo rápido.",
      downloadCv: "BAIXAR CV", footerNote: "FEITO NO ANO 2026 · Y2K",
      cat: { langs: "Linguagens", frameworks: "Frameworks", ai: "Dados & IA", db: "Banco de Dados", devops: "DevOps & Infra", tools: "Ferramentas", auto: "Automação", idiomas: "Idiomas" }
    },
    en: {
      navAbout: "About", navSoft: "Soft skills", navSkills: "Stack", navProjects: "Projects", navIa: "Owned AI", navContact: "Contact",
      heroRole: "AI ENGINEER × DATA SCIENTIST",
      heroTag: "I turn raw data into systems that learn, decide and scale.",
      heroCta: "VIEW PROJECTS", heroCta2: "CONTACT", scroll: "SCROLL TO EXPLORE",
      aboutKicker: "// ABOUT", aboutTitle: "Who is behind the keyboard",
      aboutBody1: "I'm Enzo — an AI engineer and data scientist, finishing Computer Engineering at UEMA. I work where data, model and product meet. In practice: I take a messy problem — a loose spreadsheet, a backlog of support tickets, fraud hidden in thousands of records — and hand back a system that collects, decides and runs on its own.",
      aboutBody2: "I do the whole path: from extraction to deploy, from monitoring to the interface. I love a hard problem, clean code and shipping things that work outside the demo.",
      aboutBody3: "If you've got data sitting idle instead of driving decisions, it can probably be solved.",
      statusTitle: "SYSTEM STATUS", statusRole: "AI Engineer / Data Scientist", statusLoc: "São Luís, Brazil — Remote, worldwide", statusAvail: "Open to projects",
      softKicker: "// SOFT SKILLS", softTitle: "Beyond the code", softNote: "How I work with people, product and problems.",
      skillsKicker: "// STACK", skillsTitle: "Technologies I use", skillsNote: "The tools I use to build, train and operate.",
      projectsKicker: "// PROJECTS", projectsTitle: "Selected work", projectsNote: "Real projects across AI, data, automation and web — each card sells the outcome, not the stack.",
      projClient: "CLIENT", projHow: "How it works", projContrib: "My contribution", projGallery: "View screenshots", projOne: "View image",
      iaKicker: "// OWNED AI", iaTitle: "Real AI. Yours, not rented.",
      iaBody1: "Today almost every \"AI solution\" on the market is the same thing underneath: a pipe wired to OpenAI's API. It works until the bill arrives, until the price changes, until the service goes down — and you never owned anything.",
      iaBody2: "I build the other kind. A model trained on your data, for your problem, running on your infra. From scratch or ported to local open-source — embeddings, NLP, pattern detection, agents that decide. No subscription to a tech giant, no black box, no needing the internet to think.",
      iaBody3: "I've made it count in practice: I took a research pipeline that only ran with paid APIs and heavy infra and rewrote it to run 100% locally on a modest PC — same result, zero API cost. What used to require a budget became reproducible by anyone.",
      iaQuote: "If AI is the heart of your product, it can't be rented from a third party. It has to be yours.",
      iaPracticeLabel: "IN PRACTICE",
      iaPoint1: "A model trained on your data, not a generic one",
      iaPoint2: "Runs locally — no API subscription, no data leaks",
      iaPoint3: "The code and the model are yours, end to end",
      iaPoint4: "From proof of concept to production deploy",
      iaCta: "I WANT MY OWN AI",
      contactKicker: "// CONTACT", contactTitle: "Let's build something",
      contactBody: "Got a problem involving data, AI or automation and not sure it's feasible? Send it anyway. I'm up for a freelance project, a collaboration, or just trading ideas on the topic. I reply fast.",
      downloadCv: "DOWNLOAD CV", footerNote: "BUILT IN THE YEAR 2026 · Y2K",
      cat: { langs: "Languages", frameworks: "Frameworks", ai: "Data & AI", db: "Databases", devops: "DevOps & Infra", tools: "Tools", auto: "Automation", idiomas: "Spoken" }
    }
  };

  /* ---------- icon resolver (Devicon + Simple Icons + fallback) ---------- */
  var DEVICON = {
    "Python": "python-plain", "JavaScript": "javascript-plain", "PHP": "php-plain", "Java": "java-plain",
    "Django": "django-plain", "Laravel": "laravel-original", "Spring Boot": "spring-original", "Springboot": "spring-original",
    "TailwindCSS": "tailwindcss-original", "Tailwind": "tailwindcss-original", "Vue": "vuejs-plain", "Angular": "angularjs-plain",
    "NumPy": "numpy-original", "PyTorch": "pytorch-original", "Selenium": "selenium-original",
    "MySQL": "mysql-original", "SQL Server": "microsoftsqlserver-plain", "PostgreSQL": "postgresql-plain",
    "Grafana": "grafana-original", "Elasticsearch": "elasticsearch-plain", "Apache": "apache-plain",
    "Git": "git-plain", "Docker": "docker-plain", "Jira": "jira-plain", "React": "react-original",
    "Docusaurus": "docusaurusio-plain", "HTML": "html5-plain", "CSS": "css3-plain", "Markdown": "markdown-original"
  };
  var SIMPLE = {
    "LangChain": "langchain", "Ollama": "ollama", "Pandas": "pandas", "Flask": "flask",
    "Supabase": "supabase", "Kibana": "kibana", "Kafka": "apachekafka", "Vercel": "vercel",
    "PySpark": "apachespark", "scikit-learn": "scikitlearn", "sentence-transformers": "huggingface",
    "FAISS": "meta", "HTMX": "htmx", "Chart.js": "chartdotjs"
  };

  function iconHTML(name) {
    if (DEVICON[name]) return '<i class="devicon-' + DEVICON[name] + ' colored" aria-hidden="true"></i>';
    if (SIMPLE[name]) return '<img src="https://cdn.simpleicons.org/' + SIMPLE[name] + '/dcefff" alt="" loading="lazy">';
    return '<span class="ico-star" aria-hidden="true">✦</span>';
  }

  /* ---------- skills (tech names are language-neutral) ---------- */
  var SKILLS = [
    { key: "langs", items: ["Python", "JavaScript", "PHP", "SQL", "Java"] },
    { key: "frameworks", items: ["Django", "Flask", "Laravel", "Spring Boot", "TailwindCSS", "Vue", "Angular"] },
    { key: "ai", items: ["Pandas", "NumPy", "PyTorch", "LangChain", "Ollama", "MediaPipe", "Selenium"] },
    { key: "db", items: ["MySQL", "SQL Server", "PostgreSQL", "Supabase"] },
    { key: "devops", items: ["Grafana", "Kibana", "Elasticsearch", "Kafka", "Apache", "SCRUM", "Kanban", "Ágil"] },
    { key: "tools", items: ["Git", "Docker", "Vercel", "Jira", "WeKan", "GLPI"] },
    { key: "auto", items: ["Selenium", "PyAutoGUI"] },
    { key: "idiomas", items: { pt: ["Português (Nativo)", "Inglês (C1)", "Espanhol (B2)", "Francês (A2)"], en: ["Portuguese (Native)", "English (C1)", "Spanish (B2)", "French (A2)"] } }
  ];

  /* ---------- soft skills ---------- */
  var SOFT = [
    { icon: "👑", pt: ["Liderança", "Liderei a equipe de estagiários no desenvolvimento de um sistema de automação interno na AGED/MA."], en: ["Leadership", "Led the intern team building an internal process-automation system at AGED/MA."] },
    { icon: "🌐", pt: ["Comunicação (Inglês C1)", "Colaboração diária com pesquisadores internacionais no projeto Neuroscape, majoritariamente em inglês."], en: ["Communication (English C1)", "Daily collaboration with international researchers on the Neuroscape project, mostly in English."] },
    { icon: "🤝", pt: ["Times multidisciplinares", "No TJ-MA, traduzi necessidades jurídicas em soluções de IA junto a equipes diversas."], en: ["Cross-functional teams", "At TJ-MA I turned legal needs into AI solutions alongside diverse teams."] },
    { icon: "🎯", pt: ["Foco no cliente", "Levantamento de requisitos e entrega contínua de melhorias diretamente com clientes freelance."], en: ["Client focus", "Requirement gathering and continuous delivery directly with freelance clients."] },
    { icon: "🧩", pt: ["Resolução de problemas", "Otimizei pipelines pesados de ML/LLM para rodarem localmente em máquinas comuns."], en: ["Problem solving", "Optimized heavy ML/LLM pipelines to run locally on ordinary machines."] },
    { icon: "🚀", pt: ["Aprendizado contínuo", "Do full-stack ao ML, LLMs e infraestrutura — sempre adaptando a stack ao problema."], en: ["Continuous learning", "From full-stack to ML, LLMs and infra — always adapting the stack to the problem."] }
  ];

  /* ---------- projects ---------- */
  // cover.kind: 'cover' (screenshot) | 'contain' (logo) | 'styled' (icons)
  // images: [paths] -> clicável, abre lightbox. icons: [names] -> capa estilizada.
  var IMG = "assets/img/projects/";
  var PROJECTS = [
    {
      cover: { kind: "cover" },
      images: [IMG + "apuracao-sobre.jpg", IMG + "apuracao-visualizacoes.jpg", IMG + "apuracao-resultados.jpg"],
      tags: ["Python", "sentence-transformers", "FAISS", "Ollama", "React"],
      pt: {
        client: "Agita Comunicação",
        title: "Apuração — Inteligência de Narrativas",
        problem: "A agência precisava saber o que a imprensa e as redes diziam sobre seus temas — e pescar a narrativa em ascensão antes de virar pauta na grande mídia.",
        how: "Construí uma plataforma que coleta de várias fontes, agrupa os textos por narrativa sozinha e entrega, em tempo real, o resumo, a tendência e o tom de cada debate. Tudo rodando local, sem API paga."
      },
      en: {
        client: "Agita Comunicação",
        title: "Apuração — Narrative Intelligence",
        problem: "The agency needed to know what the press and social media were saying about its topics — and catch the rising narrative before it hit mainstream media.",
        how: "I built a platform that pulls from multiple sources, groups texts by narrative on its own and delivers, in real time, the summary, the trend and the tone of each debate. All running locally, no paid API."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "locadora-dashboard.jpg", IMG + "locadora-locacoes.jpg", IMG + "locadora-veiculos.jpg", IMG + "locadora-multas.jpg"],
      tags: ["Django", "PostgreSQL", "Tailwind", "HTMX", "Chart.js"],
      pt: {
        client: "Locadora de veículos · freelance",
        title: "Loca Fácil — Gestão de Locadora",
        problem: "Uma locadora tocava frota, contratos e finanças em planilhas soltas — ninguém sabia o que vencia, o que tinha que voltar nem o que estava parado na oficina.",
        how: "Troquei a planilha por um sistema único: veículos, clientes, contratos, manutenção e multas num lugar só, com um painel que mostra vencimentos, revisões e o caixa do mês em tempo real."
      },
      en: {
        client: "Car-rental business · freelance",
        title: "Loca Fácil — Rental Management",
        problem: "A rental shop ran its fleet, contracts and finances on loose spreadsheets — nobody knew what was due, what had to come back or what was stuck in the shop.",
        how: "I swapped the spreadsheets for a single system: vehicles, clients, contracts, maintenance and fines in one place, with a dashboard showing due dates, services and the month's cash in real time."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "subfraudgmm.png"],
      tags: ["Python", "GMM", "PySpark", "NLP", "LLM"],
      pt: {
        client: "Pesquisa aplicada · auditoria de licitações",
        title: "SubFraudGMM — Detecção de Fraude",
        problem: "Fraude em licitação é rara, sem rótulo e escondida em meio a milhares de contratos legítimos — achar na mão é inviável.",
        how: "O sistema aprende como é um contrato normal e destaca os mais suspeitos pra auditoria, batendo os baselines do benchmark.",
        contribName: "Auditor Fiscal Sintético",
        contrib: "Uma camada de NLP que agrupa os registros sinalizados por semelhança e age como um auditor experiente — emite um parecer fundamentado, com veredito sobre os indícios de cada grupo."
      },
      en: {
        client: "Applied research · procurement auditing",
        title: "SubFraudGMM — Fraud Detection",
        problem: "Procurement fraud is rare, unlabeled and hidden among thousands of legitimate contracts — finding it by hand is unfeasible.",
        how: "The system learns what a normal contract looks like and flags the most suspicious ones for auditing, beating the benchmark baselines.",
        contribName: "Synthetic Fiscal Auditor",
        contrib: "An NLP layer that groups the flagged records by similarity and acts like an experienced auditor — issuing a reasoned opinion, with a verdict on each group's indicators."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "neuroscape.jpg", IMG + "neuroscape-dimensoes.jpg", IMG + "neuroscape-tendencia.jpg", IMG + "neuroscape-citacao.jpg", IMG + "neuroscape-periodicos.jpg"],
      tags: ["Python", "sentence-transformers", "Ollama", "LLM", "Colab"],
      pt: {
        client: "Open-source · pesquisa de Mario Senden",
        title: "Neuroscape — Mapeamento da Neurociência",
        problem: "O pipeline original mapeava a neurociência a partir de centenas de milhares de artigos, mas só rodava com API paga e infra pesada — quase ninguém conseguia reproduzir.",
        how: "O pipeline coleta, filtra e agrupa os artigos por semelhança e usa LLMs para caracterizar cada grupo, suas dimensões, tendências e citações — o mapa de como a área se organiza e evolui.",
        contribName: "Port para 100% open-source e local",
        contrib: "Troquei tudo por modelos open-source rodando local e adaptei pra Colab e PC modesto. Mesmo mapa, agora reproduzível por qualquer pesquisador — custo zero de API. Colaboração direta com o autor, em inglês."
      },
      en: {
        client: "Open-source · Mario Senden's research",
        title: "Neuroscape — Mapping Neuroscience",
        problem: "The original pipeline mapped neuroscience from hundreds of thousands of articles, but only ran with paid APIs and heavy infra — almost no one could reproduce it.",
        how: "The pipeline collects, filters and groups articles by similarity and uses LLMs to characterize each group, its dimensions, trends and citations — the map of how the field organizes and evolves.",
        contribName: "Port to 100% open-source and local",
        contrib: "I swapped everything for open-source models running locally and adapted it for Colab and a modest PC. Same map, now reproducible by any researcher — zero API cost. Direct collaboration with the author, in English."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "sigama-analysis.jpg", IMG + "sigama-cluster.jpg", IMG + "sigama-tendencia.jpg", IMG + "sigama-nuvem.jpg", IMG + "sigama-temas.jpg"],
      tags: ["Python", "Pandas", "Embeddings", "Clusterização", "LLM"],
      pt: {
        client: "AGED/MA · Defesa Agropecuária",
        title: "SIGAMA — Análise de Dados",
        problem: "A equipe do SIGAMA recebia centenas de chamados por mês sem enxergar o que mais doía nem onde o sistema falhava.",
        how: "Limpo e agrupo os chamados por assunto sozinho, expondo os focos de dor (cadastro, GTA, atualização), como evoluem no tempo e os padrões que viram melhoria no sistema."
      },
      en: {
        client: "AGED/MA · Agricultural Defense",
        title: "SIGAMA — Data Analysis",
        problem: "The SIGAMA team got hundreds of tickets a month with no view of what hurt most or where the system was failing.",
        how: "I clean and group the tickets by subject automatically, exposing the pain points (registration, GTA, data updates), how they evolve over time and the patterns that turn into system improvements."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "sigama-docs.jpg"],
      tags: ["Docusaurus", "React", "Markdown"],
      pt: {
        client: "AGED/MA · Defesa Agropecuária",
        title: "SIGAMA — Portal de Documentação",
        problem: "Os usuários do SIGAMA — produtor rural e agente de campo — não tinham material de como usar o sistema. Resultado: dúvida repetida e suporte abarrotado.",
        how: "Organizei um portal com manuais passo a passo de cada módulo — do cadastro do produtor à emissão de GTA e arrecadação — com busca e navegação por tema. A dúvida vira autoatendimento."
      },
      en: {
        client: "AGED/MA · Agricultural Defense",
        title: "SIGAMA — Documentation Portal",
        problem: "SIGAMA's users — rural producers and field agents — had no material on how to use the system. The result: repeated questions and an overloaded support desk.",
        how: "I organized a portal with step-by-step manuals for each module — from producer registration to GTA issuance and revenue — with search and topic navigation. Questions turn into self-service."
      }
    },
    {
      cover: { kind: "cover" },
      images: [IMG + "brisa.jpg"],
      tags: ["HTML", "Tailwind", "JavaScript"],
      pt: {
        client: "UEMA + BRISA · Residência em TIC",
        title: "Site BRISA — Landing Page",
        problem: "O programa de Residência em TIC precisava de cara própria na internet pra atrair e inscrever candidato, explicando o benefício sem rodeio.",
        how: "Entreguei uma landing page institucional e responsiva que apresenta o programa, os benefícios e os parceiros, com chamada direta pra inscrição."
      },
      en: {
        client: "UEMA + BRISA · ICT Residency",
        title: "BRISA Site — Landing Page",
        problem: "The ICT Residency program needed its own face online to attract and enroll candidates, spelling out the benefit without fluff.",
        how: "I delivered a responsive institutional landing page presenting the program, its benefits and partners, with a direct call to apply."
      }
    },
    {
      cover: { kind: "styled", icons: ["Python", "Selenium"] },
      tags: ["Python", "Selenium", "Automação"],
      pt: {
        client: "AGED/MA · Defesa Agropecuária",
        title: "SIGAMA — Automação de Processos",
        problem: "A equipe administrativa perdia horas em tarefa manual e repetitiva dentro do sistema — risco de erro e gente cara fazendo trabalho de robô.",
        how: "Um robô de software executa essas rotinas sozinho e devolve o tempo da equipe pro que exige cabeça humana. Liderei a equipe de estagiários nesse desenvolvimento."
      },
      en: {
        client: "AGED/MA · Agricultural Defense",
        title: "SIGAMA — Process Automation",
        problem: "The admin team lost hours on manual, repetitive tasks inside the system — error-prone, with expensive people doing a robot's job.",
        how: "A software robot runs those routines on its own and gives the team's time back for what needs a human mind. I led the intern team on this build."
      }
    }
  ];

  /* ---------- render ---------- */
  var lang = "pt";
  try { lang = localStorage.getItem("em_lang") || "pt"; } catch (e) {}
  if (lang !== "pt" && lang !== "en") lang = "pt";

  function pad(n) { return String(n).padStart(2, "0"); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  function renderText() {
    var t = STR[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] != null) el.textContent = t[k];
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
  }

  function renderSoft() {
    var grid = document.querySelector("[data-soft-grid]");
    grid.innerHTML = SOFT.map(function (s) {
      var d = s[lang];
      return '<div class="card soft-item reveal">' +
        '<div class="soft-icon">' + s.icon + "</div>" +
        '<h3 class="soft-name">' + d[0] + "</h3>" +
        '<p class="soft-desc">' + d[1] + "</p>" +
        "</div>";
    }).join("");
  }

  function renderSkills() {
    var t = STR[lang];
    var grid = document.querySelector("[data-skills-grid]");
    grid.innerHTML = SKILLS.map(function (c, i) {
      var items = Array.isArray(c.items) ? c.items : c.items[lang];
      var tags = items.map(function (it) {
        var ico = c.key === "idiomas" ? "" : iconHTML(it) + " ";
        return '<span class="skill-tag">' + ico + it + "</span>";
      }).join("");
      return '<div class="card skill-cat reveal">' +
        '<div class="skill-cat-head"><h3 class="skill-cat-label">' + (t.cat[c.key] || c.key) + "</h3>" +
        '<span class="skill-cat-num">' + pad(i + 1) + "</span></div>" +
        '<div class="skill-tags">' + tags + "</div></div>";
    }).join("");
  }

  function coverHTML(p, i) {
    var t = STR[lang], num = '<span class="project-num">' + pad(i + 1) + "</span>";
    if (p.cover.kind === "styled") {
      var icons = (p.cover.icons || []).map(iconHTML).join("");
      return '<div class="project-cover is-styled">' + num +
        '<span class="cover-icons">' + icons + "</span></div>";
    }
    var imgs = p.images || [];
    var hint = imgs.length > 1
      ? '<span class="cover-zoom">⤢ ' + t.projGallery + " (" + imgs.length + ")</span>"
      : '<span class="cover-zoom">⤢ ' + t.projOne + "</span>";
    return '<button type="button" class="project-cover is-cover" data-gallery="' + i + '" ' +
      'aria-label="' + esc(p[lang].title) + '">' + num +
      '<img src="' + imgs[0] + '" alt="' + esc(p[lang].title) + '" loading="lazy">' +
      hint + "</button>";
  }

  function renderProjects() {
    var t = STR[lang];
    var grid = document.querySelector("[data-projects-grid]");
    grid.innerHTML = PROJECTS.map(function (p, i) {
      var d = p[lang];
      var tags = p.tags.map(function (tg) { return '<span class="project-tag">' + tg + "</span>"; }).join("");
      var action = (p.images && p.images.length)
        ? '<button type="button" class="project-link" data-gallery="' + i + '">' + t.projGallery + " →</button>"
        : "";
      var contrib = d.contrib
        ? '<p class="project-contrib"><span class="contrib-label">★ ' + t.projContrib +
          (d.contribName ? ' · ' + esc(d.contribName) : "") + "</span> " + d.contrib + "</p>"
        : "";
      return '<div class="card project reveal">' +
        coverHTML(p, i) +
        '<div class="project-body"><span class="project-spark">✦</span>' +
        '<p class="project-client">' + t.projClient + ' · ' + esc(d.client) + "</p>" +
        '<h3 class="project-title">' + d.title + "</h3>" +
        '<p class="project-desc">' + d.problem + "</p>" +
        '<p class="project-how"><span class="how-label">' + t.projHow + "</span> " + d.how + "</p>" +
        contrib +
        '<div class="project-tags">' + tags + "</div>" +
        action +
        "</div></div>";
    }).join("");
    grid.querySelectorAll("[data-gallery]").forEach(function (el) {
      el.addEventListener("click", function () { openLightbox(parseInt(el.getAttribute("data-gallery"), 10)); });
    });
  }

  /* ---------- lightbox ---------- */
  var lb = { idx: 0, imgs: [], el: null, imgEl: null, capEl: null };

  function buildLightbox() {
    if (lb.el) return;
    var o = document.createElement("div");
    o.className = "lightbox";
    o.setAttribute("aria-hidden", "true");
    o.innerHTML =
      '<div class="lb-backdrop" data-lb-close></div>' +
      '<div class="lb-stage">' +
      '<button class="lb-btn lb-close" data-lb-close aria-label="Fechar">✕</button>' +
      '<button class="lb-btn lb-prev" data-lb-prev aria-label="Anterior">‹</button>' +
      '<img class="lb-img" alt="">' +
      '<button class="lb-btn lb-next" data-lb-next aria-label="Próxima">›</button>' +
      '<div class="lb-cap"></div>' +
      "</div>";
    document.body.appendChild(o);
    lb.el = o;
    lb.imgEl = o.querySelector(".lb-img");
    lb.capEl = o.querySelector(".lb-cap");
    o.querySelectorAll("[data-lb-close]").forEach(function (b) { b.addEventListener("click", closeLightbox); });
    o.querySelector("[data-lb-prev]").addEventListener("click", function () { step(-1); });
    o.querySelector("[data-lb-next]").addEventListener("click", function () { step(1); });
    document.addEventListener("keydown", function (e) {
      if (!lb.el.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }

  function showLb() {
    lb.imgEl.src = lb.imgs[lb.idx];
    var single = lb.imgs.length < 2;
    lb.capEl.textContent = single ? "" : (lb.idx + 1) + " / " + lb.imgs.length;
    lb.el.querySelector(".lb-prev").style.display = single ? "none" : "";
    lb.el.querySelector(".lb-next").style.display = single ? "none" : "";
  }
  function step(dir) { lb.idx = (lb.idx + dir + lb.imgs.length) % lb.imgs.length; showLb(); }

  function openLightbox(projIdx) {
    var p = PROJECTS[projIdx];
    if (!p || !p.images || !p.images.length) return;
    buildLightbox();
    lb.imgs = p.images; lb.idx = 0;
    showLb();
    lb.el.classList.add("is-open");
    lb.el.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-lock");
  }
  function closeLightbox() {
    if (!lb.el) return;
    lb.el.classList.remove("is-open");
    lb.el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-lock");
  }

  function renderAll() {
    renderText();
    renderSoft();
    renderSkills();
    renderProjects();
    observeReveals();
  }

  /* ---------- effects ---------- */
  var io = null;
  function observeReveals() {
    var els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  function starfield() {
    var sf = document.querySelector("[data-stars]");
    if (!sf || sf.childElementCount) return;
    for (var i = 0; i < 46; i++) {
      var sz = 4 + Math.random() * 10;
      var d = document.createElement("div");
      d.className = "star";
      d.style.cssText = "left:" + (Math.random() * 100) + "%;top:" + (Math.random() * 100) + "%;width:" +
        sz + "px;height:" + sz + "px;animation:em-twinkle " + (2.4 + Math.random() * 4) + "s ease-in-out " +
        (Math.random() * 4) + "s infinite;";
      sf.appendChild(d);
    }
  }

  function parallax() {
    var deco = document.querySelector("[data-deco]");
    if (!deco) return;
    window.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5), y = (e.clientY / window.innerHeight - 0.5);
      deco.style.transform = "translateY(-50%) translate3d(" + (x * -26) + "px," + (y * -20) + "px,0)";
    });
  }

  function sparkle() {
    var layer = document.querySelector("[data-cursor]");
    if (!layer) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var lastX = 0, lastY = 0, tick = 0;
    window.addEventListener("mousemove", function (e) {
      var dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (dx * dx + dy * dy < 240) return;
      lastX = e.clientX; lastY = e.clientY; tick++;
      if (tick % 2 !== 0) return;
      var sz = 7 + Math.random() * 12;
      var s = document.createElement("div");
      s.className = "sparkle";
      s.style.cssText = "left:" + e.clientX + "px;top:" + e.clientY + "px;width:" + sz + "px;height:" + sz +
        "px;margin:" + (-sz / 2) + "px 0 0 " + (-sz / 2) + "px;";
      layer.appendChild(s);
      s.animate([
        { transform: "scale(.2) rotate(0deg)", opacity: 0 },
        { transform: "scale(1) rotate(50deg)", opacity: 1, offset: .3 },
        { transform: "scale(.1) rotate(110deg)", opacity: 0 }
      ], { duration: 680, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = function () { s.remove(); };
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    starfield();
    parallax();
    sparkle();
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang");
        try { localStorage.setItem("em_lang", lang); } catch (e) {}
        renderAll();
      });
    });
  });
})();
