// ═══════════════════════════════════════════════════════════
//  CRÔNICAS DO DESTINO v3 — ENGINE
//  Sistema de estado, reputação, memória de NPCs, save/load
// ═══════════════════════════════════════════════════════════

const Engine = (() => {

  // ── Estado global do jogo ──────────────────────────────
  let G = {};

  function fresh(heroName, heroClass, genre) {
    return {
      heroName,
      heroClass,          // 'guerreiro' | 'mago' | 'diplomata' | 'ladino'
      genre,
      scene: 0,
      chapter: 1,         // capítulos agrupam 5 cenas cada

      stats: classStats(heroClass),

      // Reputação: -100 (vilão puro) a +100 (herói puro)
      // Valores intermediários geram finais únicos
      reputation: 0,
      reputationLabel: 'Desconhecido',

      // Memória de NPCs: chave = id do NPC, valor = 'aliado'|'inimigo'|'neutro'|'morto'|'grato'
      npcs: {},

      // Flags de decisões importantes (afetam cenas futuras)
      flags: {},

      inventory: [],
      gold: 10,
      history: [],        // {scene, choice, outcome, statDelta}
      done: false,
    };
  }

  function classStats(cls) {
    const base = { hp: 100, mp: 30, str: 30, kar: 30, lck: 20 };
    const bonus = {
      guerreiro: { str: 25, hp: 20, mp: -10 },
      mago:      { mp: 35, str: -10, hp: -10 },
      diplomata: { kar: 30, lck: 15, hp: -5 },
      ladino:    { lck: 25, str: 10, kar: 5, hp: -5 },
    }[cls] || {};
    const s = { ...base };
    for (const k in bonus) s[k] = Math.max(5, (s[k]||0) + bonus[k]);
    return s;
  }

  // ── Reputação ──────────────────────────────────────────
  const REP_LABELS = [
    { min: 80,  label: 'Lendário',   color: '#f0d070' },
    { min: 50,  label: 'Herói',      color: '#6dbf9e' },
    { min: 20,  label: 'Honrado',    color: '#85c1e9' },
    { min: -20, label: 'Neutro',     color: '#aaa' },
    { min: -50, label: 'Suspeito',   color: '#e59866' },
    { min: -80, label: 'Temido',     color: '#e07070' },
    { min: -999,label: 'Infame',     color: '#c0392b' },
  ];

  function updateRepLabel() {
    const r = G.reputation;
    const found = REP_LABELS.find(x => r >= x.min);
    G.reputationLabel = found ? found.label : 'Neutro';
    G.reputationColor = found ? found.color : '#aaa';
  }

  function changeRep(delta) {
    G.reputation = Math.max(-100, Math.min(100, G.reputation + delta));
    updateRepLabel();
  }

  // ── Stats ──────────────────────────────────────────────
  function applyStats(sc) {
    if (!sc) return {};
    const before = { ...G.stats };
    const s = G.stats;
    s.hp  = Math.min(150, Math.max(0,   s.hp  + (sc.hp  || 0)));
    s.mp  = Math.min(150, Math.max(0,   s.mp  + (sc.mp  || 0)));
    s.str = Math.min(150, Math.max(1,   s.str + (sc.str || 0)));
    s.kar = Math.min(150, Math.max(1,   s.kar + (sc.kar || 0)));
    s.lck = Math.min(150, Math.max(1,   s.lck + (sc.lck || 0)));
    // delta for display
    const delta = {};
    for (const k of ['hp','mp','str','kar','lck']) {
      const d = s[k] - before[k];
      if (d !== 0) delta[k] = d;
    }
    return delta;
  }

  function addGold(amount) {
    G.gold = Math.max(0, G.gold + amount);
  }

  // ── NPC ────────────────────────────────────────────────
  function setNPC(id, status) { G.npcs[id] = status; }
  function getNPC(id)         { return G.npcs[id] || 'neutro'; }
  function npcIs(id, status)  { return G.npcs[id] === status; }

  // ── Flags ──────────────────────────────────────────────
  function setFlag(key, val)  { G.flags[key] = val; }
  function getFlag(key)       { return G.flags[key]; }
  function hasFlag(key)       { return !!G.flags[key]; }

  // ── Inventory ──────────────────────────────────────────
  function addItem(item) {
    if (item && !G.inventory.includes(item)) G.inventory.push(item);
  }
  function hasItem(item) { return G.inventory.includes(item); }
  function removeItem(item) {
    const i = G.inventory.indexOf(item);
    if (i !== -1) G.inventory.splice(i, 1);
  }

  // ── History ────────────────────────────────────────────
  function recordChoice(sceneIdx, choiceText, outcome, delta) {
    G.history.push({
      scene: sceneIdx, choice: choiceText,
      outcome, delta: delta || {}
    });
  }

  // ── Chapter ────────────────────────────────────────────
  function updateChapter() {
    G.chapter = Math.floor(G.scene / 5) + 1;
  }

  // ── Save / Load ────────────────────────────────────────
  const SAVE_KEY = 'cronicas_v3_save';
  const GAL_KEY  = 'cronicas_v3_gallery';

  function save()    { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G)); return true; } catch(e){ return false; } }
  function load()    { try { const r=localStorage.getItem(SAVE_KEY); return r?JSON.parse(r):null; } catch(e){return null;} }
  function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch(e){} }
  function hasSave() { return !!localStorage.getItem(SAVE_KEY); }

  // ── Gallery ────────────────────────────────────────────
  function getGallery() { try{return JSON.parse(localStorage.getItem(GAL_KEY)||'[]');}catch{return [];} }
  function addToGallery(ending) {
    const gal = getGallery();
    if (!gal.find(g => g.endingId === ending.id && g.genre === G.genre)) {
      gal.push({
        endingId: ending.id, title: ending.title, type: ending.type,
        emoji: ending.emoji, color: ending.color,
        heroName: G.heroName, heroClass: G.heroClass,
        genre: G.genre, reputation: G.reputation,
        reputationLabel: G.reputationLabel,
        date: new Date().toLocaleDateString('pt-BR')
      });
      try { localStorage.setItem(GAL_KEY, JSON.stringify(gal)); } catch(e){}
    }
  }

  // ── Resolve ending ────────────────────────────────────
  function resolveEnding(endings, priority) {
    const s = G.stats;
    const r = G.reputation;
    for (const id of priority) {
      const e = endings.find(x => x.id === id);
      if (e && e.cond(s, r, G.flags, G.npcs)) return e;
    }
    return endings.find(e => e.id === 'viajante') || endings[endings.length-1];
  }

  // ── Public API ─────────────────────────────────────────
  return {
    get state() { return G; },
    init(heroName, heroClass, genre) { G = fresh(heroName, heroClass, genre); updateRepLabel(); },
    restore(saved) { G = saved; updateRepLabel(); },
    applyStats, changeRep, addGold,
    setNPC, getNPC, npcIs,
    setFlag, getFlag, hasFlag,
    addItem, hasItem, removeItem,
    recordChoice, updateChapter,
    save, load, clearSave, hasSave,
    getGallery, addToGallery,
    resolveEnding,
    REP_LABELS,
    classStats,
  };
})();
