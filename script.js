/* =====================================================================
   PORTFÓLIO EM FORMA DE MENU DE JOGO
   ---------------------------------------------------------------------
   Tudo o que você precisa editar está no objeto DATA logo abaixo.
   (nome, textos, projetos, habilidades e contatos)
   ===================================================================== */

const DATA = {
  nome: 'Pedro Rangel',
  titulo: 'Desenvolvedor em Aprendizado',
  frase: 'Bem-vindo ao meu espaço. Fique à vontade para olhar ao redor...',

  // Música de fundo: coloque o arquivo na mesma pasta do site (ex: 'musica.mp3').
  // Deixe src vazio ('') para desativar. volume vai de 0 a 1.
  musica: { src: 'menutheme.mp3', volume: 0.3 },

  sobre: {
    foto: 'pedrorangelpfp.jpeg', // coloque o caminho de uma imagem, ex: 'foto.png'. Vazio = ícone padrão.
    stats: [
      ['CLASSE', 'Desenvolvedor'],
      ['NÍVEL', '??'],
      ['LOCAL', 'Belo Horizonte, MG'],
      ['MISSÃO', 'Aprender mais criando coisas divertidas!'],
    ],
    barras: [
      ['FOCO', 8],
      ['CRIATIVIDADE', 9],
      ['ENERGIA', 8],
    ],
    // cada item vira uma "fala" no diálogo (aperte CONTINUAR para passar)
    texto: [
      'Oi! Eu sou o Pedro Rangel. Gosto de transformar ideias em código.',
      'Estou sempre estudando: Programação e tudo que envolve criar programas e jogos.',
      'Fora do computador, gosto de jogos que contam histórias de um jeito diferente e amo música.',
    ],

    // ---- seção "MAIS SOBRE MIM" (aparece abaixo, na página Sobre) ----
    // Cada item do array "bio" vira um parágrafo. Escreva o que quiser!
    bio: [
      'Atualmente sou estudando do Colégio/Faculdade COTEMIG - Barroca, estou no 3° ano do ensino médio e amo a área de TI.',
      'Nasci em Salvador - BA e vim para Minas Gerais bem pequeno, desde cedo sempre fui chegado em Computadores e na Internet.',
      'Sempre gostei de resolver problemas e ajudar os outros de maneiras divertidas e descobri minha paixão por técnologia no primeiro ano do ensino médio no Cotemig.',
    ],
    // Imagens com descrição. "src" é o caminho da imagem (ex: 'fotos/show.jpg').
    // Deixe src vazio para mostrar uma caixa de espaço reservado. Pode adicionar quantas quiser.
    galeria: [
      { src: 'cotemiglogo.png', legenda: 'Ensino Médio Cursado' },
      { src: 'palestrasummit.png', legenda: 'Palestra no Minas Summit 2025' },
      { src: 'certificadocisco.png', legenda: 'Certificado da Cisco em Hardware Básico' },
    ],
  },

  projetos: [
    {
      nome: 'Sindex',
      desc: 'Organizador de arquivos inteligente com IA. Ajuda a separar e arrumar pastas bagunçadas automaticamente.',
      tags: ['Python', 'Flask', 'IA'],
      link: 'https://github.com/Sindex-Projeto/Projeto-Sindex-Finalizado',
    },
    {
      nome: 'Idle Project Moon',
      desc: 'Jogo idle/clicker ambientado no universo da Project Moon.',
      tags: ['Jogo', 'Idle', 'Web'],
      link: 'https://github.com/PerdsRangel/Project-Moon-Clicker',
    },
    {
      nome: 'Bot para Discord',
      desc: 'Um Bot feito para moderação de scams no Discord, lê imagens e bane usuários caso encontre scams.',
      tags: ['Python'],
      link: 'https://github.com/PerdsRangel/DiscordBot',
    },
    {
      nome: 'Sistema de Pesagem',
      desc: 'Um sistema de pesagem para a impressora Elgin I9 a pedido da empresa Brascom Digital.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      link: 'https://github.com/PerdsRangel/sistema-pesagem',
    },
    {
      nome: 'Este Portfólio',
      desc: 'Um menu feito em HTML, CSS e JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'Você já está aqui!',
    },
  ],

  // nivel de 1 a 10. cat = categoria da habilidade (cria os grupos na lista; pode inventar outras)
  habilidades: [
    { nome: 'HTML', cat: 'Tecnicas', nivel: 8, desc: 'Estrutura de páginas.' },
    { nome: 'CSS', cat: 'Tecnicas', nivel: 7, desc: 'Layouts, animações e identidade visual das páginas.' },
    { nome: 'JavaScript', cat: 'Tecnicas', nivel: 6, desc: 'Interatividade e lógica das páginas.' },
    { nome: 'Python', cat: 'Tecnicas', nivel: 7, desc: 'Automação, scripts e back-end.' },
    { nome: 'Flask', cat: 'Tecnicas', nivel: 6, desc: 'Criação de aplicações web e APIs em Python.' },
    { nome: 'Git', cat: 'Tecnicas', nivel: 7, desc: 'Trabalho em projetos e Controle de versões.' },
    { nome: 'Hardware', cat: 'Tecnicas', nivel: 5, desc: 'Conhecimento das peças e manuntenção de computadores.' },
    { nome: 'Inglês', cat: 'Tecnicas', nivel: 9, desc: 'Conhecimento da lingua inglesa.' },
    { nome: 'Adaptabilidade', cat: 'Pessoais', nivel: 8, desc: 'Me adapto fácil e sempre dou um jeito de facilitar as coisas.' },
    { nome: 'Proatividade', cat: 'Pessoais', nivel: 8, desc: 'Sou empolgado trabalhando com oque gosto.' },
    { nome: 'Criatividade', cat: 'Pessoais', nivel: 8, desc: 'Penso em ideias criativas para resolver problemas.' },
    { nome: 'Paciência', cat: 'Pessoais', nivel: 7, desc: 'Sou muito paciênte com problemas diversos.' },
    { nome: 'Comunicação', cat: 'Pessoais', nivel: 7, desc: 'Me comunico bem e sou um bom seguidor de regras.' },
  ],

  // acao: 'email' copia o texto; 'link' abre o endereço em outra aba
  contatos: [
    { nome: 'E-MAIL', valor: 'pedrorangelmmdev@gmail.com', acao: 'email' },
    { nome: 'GITHUB', valor: 'https://github.com/PerdsRangel', acao: 'link', href: 'https://github.com/PerdsRangel' },
    { nome: 'LINKEDIN', valor: 'https://www.linkedin.com/in/pedro-rangel-b69184336/', acao: 'link', href: 'https://www.linkedin.com/in/pedro-rangel-b69184336/' },
    { nome: 'INSTAGRAM', valor: '@perdsdf', acao: 'link', href: 'https://www.instagram.com/perdsdf/' },
  ],

  fraseFinal: 'Obrigado por passar por aqui. Até a próxima!',
};

/* =====================================================================
   A PARTIR DAQUI É O "MOTOR" DO SITE
   ===================================================================== */

const THEMES = ['branco', 'preto'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let current = 0;
let items = [];
let active = 0;
let typer = null;
let muted = false;
let audioCtx = null;
let toastTimer = null;

const $main = document.getElementById('screen');
const $tabs = document.getElementById('tabs');
const $toast = document.getElementById('toast');

/* ---------- utilidades ---------- */
function h(tag, props = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  kids.flat().forEach((kid) => {
    if (kid != null && kid !== false) el.append(kid);
  });
  return el;
}

function bar(nivel, total = 10) {
  return h('span', { class: 'bar', 'aria-label': `nível ${nivel} de ${total}` },
    Array.from({ length: total }, (_, i) => h('i', { class: i < nivel ? 'on' : '' })));
}

function safeStorage(op, key, value) {
  try {
    return op === 'get' ? localStorage.getItem(key) : localStorage.setItem(key, value);
  } catch { return null; }
}

/* ---------- som (beeps de 8 bits, sem arquivos) ---------- */
function beep(freq = 660, dur = 0.06, vol = 0.05, type = 'square') {
  if (muted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + dur);
  } catch { /* sem áudio, tudo bem */ }
}

function toggleMute() {
  muted = !muted;
  document.getElementById('mute').textContent = `SOM: ${muted ? 'OFF' : 'ON'}`;
  safeStorage('set', 'portfolio-muted', muted ? '1' : '0');
  beep(880, 0.08);
}

/* ---------- música de fundo ---------- */
let music = null;
let musicOn = true;
let musicStarted = false;

function setMusicLabel() {
  const b = document.getElementById('music');
  if (b) b.textContent = `MÚSICA: ${musicOn ? 'ON' : 'OFF'}`;
}

function fadeMusic(target, ms = 1500) {
  if (!music) return;
  const from = music.volume;
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / ms, 1);
    music.volume = Math.max(0, Math.min(1, from + (target - from) * p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function playMusic() {
  if (!music || !musicOn) return Promise.resolve(false);
  const alvo = DATA.musica.volume ?? 0.3;
  music.volume = 0;
  return music.play().then(() => {
    musicStarted = true;
    fadeMusic(alvo);
    return true;
  }).catch(() => false);
}

function toggleMusic() {
  if (!music) return;
  musicOn = !musicOn;
  safeStorage('set', 'portfolio-music', musicOn ? '1' : '0');
  setMusicLabel();
  if (musicOn) playMusic(); else music.pause();
  beep(musicOn ? 784 : 392, 0.08);
}

function initMusic() {
  const cfg = DATA.musica;
  if (!cfg || !cfg.src) return;

  music = new Audio(cfg.src);
  music.loop = true;
  music.preload = 'auto';
  musicOn = safeStorage('get', 'portfolio-music') !== '0';

  const btn = h('button', { id: 'music', class: 'tab', type: 'button', title: 'Música (N)', onclick: toggleMusic });
  document.querySelector('.tools').prepend(btn);
  setMusicLabel();

  // se o arquivo não existir, esconde o botão e segue sem música
  music.addEventListener('error', () => { btn.remove(); music = null; });

  // navegadores só liberam áudio depois de um clique/tecla: tenta no primeiro gesto
  const unlock = () => {
    playMusic().then((ok) => {
      if (ok) ['pointerdown', 'keydown'].forEach((ev) => window.removeEventListener(ev, unlock));
    });
  };
  ['pointerdown', 'keydown'].forEach((ev) => window.addEventListener(ev, unlock));

  // pausa quando a aba fica em segundo plano
  document.addEventListener('visibilitychange', () => {
    if (!music || !musicStarted) return;
    if (document.hidden) music.pause();
    else if (musicOn) playMusic();
  });
}

/* ---------- conquistas ---------- */
const CONQUISTAS = [
  { id: 'inicio', nome: 'PRIMEIRO PASSO', desc: 'Começou a explorar o portfólio.' },
  { id: 'explorador', nome: 'EXPLORADOR', desc: 'Visitou todas as telas.' },
  { id: 'leitor', nome: 'BOM OUVINTE', desc: 'Leu todas as falas da página Sobre.' },
  { id: 'curioso', nome: 'CURIOSO', desc: 'Viu os detalhes de todos os projetos.' },
  { id: 'estudioso', nome: 'ESTUDIOSO', desc: 'Conferiu todas as habilidades.' },
  { id: 'gato', nome: 'AMIGO DOS GATOS', desc: 'Fez o gato miar.' },
  { id: 'estiloso', nome: 'ESTILOSO', desc: 'Trocou o tema do site.' },
  { id: 'conectado', nome: 'CONECTADO', desc: 'Usou um dos contatos.' },
  { id: 'completista', nome: 'COMPLETISTA', desc: 'Desbloqueou todas as conquistas.' },
];

const desbloqueadas = new Set();
try {
  JSON.parse(safeStorage('get', 'portfolio-conquistas') || '[]')
    .filter((id) => CONQUISTAS.some((c) => c.id === id))
    .forEach((id) => desbloqueadas.add(id));
} catch { /* sem progresso salvo */ }

// o que o visitante já viu nesta visita
const progresso = { telas: new Set(), falas: new Set(), projetos: new Set(), habilidades: new Set() };

function unlock(id) {
  if (desbloqueadas.has(id)) return;
  const c = CONQUISTAS.find((x) => x.id === id);
  if (!c) return;
  desbloqueadas.add(id);
  safeStorage('set', 'portfolio-conquistas', JSON.stringify([...desbloqueadas]));
  mostrarConquista(c);
  const todas = CONQUISTAS.filter((x) => x.id !== 'completista').every((x) => desbloqueadas.has(x.id));
  if (todas) setTimeout(() => unlock('completista'), 1200);
}

function mostrarConquista(c) {
  let cont = document.getElementById('conquistas');
  if (!cont) {
    cont = h('div', { id: 'conquistas', 'aria-live': 'polite' });
    document.body.append(cont);
  }
  const card = h('div', { class: 'box conquista' },
    h('span', { class: 'estrela' }, '★'),
    h('div', {}, h('small', {}, 'CONQUISTA DESBLOQUEADA'), h('strong', {}, c.nome)));
  cont.append(card);
  [784, 988, 1318].forEach((f, n) => setTimeout(() => beep(f, 0.1, 0.05), n * 110));
  setTimeout(() => card.classList.add('saindo'), 3800);
  setTimeout(() => card.remove(), 4150);
}

/* ---------- menu de pausa (ESC) ---------- */
let pauseOpen = false;
let pauseView = 'menu'; // 'menu' ou 'conquistas'
let pItems = [];
let pActive = 0;

function setPauseActive(i, focus = true, silent = false) {
  if (!pItems.length) return;
  i = (i + pItems.length) % pItems.length;
  const mudou = i !== pActive;
  pActive = i;
  pItems.forEach((b, n) => b.classList.toggle('active', n === i));
  if (focus) pItems[i].focus();
  if (mudou && !silent) beep(520 + i * 40, 0.04);
}

function openPause() {
  if (pauseOpen || introActive) return;
  pauseOpen = true;
  pauseView = 'menu';
  pActive = 0;
  beep(440, 0.08);
  const el = h('div', { id: 'pausa', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Menu de pausa' });
  el.addEventListener('pointerdown', (e) => { if (e.target === el) closePause(); });
  document.body.append(el);
  renderPause();
}

function closePause() {
  document.getElementById('pausa')?.remove();
  pauseOpen = false;
  pItems = [];
  if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
  beep(330, 0.08);
}

function renderPause() {
  const el = document.getElementById('pausa');
  if (!el) return;
  pItems = [];
  const total = CONQUISTAS.length;

  const mk = (label, extra, acao) => {
    const b = makeItem(label, extra);
    b.addEventListener('mouseenter', () => setPauseActive(pItems.indexOf(b), false));
    b.addEventListener('click', () => { setPauseActive(pItems.indexOf(b), false, true); beep(990, 0.08); acao(b); });
    pItems.push(b);
    return b;
  };

  let conteudo;
  if (pauseView === 'menu') {
    conteudo = h('div', { class: 'box menu-pausa' },
      h('h2', {}, 'PAUSA'),
      mk('CONTINUAR', null, () => closePause()),
      mk('SOM', muted ? 'OFF' : 'ON', () => { toggleMute(); renderPause(); }),
      music ? mk('MÚSICA', musicOn ? 'ON' : 'OFF', () => { toggleMusic(); renderPause(); }) : null,
      mk('TEMA', (document.documentElement.dataset.theme || '').toUpperCase(), (b) => nextTheme(b)),
      mk('CONQUISTAS', `${desbloqueadas.size}/${total}`, () => { pauseView = 'conquistas'; pActive = 0; renderPause(); }),
      mk('VOLTAR AO INÍCIO', null, () => { closePause(); go(0); }));
  } else {
    const linhas = CONQUISTAS.map((c) => {
      const feita = desbloqueadas.has(c.id);
      return h('li', { class: feita ? 'feita' : '' },
        h('span', { class: 'marca' }, feita ? '★' : '☆'),
        h('span', {}, h('strong', {}, c.nome), h('small', {}, c.desc)));
    });
    conteudo = h('div', { class: 'box menu-pausa largo' },
      h('h2', {}, `CONQUISTAS ${desbloqueadas.size}/${total}`),
      h('ul', { class: 'lista-conq' }, linhas),
      mk('◀ VOLTAR', null, () => { pauseView = 'menu'; pActive = 0; renderPause(); }));
  }

  el.replaceChildren(conteudo);
  setPauseActive(Math.min(pActive, pItems.length - 1), true, true);
}

function handlePauseKey(e) {
  const k = e.key;
  if (k === 'Escape') {
    e.preventDefault();
    if (pauseView === 'conquistas') { pauseView = 'menu'; pActive = 0; renderPause(); }
    else closePause();
  } else if (k === 'ArrowDown' || k === 'ArrowUp') {
    e.preventDefault();
    setPauseActive(pActive + (k === 'ArrowDown' ? 1 : -1), true);
  } else if (k === 'Enter' || k === ' ') {
    if (pItems.includes(document.activeElement)) return; // o botão já dispara o clique sozinho
    e.preventDefault();
    pItems[pActive]?.click();
  }
}

/* ---------- tela inicial "PRESSIONE QUALQUER TECLA" ---------- */
let introActive = false;
let introStart = null;

function showIntro(onDone) {
  introActive = true;
  const el = h('div', { id: 'intro', role: 'dialog', 'aria-label': 'Tela inicial' },
    h('p', { class: 'kicker' }, '— PORTFÓLIO —'),
    h('h1', { class: 'title' }, DATA.nome, ' ', blackCat()),
    h('p', { class: 'subtitle' }, DATA.titulo),
    h('div', { class: 'box start' }, h('span', { class: 'piscando' }, 'PRESSIONE QUALQUER TECLA')),
    h('p', { class: 'nota' }, 'ou toque na tela · com som ♪'));

  introStart = () => {
    if (!introActive) return;
    introActive = false;
    try { sessionStorage.setItem('portfolio-intro', '1'); } catch { /* ok */ }
    beep(784, 0.1);
    setTimeout(() => beep(1046, 0.14), 90);
    el.classList.add('saindo');
    setTimeout(() => el.remove(), 550);
    onDone();
  };
  el.addEventListener('pointerdown', introStart);
  document.body.append(el);
}

/* ---------- tema ---------- */
function applyTheme(name) {
  if (!THEMES.includes(name)) name = THEMES[0];
  document.documentElement.dataset.theme = name;
  document.getElementById('theme').textContent = `TEMA: ${name.toUpperCase()}`;
  safeStorage('set', 'portfolio-theme', name);
  if (pauseOpen) renderPause(); // atualiza o nome do tema no menu de pausa
}

/* troca de tema: um círculo do novo tema se expande a partir do botão */
function nextTheme(origem) {
  const i = THEMES.indexOf(document.documentElement.dataset.theme);
  const proximo = THEMES[(i + 1) % THEMES.length];
  [330, 494, 659].forEach((f, n) => setTimeout(() => beep(f, 0.09, 0.05), n * 70));

  const el = origem instanceof Element ? origem : document.getElementById('theme');
  if (!document.startViewTransition || reduceMotion || !el) {
    applyTheme(proximo);
  } else {
    const r = el.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const raio = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(() => applyTheme(proximo));
    t.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${raio}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.3,.7,.2,1)', pseudoElement: '::view-transition-new(root)' });
    }).catch(() => {});
  }
  unlock('estiloso');
}

/* ---------- efeito de digitação ---------- */
function typeInto(el, text) {
  clearInterval(typer);
  if (reduceMotion) { el.textContent = text; return; }
  let i = 0;
  el.textContent = '';
  typer = setInterval(() => {
    i++;
    el.textContent = text.slice(0, i);
    if (i % 3 === 0) beep(300 + (i % 5) * 40, 0.02, 0.012);
    if (i >= text.length) clearInterval(typer);
  }, 28);
}

/* ---------- aviso rápido ---------- */
function toast(msg) {
  $toast.textContent = msg;
  $toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $toast.hidden = true; }, 2200);
}

/* ---------- itens navegáveis ---------- */
function setActive(i, focus = true, silent = false) {
  if (!items.length) return;
  i = (i + items.length) % items.length;
  const changed = i !== active;
  active = i;
  items.forEach((b, n) => b.classList.toggle('active', n === i));
  items[i]._focus?.();
  if (focus) items[i].focus();
  if (changed && !silent) beep(520 + i * 40, 0.04);
}

function makeItem(label, extra) {
  return h('button', { class: 'item', type: 'button' }, label, extra ? h('span', { class: 'extra' }, extra) : null);
}

/* lista à esquerda + detalhes à direita */
function listDetail(rows, makeDetail, onSelect) {
  const detail = h('div', { class: 'box detail', 'aria-live': 'polite' });
  let grupoAtual = null;
  const kids = [];
  rows.forEach((r) => {
    // se a linha tem "grupo", mostra um título quando o grupo muda
    if (r.grupo && r.grupo !== grupoAtual) {
      grupoAtual = r.grupo;
      kids.push(h('div', { class: 'grupo' }, r.grupo));
    }
    const b = makeItem(r.nome, r.extra);
    b._focus = () => detail.replaceChildren(...makeDetail(r));
    b._select = () => onSelect(r);
    kids.push(b);
  });
  const list = h('div', { class: 'box list' }, kids);
  return h('section', { class: 'split' }, list, detail);
}

/* =====================================================================
   TELAS
   ===================================================================== */

/* ---------- desenhos SVG ---------- */
function svg(tag, attrs = {}, ...kids) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  kids.forEach((kid) => el.append(kid));
  return el;
}

/* miado em bipes de 8 bits */
function meow() {
  beep(620, 0.09, 0.06, 'triangle');
  setTimeout(() => beep(880, 0.12, 0.06, 'triangle'), 90);
  setTimeout(() => beep(540, 0.18, 0.05, 'triangle'), 210);
}

/* clicar no gato: ele pula, mia e solta um "miau!" */
function catClick(e) {
  if (introActive) return;
  const cat = e.currentTarget;
  meow();
  unlock('gato');
  cat.classList.remove('pulo');
  void cat.getBoundingClientRect();
  cat.classList.add('pulo');
  setTimeout(() => cat.classList.remove('pulo'), 400);

  const parent = cat.parentElement;
  const pr = parent.getBoundingClientRect();
  const cr = cat.getBoundingClientRect();
  const balao = h('span', { class: 'miau', 'aria-hidden': 'true' }, 'miau!');
  balao.style.left = (cr.right - pr.left) + 'px';
  balao.style.top = (cr.top - pr.top - 6) + 'px';
  parent.append(balao);
  setTimeout(() => balao.remove(), 950);
}

/* gato preto sentado, com contorno que se adapta ao tema */
function blackCat() {
  const preto = '#0b0b0b';
  const contorno = 'stroke:var(--fg);stroke-linejoin:round;';
  const tail = 'M12 15 Q17 15 16 9';
  const cat = svg('svg', { class: 'cat', viewBox: '-2 0 20 18', role: 'img', 'aria-label': 'Gato preto (clique para ouvir um miado)' },
    // rabo (contorno + miolo preto)
    svg('g', { class: 'tail' },
      svg('path', { d: tail, fill: 'none', style: 'stroke:var(--fg);stroke-width:2.6;stroke-linecap:round' }),
      svg('path', { d: tail, fill: 'none', style: `stroke:${preto};stroke-width:1.4;stroke-linecap:round` })),
    // corpo
    svg('path', { d: 'M4 10 L12 10 L13 16.5 Q13 17 12.5 17 L3.5 17 Q3 17 3 16.5 Z', fill: preto, style: contorno + 'stroke-width:.7' }),
    // cabeça com orelhas
    svg('path', { d: 'M2.6 8 L3 1 L6 4 L10 4 L13 1 L13.4 8 Q13.4 10.4 11 10.4 L5 10.4 Q2.6 10.4 2.6 8 Z', fill: preto, style: contorno + 'stroke-width:.7' }),
    // olhos amarelos: piscam sozinhos, e a pupila segue o mouse
    svg('g', { class: 'olho' },
      svg('ellipse', { cx: 6.2, cy: 7, rx: 1, ry: 1.3, fill: '#f5d442' }),
      svg('rect', { class: 'pupila', x: 6, y: 5.8, width: 0.4, height: 2.4, fill: preto })),
    svg('g', { class: 'olho' },
      svg('ellipse', { cx: 9.8, cy: 7, rx: 1, ry: 1.3, fill: '#f5d442' }),
      svg('rect', { class: 'pupila', x: 9.6, y: 5.8, width: 0.4, height: 2.4, fill: preto })),
    // focinho e bigodes
    svg('path', { d: 'M7.4 8.7 L8.6 8.7 L8 9.4 Z', fill: '#e8899a' }),
    svg('path', { d: 'M2.6 8.2 L0 7.6 M2.6 9.2 L0 9.8 M13.4 8.2 L16 7.6 M13.4 9.2 L16 9.8', fill: 'none', style: 'stroke:var(--fg);stroke-width:.35' }));
  cat.addEventListener('click', catClick);
  return cat;
}

/* seção abaixo da página Sobre: texto livre + galeria de imagens */
function renderMoreAbout() {
  const s = DATA.sobre;
  const bio = h('div', { class: 'box bio' },
    h('h2', {}, 'MAIS SOBRE MIM'),
    (s.bio || []).map((t) => h('p', {}, t)));

  const fotos = (s.galeria || []).map((g) => h('figure', {},
    g.src
      ? h('img', { class: 'foto', src: g.src, alt: g.legenda || '', loading: 'lazy' })
      : h('div', { class: 'foto vazio' }, 'SUA IMAGEM AQUI'),
    g.legenda ? h('figcaption', {}, g.legenda) : null));

  return h('section', { class: 'more' },
    bio,
    fotos.length ? h('div', { class: 'box' }, h('h2', {}, 'GALERIA'), h('div', { class: 'gallery' }, fotos)) : null);
}

function renderHome() {
  const typed = h('p');
  const destinos = [
    ['COMEÇAR', 1],
    ['PROJETOS', 2],
    ['HABILIDADES', 3],
    ['CONTATO', 4],
  ];
  const menu = h('div', { class: 'box menu' }, destinos.map(([label, idx]) => {
    const b = makeItem(label);
    b._select = () => go(idx);
    return b;
  }));
  typeInto(typed, DATA.frase);

  return h('div', { class: 'screen home' },
    h('p', { class: 'kicker' }, '— PORTFÓLIO —'),
    h('h1', { class: 'title' }, DATA.nome, ' ', blackCat()),
    h('p', { class: 'subtitle' }, DATA.titulo),
    menu,
    h('div', { class: 'box dialog' }, typed));
}

function avatar() {
  if (DATA.sobre.foto) return h('img', { src: DATA.sobre.foto, alt: `Foto de ${DATA.nome}` });
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('shape-rendering', 'crispEdges');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Avatar');
  const rects = [
    [5, 2, 6, 1, ''], [4, 3, 8, 1, ''], [3, 4, 10, 9, ''], [4, 13, 8, 1, ''], [5, 14, 6, 1, ''],
    [5, 7, 2, 2, 'eye'], [9, 7, 2, 2, 'eye'], [6, 11, 4, 1, 'eye'],
  ];
  rects.forEach(([x, y, w, hh, kind]) => {
    const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r.setAttribute('x', x); r.setAttribute('y', y);
    r.setAttribute('width', w); r.setAttribute('height', hh);
    if (kind === 'eye') r.setAttribute('fill', 'var(--soft)');
    svg.append(r);
  });
  return svg;
}

function renderAbout() {
  const s = DATA.sobre;
  const typed = h('p');
  let fala = 0;
  typeInto(typed, s.texto[0]);
  progresso.falas.add(0);
  if (progresso.falas.size >= s.texto.length) unlock('leitor');

  const next = makeItem('CONTINUAR');
  next._select = () => {
    fala = (fala + 1) % s.texto.length;
    typeInto(typed, s.texto[fala]);
    progresso.falas.add(fala);
    if (progresso.falas.size >= s.texto.length) unlock('leitor');
  };

  const stats = h('div', { class: 'box stats' },
    h('h2', {}, 'STATUS'),
    h('dl', {}, s.stats.map(([k, v]) =>
      h('div', { class: 'row' }, h('dt', {}, k), h('dd', {}, v)))),
    s.barras.map(([k, v]) => h('div', { class: 'meter' }, h('span', {}, k), bar(v))));

  const portrait = h('div', { class: 'box portrait' },
    avatar(),
    h('p', { class: 'nome' }, DATA.nome));

  return h('div', { class: 'screen' },
    h('section', { class: 'split about' }, portrait, stats),
    h('div', { class: 'box dialog' }, typed, h('div', { class: 'list' }, next)),
    renderMoreAbout());
}

function renderProjects() {
  const rows = DATA.projetos.map((p, i) => ({ ...p, extra: String(i + 1).padStart(2, '0') }));
  const split = listDetail(rows, (p) => {
    progresso.projetos.add(p.nome);
    if (progresso.projetos.size >= DATA.projetos.length) unlock('curioso');
    return [
      h('h3', {}, p.nome),
      h('p', {}, p.desc),
      h('ul', { class: 'tags' }, p.tags.map((t) => h('li', {}, t))),
      p.link ? h('a', { class: 'btn', href: p.link, target: '_blank', rel: 'noopener' }, 'ABRIR ▶') : null,
    ];
  }, (p) => {
    if (p.link) window.open(p.link, '_blank', 'noopener');
    else toast('Link ainda não configurado.');
  });
  return h('div', { class: 'screen' }, split);
}

function renderSkills() {
  // agrupa por categoria, mantendo a ordem em que aparecem em DATA.habilidades
  const cats = [...new Set(DATA.habilidades.map((s) => s.cat || 'Outras'))];
  const rows = cats.flatMap((c) => DATA.habilidades
    .filter((s) => (s.cat || 'Outras') === c)
    .map((s) => ({ ...s, grupo: c.toUpperCase(), extra: `LV ${s.nivel}` })));
  const split = listDetail(rows, (s) => {
    progresso.habilidades.add(s.nome);
    if (progresso.habilidades.size >= DATA.habilidades.length) unlock('estudioso');
    return [
      h('h3', {}, s.nome),
      h('p', { class: 'categoria' }, s.grupo),
      bar(s.nivel),
      h('p', {}, s.desc),
    ];
  }, (s) => toast(`${s.nome}: nível ${s.nivel}/10`));
  return h('div', { class: 'screen' }, split);
}

function renderContact() {
  const rows = DATA.contatos;
  const split = listDetail(rows, (c) => [
    h('h3', {}, c.nome),
    h('p', {}, c.valor),
    h('p', { style: 'opacity:.6' }, c.acao === 'email' ? 'ENTER para copiar' : 'ENTER para abrir'),
  ], (c) => {
    unlock('conectado');
    if (c.acao === 'email') {
      const done = () => toast('E-mail copiado!');
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(c.valor).then(done).catch(() => toast(c.valor));
      else toast(c.valor);
    } else if (c.href) {
      window.open(c.href, '_blank', 'noopener');
    } else {
      toast('Link ainda não configurado.');
    }
  });
  const fim = h('div', { class: 'box dialog' }, h('p', {}, DATA.fraseFinal));
  return h('div', { class: 'screen' }, split, fim);
}

const SCREENS = [
  { id: 'inicio', label: 'INÍCIO', render: renderHome },
  { id: 'sobre', label: 'SOBRE', render: renderAbout },
  { id: 'projetos', label: 'PROJETOS', render: renderProjects },
  { id: 'habilidades', label: 'HABILIDADES', render: renderSkills },
  { id: 'contato', label: 'CONTATO', render: renderContact },
];

/* =====================================================================
   NAVEGAÇÃO
   ===================================================================== */

function go(i, silent = false) {
  i = (i + SCREENS.length) % SCREENS.length;
  clearInterval(typer);
  current = i;
  [...$tabs.children].forEach((t, n) => t.setAttribute('aria-selected', n === i ? 'true' : 'false'));

  $main.replaceChildren(SCREENS[i].render());
  items = [...$main.querySelectorAll('.item')];
  items.forEach((b, n) => {
    b.addEventListener('mouseenter', () => setActive(n, false));
    b.addEventListener('focus', () => setActive(n, false));
    b.addEventListener('click', () => { setActive(n, false, true); beep(990, 0.08); b._select?.(); });
  });
  active = -1;
  setActive(0, false, true);

  history.replaceState(null, '', '#' + SCREENS[i].id);
  document.title = `${SCREENS[i].label} · ${DATA.nome}`;
  if (!silent) beep(i === 0 ? 392 : 784, 0.1);
  progresso.telas.add(i);
  unlock('inicio');
  if (progresso.telas.size >= SCREENS.length) unlock('explorador');
  window.scrollTo(0, 0);
}

function buildTabs() {
  SCREENS.forEach((s, i) => {
    $tabs.append(h('button', {
      class: 'tab', type: 'button', role: 'tab', 'aria-selected': 'false',
      onclick: () => go(i),
    }, `${i + 1} ${s.label}`));
  });
}

function buildParticles() {
  if (reduceMotion) return;
  const box = document.getElementById('particles');
  const simbolos = ['✦', '♥', '✿', '·', '✧'];
  for (let n = 0; n < 18; n++) {
    const s = h('span', {}, simbolos[n % simbolos.length]);
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = 14 + Math.random() * 22 + 'px';
    s.style.animationDuration = 12 + Math.random() * 18 + 's';
    s.style.animationDelay = -Math.random() * 25 + 's';
    s.style.setProperty('--sway', (Math.random() * 120 - 60) + 'px');
    box.append(s);
  }
}

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key;

  // na tela inicial, qualquer tecla (menos Tab, Shift e F1–F12) começa
  if (introActive) {
    if (k === 'Tab' || k === 'Shift' || /^F\d+$/.test(k)) return;
    e.preventDefault();
    introStart?.();
    return;
  }

  // com o menu de pausa aberto, só ele recebe as teclas
  if (pauseOpen) {
    handlePauseKey(e);
    return;
  }

  if (k === 'ArrowDown' || k === 'ArrowUp') {
    if (items.length < 2) return; // com 1 item só, deixa as setas rolarem a página
    e.preventDefault();
    setActive(active + (k === 'ArrowDown' ? 1 : -1), true);
  } else if (k === 'ArrowRight') {
    go(current + 1);
  } else if (k === 'ArrowLeft') {
    go(current - 1);
  } else if (k === 'Escape') {
    openPause();
  } else if (/^[1-5]$/.test(k)) {
    go(Number(k) - 1);
  } else if (k === 'm' || k === 'M') {
    toggleMute();
  } else if (k === 'n' || k === 'N') {
    toggleMusic();
  } else if (k === 't' || k === 'T') {
    nextTheme();
  } else if (k === 'Enter' || k === ' ') {
    const el = document.activeElement;
    if (el && el.tagName === 'BUTTON') return; // o botão já dispara o clique sozinho
    e.preventDefault();
    items[active]?.click();
  }
});

/* os olhos do gato seguem o mouse */
if (!reduceMotion) {
  window.addEventListener('pointermove', (e) => {
    document.querySelectorAll('.cat').forEach((cat) => {
      const r = cat.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height * 0.4);
      const d = Math.hypot(dx, dy) || 1;
      const f = Math.min(d / 150, 1); // perto do gato, os olhos mexem menos
      const x = (dx / d) * 0.5 * f;
      const y = (dy / d) * 0.35 * f;
      cat.querySelectorAll('.pupila').forEach((p) => { p.style.transform = `translate(${x}px, ${y}px)`; });
    });
  });
}

/* ---------- início ---------- */
document.getElementById('mute').addEventListener('click', toggleMute);
document.getElementById('theme').addEventListener('click', nextTheme);

muted = safeStorage('get', 'portfolio-muted') === '1';
document.getElementById('mute').textContent = `SOM: ${muted ? 'OFF' : 'ON'}`;
applyTheme(safeStorage('get', 'portfolio-theme') || THEMES[0]);

// botão PAUSA (para quem não tem tecla ESC, como no celular) e dica do rodapé
document.querySelector('.tools')?.append(
  h('button', { id: 'pausa-btn', class: 'tab', type: 'button', title: 'Pausa (ESC)', onclick: () => openPause() }, 'PAUSA'));
document.querySelector('.hint')?.replaceChildren(
  ...['← → telas', '↑ ↓ escolher', 'ENTER confirmar', 'ESC pausa'].map((t) => h('span', {}, t)));

buildTabs();
initMusic();
buildParticles();

const inicial = SCREENS.findIndex((s) => '#' + s.id === location.hash);
const primeira = inicial >= 0 ? inicial : 0;
let introVista = false;
try { introVista = sessionStorage.getItem('portfolio-intro') === '1'; } catch { /* ok */ }

// A tela inicial aparece na primeira visita da sessão (ou ao abrir direto na página Início)
if (primeira === 0 && !introVista) showIntro(() => go(0));
else go(primeira, true);