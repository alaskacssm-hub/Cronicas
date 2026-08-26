// ═══════════════════════════════════════════════════════════
//  CRÔNICAS DO DESTINO v3 — ASCII ART ENGINE
//  Arte ASCII colorida via spans HTML para cada cenário/cena
// ═══════════════════════════════════════════════════════════

const AsciiArt = (() => {

  // Paletas por cenário
  const PALETTES = {
    fantasia:  { sky:'#1a237e', mtn:'#4a148c', land:'#1b5e20', accent:'#f9a825', glow:'#ce93d8' },
    cyberpunk: { sky:'#0d0d0d', mtn:'#1a1a2e', land:'#0d1b2a', accent:'#00e5ff', glow:'#e040fb' },
    horror:    { sky:'#1a0a00', mtn:'#3e0000', land:'#1a0a00', accent:'#b71c1c', glow:'#4a148c' },
    western:   { sky:'#bf360c', mtn:'#795548', land:'#e65100', accent:'#ffd54f', glow:'#ff8f00' },
  };

  // Helpers
  function c(text, color) {
    return `<span style="color:${color}">${text}</span>`;
  }
  function b(text, color) {
    return `<span style="color:${color};font-weight:bold">${text}</span>`;
  }

  // ── FANTASIA ──────────────────────────────────────────
  const FANTASIA_SCENES = {
    default: (p) => [
      c('        ★  ·  ✦  ·  ★  ·  ✦  ·  ★        ',p.glow),
      c('   ·  ✦                              ✦  ·   ',p.sky),
      b('  /\\      /\\    /\\      /\\    /\\      /\\  ',p.mtn),
      b(' /  \\    /  \\  /  \\    /  \\  /  \\    /  \\ ',p.mtn),
      b('/    \\  /    \\/    \\  /    \\/    \\  /    \\',p.mtn),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓ ⚔  REINO DE VALDRUN  🛡  ▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    city: (p) => [
      c('  ★  ·  ✦  ·  ★  ·  ✦  · [LUA] ·  ✦  ·  ',p.glow),
      c('  ·   ·    ·    ·   ·    ·    ·    ·   ·  ',p.sky),
      b('    |‾‾|  |‾‾‾‾‾|  |‾|  |‾‾‾‾‾‾‾‾‾|     ',p.accent),
      b('    |  |  | ███ |  | |  | ⚑ KAEL ⚑ |     ',p.accent),
      b('  __|  |__|     |__|_|__|           |__   ',p.mtn),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓  Portão da Cidade · Guardas em alerta  ▓▓▓',p.land),
    ],
    forest: (p) => [
      c('  ✦  ·  ★  ·  ✦  ·  ★  ·  ✦  ·  ★  ·  ✦ ',p.glow),
      b('  🌲   🌲 🌲     🌲  🌲     🌲 🌲   🌲   ',p.land),
      b(' /|\\  /|\\ /|\\   /|\\  /|\\   /|\\ /|\\  /|\\ ',p.land),
      c('  |    |   |     |    |     |   |    |    ',p.mtn),
      c('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   ',p.accent),
      c('▓▓▓▓▓▓ Floresta dos Sussurros ▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    ruins: (p) => [
      c('  ·  ✦  ·    ·  ✦  ·    ·  ✦  ·    ·    ',p.glow),
      b('   _   _  _ _ _   _  _ _  _   _  _ _    ',p.mtn),
      b('  |_| |_||_|_|_| |_||_|_||_| |_||_|_|   ',p.mtn),
      b('  | | | ||_|_|_| | ||_|_|| | | ||_|_|   ',p.mtn),
      c('   ‾   ‾  ‾‾‾‾‾   ‾  ‾‾‾  ‾   ‾  ‾‾‾   ',p.mtn),
      c('▓▓▓▓▓▓▓▓ Ruínas de Arveth ▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    swamp: (p) => [
      c('  · · ✦ · · ✦ · · ✦ · · ✦ · · ✦ · · ✦ ·',p.glow),
      c('   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~ ',p.accent),
      b(' 🌿  🌿    🌿  🌿    🌿  🌿    🌿  🌿   ',p.land),
      c('  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  ',p.accent),
      c('   ~ ~ Pântano dos Perdidos ~ ~   ~ ~    ',p.accent),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    castle: (p) => [
      c('  ✦ · ★ · ✦ · ★ · ✦ · ★ · ✦ · ★ · ✦   ',p.glow),
      b('        |‾‾‾|  ⚑  |‾‾‾|  ⚑  |‾‾‾|      ',p.accent),
      b('      __|   |_____|   |_____|   |__      ',p.mtn),
      b('     |  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾  |     ',p.mtn),
      b('     |    CIDADELA DE FOGO 🔥      |     ',p.mtn),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    throne: (p) => [
      b('  🔥     🔥     🔥     🔥     🔥     🔥 ',p.accent),
      b('  |       |     |       |     |       |  ',p.accent),
      b('  ||‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾||  ',p.mtn),
      b('  ||        SALÃO DO TRONO          ||  ',p.mtn),
      b('  ||    👁  MALACHAR  DESPERTA  👁   ||  ',p.glow),
      b('  ||________________________________||  ',p.mtn),
      c('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
  };

  // ── CYBERPUNK ─────────────────────────────────────────
  const CYBERPUNK_SCENES = {
    default: (p) => [
      c('  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ',p.sky),
      b('  |‾‾‾‾|  |‾‾‾‾‾‾|  |‾|  |‾‾‾‾‾‾‾‾‾|  ',p.glow),
      b('  | ░░ |  | █ ░░ |  |░|  | NEO-CITY|  ',p.glow),
      b('  |    |  |      |  | |  |         |  ',p.accent),
      c('  ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ ',p.accent),
      c('  ▓▓▓▓ NEO-VALDRUN 2087 · AXIOM CORP ▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    alley: (p) => [
      c('  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ',p.sky),
      c('  ▌  AXIOM  ▐ ░░░░░░░ ▌  AXIOM  ▐ ░░░ ',p.glow),
      b('  |  |‾‾‾|  |░░░░░░░░|  |‾‾‾|  |░░░░ ',p.mtn),
      b('  |  |   |  |░ BECO ░|  |   |  |░░░░ ',p.mtn),
      c('  ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ ',p.accent),
      c('  ░ Setor 9 · Zona Cinza · 23:47 ░░░░░ ',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    market: (p) => [
      c('  ░ ▓ MERCADO NEGRO ▓ · ▓ SYN ▓ · ░░░ ',p.glow),
      b('  [IMPL.] [DADOS] [ARMAS] [ID-FAKE] ░░ ',p.accent),
      b('  ░░|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|░░ ',p.mtn),
      b('  ░░|  🔌 IMPLANTES   💾 DADOS   |░░ ',p.mtn),
      c('  ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ ',p.accent),
      c('  ░░ Zona Subterrânea · Acesso Ilegal ░',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    server: (p) => [
      c('  ████████████████████████████████████ ',p.sky),
      b('  ██ [SERVER-01] ██ [SERVER-02] ██░░░░ ',p.glow),
      b('  ██ ░░░░░░░░░░░ ██ ░░░░░░░░░░░ ██░░░ ',p.mtn),
      b('  ██ AXIOM CORE  ██ ÉDEN.EXE ⚠  ██░░░ ',p.accent),
      c('  ██████████████████████████████████░░ ',p.mtn),
      c('  ░ ACESSO RESTRITO · NÍVEL 9 · ⚠ ░░░ ',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    tower: (p) => [
      c('  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ',p.sky),
      b('              |‾‾‾‾‾‾‾‾‾‾‾|            ',p.glow),
      b('              | AXIOM HQ  |            ',p.glow),
      b('         _____|           |_____       ',p.mtn),
      b('        |  ░░░░░░░░░░░░░░░░░░  |      ',p.mtn),
      c('  ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ ',p.accent),
      c('  ▓ Torre Central · 99 Andares ▓▓▓▓▓▓▓',p.land),
    ],
  };

  // ── HORROR ────────────────────────────────────────────
  const HORROR_SCENES = {
    default: (p) => [
      c('  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  · ',p.glow),
      b('         🌑   VELMOOR   🌑              ',p.glow),
      b('        /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\\          ',p.mtn),
      b('       |  ▓▓  ____  ____  ▓▓  |        ',p.mtn),
      b('       |  ▓▓ |    ||    | ▓▓  |        ',p.mtn),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓ MANSÃO VELMOOR ▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    entrance: (p) => [
      c('  · · · · · · · · · · · · · · · · · ·  ',p.glow),
      b('   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾    ',p.mtn),
      b('  |  ║║║     ENTRADA      ║║║  |       ',p.mtn),
      b('  |  ╔═╗  ┌──────────┐  ╔═╗  |       ',p.accent),
      b('  |  ║ ║  │  ESPELHO │  ║ ║  |       ',p.accent),
      c('  ▓▓▓▓▓▓▓▓▓▓▓ Hall de Entrada ▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    library: (p) => [
      c('  · · · · · · · · · · · · · · · · · ·  ',p.glow),
      b('  📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚  ',p.accent),
      b('  ║‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾║  ',p.mtn),
      b('  ║   BIBLIOTECA · TOMO PROIBIDO   ║  ',p.mtn),
      b('  ║         📖  ????  📖           ║  ',p.glow),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓ Ala Leste ▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    mirrors: (p) => [
      c('  · · · · · · · · · · · · · · · · · ·  ',p.glow),
      b('  ╔══╗  ╔══╗  ╔══╗  ╔══╗  ╔══╗  ╔══╗ ',p.accent),
      b('  ║你║  ║你║  ║你║  ║你║  ║你║  ║你║ ',p.glow),
      b('  ╚══╝  ╚══╝  ╚══╝  ╚══╝  ╚══╝  ╚══╝ ',p.accent),
      c('       SALÃO DOS ESPELHOS · ∞          ',p.glow),
      c('  ▓▓▓▓▓▓▓▓▓▓▓ Reflexos Infinitos ▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    basement: (p) => [
      c('  · · · · · · · · · · · · · · · · · ·  ',p.glow),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      b('  ░░░░░░░░░░░░ PORÃO ░░░░░░░░░░░░░░░░  ',p.mtn),
      b('  ░  ⛓  ⛓  ⛓  ⛓  ⛓  ⛓  ⛓  ⛓  ⛓  ░ ',p.accent),
      b('  ░░░░░░░ O ARQUITETO ESPERA ░░░░░░░░  ',p.glow),
      c('  ▓▓▓▓▓▓▓▓▓▓▓ Nível -1 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    heart: (p) => [
      c('  · · · · · · · · · · · · · · · · · ·  ',p.glow),
      b('          👁              👁            ',p.accent),
      b('    ╔══════════════════════════╗       ',p.mtn),
      b('    ║   CORAÇÃO DE VELMOOR    ║       ',p.mtn),
      b('    ║      ∞  ∞  ∞  ∞  ∞     ║       ',p.glow),
      b('    ╚══════════════════════════╝       ',p.mtn),
      c('  ▓▓▓▓▓▓▓▓▓▓ Centro da Maldição ▓▓▓▓▓▓',p.land),
    ],
  };

  // ── WESTERN ───────────────────────────────────────────
  const WESTERN_SCENES = {
    default: (p) => [
      c('  ☀  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ☀ ',p.accent),
      b('   ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~    ',p.sky),
      b('        🌵    🌵      🌵    🌵          ',p.land),
      b('  ___________________________________ ',p.mtn),
      b(' |    DUSTHAVEN  ·  1882  ·  OESTE   |',p.mtn),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    station: (p) => [
      c('  ☀ · · · · · · · · · · · · · · · · ☀ ',p.accent),
      b('   ════════════════════════════════    ',p.mtn),
      b('  |   🚂  DUSTHAVEN STATION  🚂   |   ',p.mtn),
      b('  |   ________________________   |   ',p.glow),
      b('  |  |  CHEGADA 11:00  ⚑ HARROW |  |   ',p.accent),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓ Plataforma 1 ▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    saloon: (p) => [
      c('  ☀ · · · · · · · · · · · · · · · · ☀ ',p.accent),
      b('        ╔══════════════════╗           ',p.mtn),
      b('        ║  🍺 CAVALO MANCO 🍺  ║       ',p.mtn),
      b('        ║  SALOON · POKER  ║           ',p.glow),
      b('        ╚══════════════════╝           ',p.mtn),
      c('  ▓▓▓▓▓▓▓▓▓▓ Rua Principal ▓▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    desert: (p) => [
      c('  ☀ · · · · · · · · · · · · · · · · ☀ ',p.accent),
      b('  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ',p.sky),
      b('     🌵         🌵    🌵         🌵    ',p.land),
      b('  ___________________________________________',p.mtn),
      c('           DESERTO SEM LEI                 ',p.glow),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
    duel: (p) => [
      c('        ☀                   ☀          ',p.accent),
      b('  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  · ',p.sky),
      b('   ⚡                            ⚡    ',p.glow),
      b('  [VOCÊ]  · · · · · · · · ·  [DECKER]  ',p.mtn),
      b('    🤠                            🤠   ',p.accent),
      c('  ▓▓▓▓▓▓▓▓▓▓ DUELO AO PÔR DO SOL ▓▓▓▓▓',p.land),
      c('  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',p.land),
    ],
  };

  // ── Mapeamento cenário → arte ──────────────────────────
  const SCENE_MAP = {
    fantasia: {
      0:'city', 1:'city', 2:'city', 3:'forest', 4:'forest',
      5:'ruins', 6:'ruins', 7:'swamp', 8:'swamp', 9:'swamp',
      10:'castle', 11:'castle', 12:'castle', 13:'throne', 14:'throne',
      15:'throne', 16:'castle', 17:'throne', 18:'throne', 19:'throne',
    },
    cyberpunk: {
      0:'alley', 1:'alley', 2:'market', 3:'market', 4:'market',
      5:'server', 6:'server', 7:'server', 8:'tower', 9:'tower',
      10:'tower', 11:'server', 12:'tower', 13:'tower', 14:'tower',
      15:'server', 16:'tower', 17:'tower', 18:'tower', 19:'tower',
    },
    horror: {
      0:'entrance', 1:'entrance', 2:'library', 3:'library', 4:'library',
      5:'mirrors', 6:'mirrors', 7:'basement', 8:'basement', 9:'basement',
      10:'heart', 11:'heart', 12:'heart', 13:'mirrors', 14:'heart',
      15:'heart', 16:'heart', 17:'heart', 18:'heart', 19:'heart',
    },
    western: {
      0:'station', 1:'station', 2:'saloon', 3:'saloon', 4:'saloon',
      5:'desert', 6:'desert', 7:'desert', 8:'duel', 9:'duel',
      10:'duel', 11:'saloon', 12:'duel', 13:'duel', 14:'duel',
      15:'saloon', 16:'duel', 17:'duel', 18:'duel', 19:'duel',
    },
  };

  const SCENE_PACKS = { fantasia: FANTASIA_SCENES, cyberpunk: CYBERPUNK_SCENES, horror: HORROR_SCENES, western: WESTERN_SCENES };

  function render(genre, sceneIndex) {
    const p = PALETTES[genre] || PALETTES.fantasia;
    const pack = SCENE_PACKS[genre] || SCENE_PACKS.fantasia;
    const key = (SCENE_MAP[genre] || {})[sceneIndex] || 'default';
    const fn = pack[key] || pack['default'];
    return fn ? fn(p).join('\n') : '';
  }

  return { render, PALETTES };
})();
