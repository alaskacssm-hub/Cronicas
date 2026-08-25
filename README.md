# 🐉 Crônicas do Destino — v2.0 OFFLINE
### RPG de texto 100% offline · 22 finais únicos · 4 cenários

---

## ✅ O que mudou na v2.0

| Feature | v1.0 (com API) | v2.0 (offline) |
|---|---|---|
| Narrativa | IA gera em tempo real | Pré-escrita, original |
| Custo por jogada | ~$0.01 USD | Grátis |
| Conexão necessária | Sim | Não |
| Finais | 22 determinados por IA | 22 fixos, determinados pelos atributos |
| Cenários | 4 | 4 |
| Cenas por cenário | 12 | 8 |
| Save/Load | ✅ | ✅ |
| Galeria de finais | ✅ | ✅ |
| Trilha sonora | ✅ | ✅ |
| Arquivo único | ❌ (precisa servidor) | ✅ (só index.html) |

---

## 🚀 Como jogar agora

Basta abrir o arquivo `index.html` no navegador. **Nenhuma instalação necessária.**

```
Abrir index.html → jogar
```

É isso. Sem Node.js, sem Python, sem servidor, sem internet.

---

## 🏆 Os 22 Finais — Como desbloquear cada um

### Heroicos (7)
| Final | Condição |
|---|---|
| 👑 O Herói Lendário | Vida≥70 + Força≥60 + Carisma≥60 |
| 🔮 O Arquimago Supremo | Magia≥75 + Força<45 |
| ⚜️ O Rei Diplomata | Carisma≥70 + Vida≥50 |
| ⚔️ O Guerreiro Imortal | Força≥70 + Vida≥60 + Magia<40 |
| ✨ O Anjo da Redenção | Vida≥80 + Carisma≥55 + Magia≥55 |
| ⚖️ O Mestre do Equilíbrio | Atributos equilibrados (diferença <15) + Vida≥50 |
| 🔓 O Libertador do Povo | Carisma≥75 |

### Misteriosos (4)
| Final | Condição |
|---|---|
| 🌑 O Guardião das Sombras | Magia≥60 + Carisma≥50 + Vida<60 |
| 👁️ O Oráculo Eterno | Magia≥80 |
| 🌫️ O Foragido Lendário | Força≥40 + Vida<45 + Carisma≥40 |
| 👻 O Espírito Vingativo | Vida≤20 + Magia≥50 |

### Neutros (4)
| Final | Condição |
|---|---|
| 🏔️ O Ermitão Sábio | Magia≥55 + Carisma<40 + Força<40 |
| 💰 O Mercenário Lendário | Força≥45 + Carisma≥45 + Vida<50 |
| 🌅 O Exilado Glorioso | Força≥50 + Carisma<35 + Vida≥40 |
| 🗺️ O Viajante Solitário | Padrão (sempre disponível como fallback) |

### Trágicos (7)
| Final | Condição |
|---|---|
| 🕯️ O Mártir Sagrado | Vida≤30 + Carisma≥55 |
| 🩸 O Grande Sacrifício | Carisma≥60 + Vida≤25 |
| 🗡️ O Traidor Coroado | Carisma≥65 + Força<30 + Magia<30 |
| 💀 O Berserker Caído | Força≥65 + Vida≤35 |
| 😈 O Demônio Despertado | Força≥60 + Magia≥60 + Carisma<30 |
| 🖤 O Poder Corrompido | Força≥55 + Magia≥55 + Vida<50 |
| ⛓️ O Amaldiçoado | Vida≤15 |

---

## 🎮 Controles

| Tecla | Ação |
|---|---|
| `1` / `2` / `3` | Escolher opção |
| Clique | Escolher opção |
| `♪ SOM` | Ligar/desligar trilha sonora |

---

## 🌍 Cenários

| Cenário | Ambientação |
|---|---|
| ⚔️ Fantasia | Reino de Valdrun, o Rei-Dragão Malachar, 8 cenas épicas |
| 🤖 Cyberpunk | Neo-Valdrun 2087, MegaCorp Axiom, Projeto Éden |
| 👁️ Horror | Mansão Velmoor, entidades sobrenaturais, segredos proibidos |
| 🤠 Faroeste | Dusthaven 1882, barão Colt Harrow, justiça fronteiriça |

---

## 🎯 Publicar na Steam com Electron

### 1. Instale o Electron

```bash
npm init -y
npm install electron electron-builder --save-dev
```

### 2. Crie o `main.js`

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 680,
    title: 'Crônicas do Destino',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: false }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
```

### 3. Configure o `package.json`

```json
{
  "name": "cronicas-do-destino",
  "version": "2.0.0",
  "main": "main.js",
  "build": {
    "appId": "com.seuname.cronicas",
    "productName": "Crônicas do Destino",
    "files": ["index.html", "main.js", "icon.png"],
    "win": { "target": "nsis", "icon": "icon.png" },
    "mac": { "target": "dmg", "icon": "icon.png" },
    "linux": { "target": "AppImage" }
  }
}
```

### 4. Gere o executável

```bash
npx electron-builder --win     # → .exe instalador para Windows
npx electron-builder --mac     # → .dmg para macOS
npx electron-builder --linux   # → .AppImage para Linux
```

### 5. Publique na Steam

1. Criar conta em https://partner.steamgames.com ($100 taxa única por jogo)
2. Criar a página da loja com screenshots e descrição
3. Fazer upload via Steamworks SDK ou SteamPipe
4. Submeter para revisão (geralmente 3-5 dias úteis)

**Dica:** Use o [Steamworks SDK](https://partner.steamgames.com/doc/sdk) para adicionar achievements (conquistas) baseados nos finais desbloqueados — isso aumenta muito o engajamento!

---

## 💡 Expandindo o jogo

### Adicionar novas cenas
Edite o array `scenes` dentro de cada cenário em `index.html`. Cada cena segue o formato:
```javascript
{
  text: 'Narrativa da cena...',
  choices: [
    { text: 'Texto da escolha', out: 'Resultado narrativo',
      sc: { hp: 0, mp: 10, str: -5, kar: 0 }, item: 'Nome do Item ou null' },
    // ... mais 2 escolhas
  ]
}
```

### Adicionar novos finais
Adicione ao array `ENDINGS` e ao array de prioridade `EP`:
```javascript
{ id:'novo', title:'O Novo Final', type:'heroico', emoji:'⭐', color:'#gold',
  cond: s => s.hp >= 90,  // condição baseada nos stats finais
  text: 'Narrativa do final...' }
```

### Adicionar novo cenário
Adicione uma entrada ao objeto `SCENARIOS` seguindo a estrutura dos 4 existentes.

---

## 📊 Estrutura dos Atributos

| Atributo | Começa em | Máximo | Influenciado por |
|---|---|---|---|
| ❤ Vida | 100 | 100 | Combate (perde), diplomacia (ganha) |
| ✦ Magia | 50 | 100 | Escolhas mágicas/inteligentes |
| ⚔ Força | 30 | 100 | Escolhas de combate direto |
| ♦ Carisma | 30 | 100 | Escolhas sociais/diplomáticas |

Cada escolha altera entre -20 e +20 pontos em um ou mais atributos. Os atributos finais determinam qual dos 22 finais você recebe.

---

## 📝 Licença

MIT — faça bom uso! Se publicar na Steam, seria legal dar um crédito. 🐉
