# maldinni.github.io

Portfólio pessoal de **Enzo Maldinni** — AI Engineer × Data Scientist.

🔗 **Online:** https://maldinni.github.io

Site estático (HTML/CSS/JS puro, sem build) com tema *Y2K Kingdom Hearts*, bilíngue
(PT/EN) e ícones de tecnologia (Devicon / Simple Icons).

Cada projeto traz **cliente, problema, como funciona e stack**, ilustrado com
**prints reais da interface** (Apuração, Loca Fácil, SIGAMA docs, Site BRISA) ou
**plots dos resultados** (SubFraudGMM, análise de chamados do SIGAMA). Os cards **não
linkam para os repositórios** — clicar na capa abre as imagens em um *lightbox*.

## Estrutura
```
.
├─ index.html              # página
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js           # dados (i18n, skills, soft-skills, projetos) + efeitos
│  └─ img/projects/        # prints da interface (.jpg) + plots dos resultados (.png)
├─ Curriculo-Enzo-Maldinni.pdf
└─ .nojekyll
```

## Rodar localmente
```bash
python -m http.server 8000
# abrir http://localhost:8000
```

## Editar conteúdo
Skills, soft-skills e projetos ficam em `assets/js/main.js` (arrays `SKILLS`, `SOFT`,
`PROJECTS`) com textos em PT e EN. Ícones novos: adicione ao mapa `DEVICON` ou `SIMPLE`.

Cada projeto em `PROJECTS` tem `client`, `title`, `problem` e `how` (PT/EN) mais:
- `images: [...]` → capa clicável que abre o *lightbox* (1ª imagem é a capa);
- `cover.kind: "styled"` + `icons: [...]` → capa de ícones para projetos sem imagem.
