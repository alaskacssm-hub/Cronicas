# 🐉 Crônicas do Destino — v3.0
### RPG de texto profundo · Offline · 20 cenas · 22 finais · NPCs com memória

---

## 🚀 Como jogar

Abra `index.html` no navegador. **Zero instalação. Zero internet. Zero API.**

---

## O que há de novo na v3

| Feature | v2 | v3 |
|---|---|---|
| Cenas por cenário | 8 | **20** |
| Profundidade narrativa | Básica | **Cinematográfica** |
| Sistema de reputação | ❌ | **✅ -100 a +100** |
| NPCs com memória | ❌ | **✅ Reagem ao seu histórico** |
| Classes de personagem | ❌ | **✅ 4 classes** |
| Subtexto nas escolhas | ❌ | **✅ Cada escolha tem motivação** |
| Texto do final personalizado | Genérico | **✅ Usa seu nome e flags** |
| Arte ASCII colorida | Básica | **✅ Por cena e cenário** |
| Capítulos | ❌ | **✅ 4 capítulos por cenário** |
| Ouro | ❌ | **✅ Sistema de economia** |
| Atributo Sorte | ❌ | **✅ 5º atributo** |
| Histórico de decisões no final | ❌ | **✅ Completo** |

---

## As 4 Classes

| Classe | Bônus | Estilo |
|---|---|---|
| ⚔️ Guerreiro | +25 Força, +20 Vida, -10 Magia | Combate direto, caminho de sangue |
| 🔮 Mago | +35 Magia, -10 Força, -10 Vida | Soluções elegantes, conhecimento |
| ⚜️ Diplomata | +30 Carisma, +15 Sorte, -5 Vida | Persuasão, alianças, reputação |
| 🗡️ Ladino | +25 Sorte, +10 Força, +5 Carisma, -5 Vida | Flexível, oportunista |

---

## Sistema de Reputação

A reputação vai de **-100** (Infame) a **+100** (Lendário):

| Valor | Label | Efeito |
|---|---|---|
| 80+ | Lendário | NPCs confiam imediatamente. Finais heroicos desbloqueados. |
| 50-79 | Herói | Portas abertas. Pessoas falam com você. |
| 20-49 | Honrado | Tratamento respeitoso na maioria dos lugares. |
| -20 a 19 | Neutro | Avaliado por ações individuais. |
| -50 a -21 | Suspeito | Guardas alertas. NPCs reticentes. |
| -80 a -51 | Temido | Alguns fogem. Outros obedecem por medo. |
| -100 a -81 | Infame | Finais trágicos específicos disponíveis. |

---

## NPCs e Memória

Cada NPC tem um estado que evolui com suas escolhas:

- **aliado/aliada** — coopera ativamente
- **aliado_profundo/aliada_profunda** — laço forte, história compartilhada
- **inimigo/inimiga** — ativamente contra você
- **grato/grata** — não é aliado, mas te favorece
- **suspicioso** — precisa de mais prova
- **cooperativo** — escolheu ajudar contra seu interesse
- **em_paz** — resolvido, sem conflito

O jogo mostra as relações ativas na barra de NPCs acima da história.

---

## Os 22 Finais (Fantasia)

### Heroicos
1. 👑 O Herói Lendário — Vida≥70, Força≥60, Carisma≥60, Rep≥50
2. ✨ O Anjo da Redenção — Vida≥80, Carisma≥55, Magia≥55, Rep≥60
3. 🔓 O Libertador do Povo — Carisma≥75, Rep≥30
4. ⚜️ O Rei Diplomata — Carisma≥70, Vida≥50, Rep≥40
5. 🔮 O Arquimago Supremo — Magia≥80, Força<50
6. ⚔️ O Guerreiro Imortal — Força≥70, Vida≥60, Magia<45
7. ⚖️ O Mestre do Equilíbrio — Atributos equilibrados (diff<20), Vida≥50

### Misteriosos
8. 🌑 O Guardião das Sombras — Magia≥65, Carisma≥50, Vida<60
9. 👁️ O Oráculo Eterno — Magia≥85
10. 🌫️ O Foragido Lendário — Força≥40, Vida<45, Carisma≥40
11. 👻 O Espírito Vingativo — Vida≤20, Magia≥55

### Neutros
12. 🏔️ O Ermitão Sábio — Magia≥60, Carisma<40, Força<40
13. 💰 O Mercenário Lendário — Força≥45, Carisma≥45, Vida<50
14. 🌅 O Exilado Glorioso — Força≥50, Carisma<35, Vida≥40
15. 🗺️ O Viajante Solitário — Fallback universal

### Trágicos
16. 🩸 O Grande Sacrifício — Carisma≥60, Vida≤25, Rep≥10
17. 🕯️ O Mártir Sagrado — Vida≤30, Carisma≥55, Rep≥20
18. 👻 O Berserker Caído — Força≥65, Vida≤35
19. 🖤 O Poder Corrompido — Força≥55, Magia≥55, Vida<50, Rep<0
20. 🗡️ O Traidor Coroado — Carisma≥65, Rep<-10, Força<30, Magia<30
21. 😈 O Demônio Despertado — Força≥60, Magia≥60, Carisma<30, Rep<-30
22. ⛓️ O Amaldiçoado — Vida≤15

---

## Publicar na Steam com Electron

```bash
# 1. Instalar
npm init -y
npm install electron electron-builder --save-dev

# 2. Criar main.js
# (veja exemplo abaixo)

# 3. Build
npx electron-builder --win
npx electron-builder --mac
npx electron-builder --linux
```

**main.js para Electron:**
```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 960, height: 720,
    title: 'Crônicas do Destino',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if(process.platform !== 'darwin') app.quit(); });
```

**package.json build section:**
```json
{
  "main": "main.js",
  "build": {
    "appId": "com.seuapp.cronicas",
    "productName": "Crônicas do Destino",
    "files": ["index.html", "engine.js", "ascii-art.js", "scenario-fantasia.js", "main.js"],
    "win": { "target": "nsis" },
    "mac": { "target": "dmg" },
    "linux": { "target": "AppImage" }
  }
}
```

---

## Adicionar Cenários Novos

Crie um arquivo `scenario-cyberpunk.js` (ou horror/western) seguindo a estrutura de `scenario-fantasia.js`:

```javascript
const ScenarioCyberpunk = {
  id: 'cyberpunk',
  name: 'Neo-Valdrun',
  icon: '🤖',
  intro: '...',
  chapters: [...],
  npcs: {...},
  scenes: [ /* 20 cenas */ ],
  endings: [...],
  endingPriority: [...],
};
```

Depois adicione ao `SCENARIO_MAP` no `index.html`:
```javascript
const SCENARIO_MAP = {
  fantasia: ScenarioFantasia,
  cyberpunk: ScenarioCyberpunk,
};
```

E inclua o script no HTML:
```html
<script src="scenario-cyberpunk.js"></script>
```

---

## Estrutura de Arquivos

```
cronicas-v3/
├── index.html           ← UI completa + game loop
├── engine.js            ← Estado, reputação, NPCs, save/load
├── ascii-art.js         ← Arte ASCII colorida por cena
├── scenario-fantasia.js ← 20 cenas + 22 finais do cenário Fantasia
└── README.md
```

---

## Licença

MIT — faça bom uso! 🐉
