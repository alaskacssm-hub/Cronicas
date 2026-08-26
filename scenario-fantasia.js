// ═══════════════════════════════════════════════════════════
//  CENÁRIO: FANTASIA — REINO DE VALDRUN
//  20 cenas · NPCs com memória · reputação · escolhas profundas
// ═══════════════════════════════════════════════════════════

const ScenarioFantasia = {
  id: 'fantasia',
  name: 'Reino de Valdrun',
  icon: '⚔️',
  tagline: 'Magia, Dragões e o Peso de um Reino',
  intro: `O inverno chegou cedo em Valdrun — e não é o frio natural das estações.

É o fôlego de Malachar.

O Rei-Dragão dormiu por mil anos sob a Montanha Negra, selado por um pacto que ninguém mais sabe fazer. Agora algo quebrou esse pacto, e as cidades do norte estão cobertas de cinzas. Os refugiados chegam em levas, com olhos que viram o que os olhos não deveriam ver.

Você é um aventureiro sem nome e sem história — exatamente o tipo de pessoa que o destino costuma escolher.

Três dias atrás, um corvo negro pousou no seu ombro com uma mensagem sem remetente:
<em>"A chave está em Arveth. O tempo está acabando. Vá."</em>

Você foi.`,

  chapters: [
    { title: 'Capítulo I — A Cidade dos Suspeitos', scenes: [0,1,2,3,4] },
    { title: 'Capítulo II — As Ruínas Que Respiram', scenes: [5,6,7,8,9] },
    { title: 'Capítulo III — O Pântano e a Feiticeira', scenes: [10,11,12,13,14] },
    { title: 'Capítulo IV — A Cidadela de Fogo', scenes: [15,16,17,18,19] },
  ],

  // ── NPCs relevantes ──────────────────────────────────
  npcs: {
    capitao_duren:  { name: 'Capitão Duren',    role: 'Capitão da Guarda de Kael' },
    anao_breck:     { name: 'Breck',            role: 'Anão Informante (Beberão)' },
    lirien:         { name: 'Lirien',           role: 'Feiticeira Aprisionada' },
    general_voss:   { name: 'General Voss',     role: 'Braço Direito de Malachar' },
    malachar:       { name: 'Malachar',         role: 'O Rei-Dragão' },
    elderwyn:       { name: 'Elderwyn',         role: 'Anciã de Mireth' },
    corvus:         { name: 'Corvus',           role: 'Mercenário Misterioso' },
  },

  // ── 20 Cenas ─────────────────────────────────────────
  scenes: [

    // ════ CENA 0 — CHEGADA A KAEL ════════════════════
    {
      id: 0,
      title: 'O Portão da Cidade',
      atmosphere: 'tension',
      narrative: (G) => `A cidade de Kael surge na névoa da manhã como uma promessa quebrada. 

Suas muralhas, que já foram brancas, estão cobertas de fuligem. Bandeiras rasgadas da Casa Valdrun pendem dos torreões sem vento para movê-las. E na frente do portão principal, dois guardas com armaduras pesadas verificam cada rosto que passa — com uma lista na mão.

Você reconhece sua silhueta no cartaz pregado na madeira apodrecida. Alguém te delatou antes mesmo de você chegar.

O Capitão Duren — um homem com cicatriz cruzando o rosto e olhos que cansaram de ver covardia — levanta a mão e aponta na sua direção.

<em>"Você. Pare. Mãos à vista."</em>

Do seu ângulo, você consegue ver três coisas: a espada no quadril de Duren, uma passagem de serviço entreaberta à esquerda, e uma criança pequena chorando sozinha perto dos muros — claramente perdida, claramente ignorada por todos.

O tempo para decidir é agora.`,
      choices: [
        {
          text: 'Encarar Duren, revelar que veio ajudar o reino',
          subtext: 'Jogar na mesa sua verdade — e apostar que ele acredita.',
          rep: +5,
          sc: { kar: 8, hp: -5 },
          npc: { capitao_duren: 'suspicioso' },
          flag: { duren_sabe_missao: true },
          item: null,
          gold: 0,
          outcome: `Você olha nos olhos de Duren sem piscar.

<em>"Capitão. Não sou o inimigo que está procurando. Vim por causa do Rei-Dragão — e se não me deixar passar, Kael será cinzas antes da próxima lua."</em>

Um segundo longo como uma vida inteira passa.

Duren abaixa a mão — não pela mão, mas pelos olhos. Ele viu algo nos seus. A cicatriz no rosto dele treme levemente quando ele fala baixo:

<em>"Você tem até o anoitecer para provar isso. Um passo errado e você vira decoração no portão."</em>

Ele te deixa passar. Mas você sente o olhar dele nas suas costas até sumir pela esquina.`,
        },
        {
          text: 'Usar magia de ilusão para mudar sua aparência',
          subtext: 'Tornar-se outra pessoa por tempo suficiente para entrar.',
          rep: -5,
          sc: { mp: 12, hp: 3 },
          npc: { capitao_duren: 'neutro' },
          flag: { entrou_ilusao: true },
          item: null,
          gold: 0,
          outcome: `Você fecha os olhos por meio segundo.

A magia vem como sempre vem — não como trovão, mas como respiração. Quando você abre os olhos, seus cabelos são castanhos e seu rosto pertence a um mercador comum. Você caminha em direção ao portão com passos de quem foi ao mercado a vida inteira.

Duren mal levanta os olhos da lista.

Você passa.

Mas há um custo invisível: do outro lado do portão, um menino de olhos dourados te observa — e os olhos dourados de crianças em Kael geralmente pertencem a quem tem o dom de ver através de ilusões.

O menino sorri.`,
        },
        {
          text: 'Ignorar o portão e socorrer a criança perdida',
          subtext: 'Às vezes a coisa certa abre o caminho certo.',
          rep: +15,
          sc: { kar: 15, hp: 5 },
          npc: { capitao_duren: 'grato' },
          flag: { crianca_salva: true, duren_aliado: true },
          item: null,
          gold: 5,
          outcome: `Você ignora os guardas e vai direto para a criança.

Ela está chorando em silêncio — o pior tipo de choro, o de quem aprendeu que fazer barulho não adianta. Você se ajoelha, fala baixo, e ela te diz que perdeu a mãe na debandada de ontem.

Quando você se levanta com a criança no colo para procurar a mãe, uma mão pesada pousa no seu ombro. Você espera o pior.

<em>"É filha do ferreiro da rua das Forjas,"</em> diz Duren, com uma voz que de repente não tem cicatriz nenhuma. <em>"Eu te levo."</em>

A mãe abraça a filha com um choro que não tem silêncio. Duren olha para você com algo que claramente não está acostumado a sentir.

<em>"Entre. E se alguém perguntar, você é meu primo de Merrath."</em>`,
        },
      ],
    },

    // ════ CENA 1 — RUA DE KAEL ════════════════════════
    {
      id: 1,
      title: 'A Cidade Sob Cinzas',
      atmosphere: 'somber',
      narrative: (G) => {
        const duren_aliado = Engine.hasFlag('duren_aliado');
        const entrou_ilusao = Engine.hasFlag('entrou_ilusao');
        const intro = duren_aliado
          ? `Duren caminha ao seu lado pelas ruelas de Kael, apontando coisas com o queixo como quem não quer que ninguém perceba que está te guiando.`
          : entrou_ilusao
          ? `Você mantém a ilusão enquanto caminha pelas ruelas de Kael, sentindo o peso de não ser você mesmo em cada passo.`
          : `Você caminha pelas ruelas de Kael com a consciência de que Duren provavelmente tem alguém te seguindo.`;
        return `${intro}

A cidade está doente de medo.

As tendas do mercado estão fechadas com correntes. Janelas que deveriam estar abertas nessa hora estão seladas com madeira. E nas esquinas, crianças vendem pedaços de papel com runas de proteção que claramente não funcionam — mas as pessoas compram assim mesmo, porque o desespero precisa de algum gesto.

Nas paredes, pôsteres do Barão Helmrath — o governador nomeado por Malachar — prometem segurança em troca de colaboração. Abaixo de cada pôster, alguém riscou a palavra <em>mentira</em>.

Um homem velho para na sua frente. Seus olhos estão nublados, mas ele fala direto:

<em>"Você não é daqui. Os olhos de quem é daqui já não brilham mais assim."</em>

Ele te empurra um papel amassado na mão antes de desaparecer na multidão. O papel diz: <em>"Estalagem do Grifo Bêbado. Breck. Diga que vem de Arveth."</em>`;
      },
      choices: [
        {
          text: 'Ir direto à Estalagem do Grifo Bêbado',
          subtext: 'Seguir a pista sem desvios.',
          rep: 0,
          sc: { mp: 5 },
          npc: {},
          flag: { foi_grifo: true },
          item: null,
          gold: 0,
          outcome: `Você guarda o papel e segue as ruelas em direção ao cheiro de cerveja azeda e fumaça de cachimbo.

O Grifo Bêbado é exatamente o que o nome promete: um lugar onde a dignidade deixou de ser um requisito. Mas também é o tipo de lugar onde segredos sobrevivem porque ninguém que importa olha para cá.

Na entrada, uma mulher com olhos de serpente te avalia da cabeça aos pés e diz sem mover os lábios quase nada: <em>"Breck está no canto do fundo. Não olhe para os outros."</em>`,
        },
        {
          text: 'Perguntar às pessoas sobre os pôsteres do Barão Helmrath',
          subtext: 'Entender o inimigo antes de agir.',
          rep: +5,
          sc: { kar: 8, mp: 5 },
          npc: {},
          flag: { conhece_helmrath: true },
          item: null,
          gold: 0,
          outcome: `Você para em frente a um pôster e pergunta a uma vendedora de especiarias o que ela pensa.

Ela olha em volta antes de responder.

<em>"Helmrath era um homem decente antes de Malachar. Agora ele assina ordem de execução com a mesma mão que antes assinou certidão de nascimento."</em>

Ela te passa um punhado de ervas sem cobrar e sussurra: <em>"Se você quer fazer algo de útil, vá ao Grifo Bêbado e pergunte pelo Breck. Ele sabe coisas que o Barão não sabe que ele sabe."</em>`,
        },
        {
          text: 'Ajudar um refugiado que está sendo expulso de uma loja',
          subtext: 'A cidade precisa de bondade tanto quanto de heróis.',
          rep: +10,
          sc: { kar: 10, hp: 3 },
          npc: {},
          flag: { ajudou_refugiado: true },
          item: 'Colar de Proteção',
          gold: 0,
          outcome: `Um comerciante gordo empurra uma mulher com duas crianças para fora da sua loja.

<em>"Refugiados não têm crédito! Sumam!"</em>

Você entra entre eles. Não com ameaças — apenas com presença. O comerciante recua dois passos sem entender por quê.

A mulher te olha com olhos que já viram demais para ainda ter lágrimas. Ela tira um colar do pescoço — uma runa da casa dela, em algum norte que já não existe mais — e coloca na sua mão.

<em>"Leve. Não vou precisar se o lugar para onde estou indo for tão ruim quanto o que deixei."</em>

O colar pulsa levemente. Há magia antiga nele.`,
        },
      ],
    },

    // ════ CENA 2 — ESTALAGEM DO GRIFO BÊBADO ═════════
    {
      id: 2,
      title: 'O Informante Bêbado',
      atmosphere: 'tense',
      narrative: (G) => {
        const conhece = Engine.hasFlag('conhece_helmrath');
        return `A Estalagem do Grifo Bêbado tem o cheiro específico de lugar onde as histórias vêm para morrer.

Você encontra Breck exatamente onde prometeram: no canto mais escuro, com três canecas vazias e uma que está a caminho de ficar. O anão tem pelo menos cento e cinquenta anos no rosto, mas os olhos — os olhos têm a vivacidade irritante de quem sempre sabe mais do que diz.

<em>"Arveth,"</em> você diz.

Breck para com a caneca no ar. Olha para você com aquela qualidade específica de atenção que os bêbados só têm quando não estão nem um pouco bêbados.

<em>"Quatro pessoas disseram essa palavra pra mim nos últimos seis meses,"</em> ele fala bem devagar. <em>"As outras três não voltaram para contar como foi."</em>

Ele bate a caneca na mesa.

<em>"O Escudo de Arveth existe. Eu sei onde está. Mas tem gente que também quer — e eles chegaram aqui hoje de manhã."</em>

Do outro lado da taverna, três mercenários com símbolo de Malachar na armadura se levantam devagar, olhando para vocês dois.${conhece ? '\n\n<em>Você lembra do que a vendedora disse sobre o Barão Helmrath. Claramente ele também está atrás do Escudo.</em>' : ''}`;
      },
      choices: [
        {
          text: 'Ficar parado e deixar os mercenários virem — não recuar nunca',
          subtext: 'Quem não foge manda uma mensagem mais forte que qualquer espada.',
          rep: +5,
          sc: { str: 15, hp: -12, kar: 5 },
          npc: { anao_breck: 'aliado' },
          flag: { breck_aliado: true },
          item: null,
          gold: 0,
          outcome: `Você não se move. Fica parado, com as mãos abertas sobre a mesa, olhando os três mercenários nos olhos enquanto eles se aproximam.

O líder para a dois metros. Você ainda não se moveu.

É ele que pisca primeiro.

<em>"Não vale a confusão,"</em> ele diz para os outros, como se fosse uma decisão dele.

Eles saem. Breck te olha com algo que parece respeito — ou talvez só surpresa.

<em>"A última pessoa que fez isso aqui perdeu dois dentes,"</em> ele diz. <em>"Você teve sorte de ter cara de louco convincente."</em>

Ele empurra o mapa para você. <em>"Arveth fica a dois dias para o leste. Mas vai precisar atravessar a Floresta dos Sussurros."</em>`,
        },
        {
          text: 'Lançar um feitiço de sono nos mercenários discretamente',
          subtext: 'Elegante, limpo, sem sangue. A magia como deveria ser usada.',
          rep: 0,
          sc: { mp: 15, hp: 3 },
          npc: { anao_breck: 'aliado' },
          flag: { breck_aliado: true },
          item: 'Mapa de Arveth',
          gold: 0,
          outcome: `Você murmura as sílabas do Feitiço do Sono com os lábios quase fechados, como se estivesse tossindo.

Os três mercenários chegam até a metade da taverna, ficam com cara de quem esqueceu o nome do próprio pai, e sentam em cadeiras que não são deles. Em trinta segundos, estão roncando.

A taverna inteira faz silêncio por um momento — e então continua como se nada tivesse acontecido. Esse é o tipo de lugar assim.

Breck olha para os mercenários dormindo e volta para você com um sorriso.

<em>"Estudou em Greyvail ou fez isso sozinho?"</em>

Sem esperar resposta, ele desdobra um mapa na mesa. <em>"Arveth fica aqui. E o que você vai encontrar lá... prepare o estômago."</em>`,
        },
        {
          text: 'Pagar Breck generosamente e pedir que ele afaste os mercenários',
          subtext: 'Dinheiro move o mundo — às vezes mais que espadas.',
          rep: -5,
          sc: { kar: 10 },
          npc: { anao_breck: 'aliado', corvus: 'aliado' },
          flag: { breck_aliado: true, corvus_contratado: true },
          item: 'Mapa de Arveth',
          gold: -8,
          outcome: `Você coloca oito moedas de ouro na mesa — mais do que Breck ganha em uma semana.

Ele olha as moedas. Olha para você. Olha para os mercenários.

Assobia baixinho.

Um homem que você não tinha notado — alto, com capuz, encostado no balcão como se fosse parte da parede — se descola devagar e vai na direção dos mercenários. Há uma conversa que você não ouve. Os três saem, com a expressão de quem foi convencido de que saiu por vontade própria.

O homem encapuzado, ao passar por você de volta, deixa um cartão na sua mesa. Apenas um nome: <em>Corvus</em>.

Breck começa a falar sobre Arveth.`,
        },
      ],
    },

    // ════ CENA 3 — FLORESTA DOS SUSSURROS ═══════════════
    {
      id: 3,
      title: 'A Floresta Que Escuta',
      atmosphere: 'mysterious',
      narrative: (G) => {
        const breck_aliado = Engine.npcIs('anao_breck', 'aliado');
        const corvus = Engine.npcIs('corvus', 'aliado');
        return `A Floresta dos Sussurros começa onde a estrada para.

Não há placa. Não há aviso. A estrada simplesmente acaba em terra, e a floresta começa — como se a vegetação tivesse devorado qualquer tentativa de civilização com paciência geológica.

${breck_aliado ? `Breck te acompanhou até aqui, mesmo você não ter pedido. <em>"Eu conheço essa floresta melhor bêbado do que qualquer guia sóbrio,"</em> ele disse, e você decidiu que era melhor não discutir.` : `Você está sozinho. A floresta parece notar isso.`}

As árvores nessa floresta sussurram de verdade. Não é vento — não há vento. São vozes, fragmentos de conversas em idiomas que existiram antes de haver idiomas. Diz a lenda que a floresta absorve os segredos de todos que já passaram por ela.

${corvus ? `O cartão que Corvus deixou aquece no seu bolso de forma estranha — como se a presença dele impusesse respeito até aqui.` : ''}

Você está no terceiro quilômetro quando percebe que está sendo seguido.

Não por humanos. Os passos são leves demais, ritmados demais. E quando você para, eles param.

Ao virar, você vê: uma criatura feita de sombra e folhas, com olhos que são só luz. O Guardião da Floresta. Ele não ataca. Apenas observa.

E então faz um gesto com o que deveria ser uma mão.`;
      },
      choices: [
        {
          text: 'Corresponder ao gesto — saudar o Guardião com respeito',
          subtext: 'Algumas linguagens não precisam de palavras.',
          rep: +10,
          sc: { kar: 15, mp: 8 },
          npc: {},
          flag: { guardiao_aliado: true },
          item: 'Folha do Caminho',
          gold: 0,
          outcome: `Você espelha o gesto — mão aberta, inclinação leve da cabeça.

O Guardião permanece imóvel por tempo suficiente para você começar a duvidar de si mesmo. E então se move: contorna você devagar, toca levemente em um galho, e o galho se dobra apontando uma direção.

O caminho seguro.

Antes de desaparecer entre as árvores, o Guardião deixa cair uma folha que não existe naquela floresta — uma folha dourada, de uma árvore que floresceu antes de Valdrun ter nome. Ela pulsa levemente na sua palma.

Os sussurros em volta de você diminuem, como uma multidão que abre passagem.`,
        },
        {
          text: 'Avançar sem reconhecer o Guardião — tempo é a única coisa escassa',
          subtext: 'Malachar não espera por cortesias.',
          rep: -5,
          sc: { str: 10, hp: -15 },
          npc: {},
          flag: { floresta_hostil: true },
          item: null,
          gold: 0,
          outcome: `Você passa pelo Guardião como se fosse uma árvore.

A floresta não gosta disso.

Os galhos que antes apenas roçavam sua cabeça agora agarram seus ombros. Os sussurros que antes eram incompreensíveis se tornam algo parecido com uma advertência. Você corta caminho por instinto e por força, abrindo passagem por partes da floresta que não deveriam ser pisadas.

Você sai do outro lado mais rápido — mas ensanguentado, e com a sensação de que deixou algo importante para trás.`,
        },
        {
          text: 'Pedir à floresta que fale — tentar entender os sussurros',
          subtext: 'O conhecimento tem preço, mas o preço vale.',
          rep: +5,
          sc: { mp: 20, hp: -5, str: -5 },
          npc: {},
          flag: { sabe_segredo_floresta: true },
          item: 'Eco da Floresta',
          gold: 0,
          outcome: `<em>"Fala comigo,"</em> você diz para a escuridão entre as árvores. <em>"Eu sei que você pode."</em>

O Guardião inclina a cabeça. E então a floresta fala.

Não com palavras — com imagens. Você vê Arveth antes de ser ruínas. Vê o momento em que o Escudo foi escondido — e por quê. Vê uma coisa que ninguém mais vivo deveria saber: que Malachar foi criado, não nasceu. Que há alguém por trás dele.

Quando as imagens terminam, você está sentado no chão sem saber quando caiu. O Guardião já foi. Mas você sente como se tivesse bebido cem anos de história de uma vez.`,
        },
      ],
    },

    // ════ CENA 4 — ACAMPAMENTO NA FLORESTA ══════════════
    {
      id: 4,
      title: 'A Noite Entre as Árvores',
      atmosphere: 'intimate',
      narrative: (G) => {
        const guardiao = Engine.hasFlag('guardiao_aliado');
        const breck = Engine.npcIs('anao_breck', 'aliado');
        const segredo = Engine.hasFlag('sabe_segredo_floresta');
        return `A noite na floresta é diferente das outras noites.

Não é escura — há uma bioluminescência suave nas raízes das árvores que pulsa como respiração. É silenciosa do jeito que os lugares sagrados são silenciosos: não porque não haja som, mas porque cada som tem significado.

${guardiao ? `A Folha do Caminho que o Guardião te deu aquece suavemente no bolso durante toda a noite. Você dorme melhor do que deveria.` : `Você dorme em turnos, desconfiado de cada estalo de galho.`}

${breck ? `Breck ateia o fogo de um jeito específico que faz a fumaça subir sem cheiro — um truque de anão da montanha, ele explica, para não atrair atenção. E então, quieto como você nunca o viu, começa a falar.` : `Você está sozinho com os seus pensamentos e com o fogo.`}

${breck ? `<em>"Eu conheci o pai de Malachar,"</em> ele diz de repente. <em>"Antes de haver Malachar."</em>

Você para de mexer no fogo.

<em>"O Rei-Dragão não é um dragão. Nunca foi. É um homem que fez um trato com algo mais antigo que o nome dessa floresta. E o que ele deu em troca..."</em>

Breck olha para o fogo.

<em>"...foi exatamente o que você está indo buscar."</em>` : segredo ? `Você passa a noite processando o que a floresta te mostrou. A mente vai e vem: quem criou Malachar? Para quê? O Escudo de Arveth é a resposta — ou apenas outra pergunta?` : `O fogo crepita. Em algum lugar distante, um animal que você não reconhece grita uma vez e para.`}

No amanhecer, você encontra algo que não estava lá quando dormiu: rastros. Humanos. Indo na mesma direção que você.`;
      },
      choices: [
        {
          text: 'Seguir os rastros — podem ser aliados ou ameaças, mas é preciso saber',
          subtext: 'Informação é a melhor arma.',
          rep: 0,
          sc: { mp: 8, str: 5 },
          npc: { corvus: 'aliado' },
          flag: { encontrou_corvus_floresta: true },
          item: null,
          gold: 0,
          outcome: `Os rastros levam a uma clareira onde um único homem prepara chá sobre uma fogueira pequena e cirúrgica.

Corvus.

Ele não parece surpreso de te ver. Talvez nunca fique surpreso com nada.

<em>"Sabia que ia me seguir,"</em> ele diz, sem levantar os olhos do chá. <em>"Ou eu ia te seguir. Dá no mesmo."</em>

Ele te oferece uma xícara. Você bebe.

<em>"Arveth tem uma armadilha que o Breck não mencionou porque ele não sabe. Eu sei. Podemos ser úteis um ao outro."</em>`,
        },
        {
          text: 'Apagar os rastros e tomar um caminho alternativo',
          subtext: 'Quem chega primeiro a Arveth tem a vantagem.',
          rep: -5,
          sc: { str: 10, lck: 8 },
          npc: {},
          flag: { chegou_arveth_primeiro: true },
          item: null,
          gold: 0,
          outcome: `Você apaga seus próprios rastros, desvia pelo rio seco a leste e corta caminho por terreno que nenhum mapa registra.

É mais difícil. É mais perigoso. Mas você chega às Ruínas de Arveth enquanto o sol ainda está alto — e sozinho.

A vantagem de chegar primeiro: ninguém te viu chegar. A desvantagem: você não sabe o que te espera lá dentro.`,
        },
        {
          text: 'Esperar e observar quem está fazendo os rastros antes de agir',
          subtext: 'A paciência é também uma forma de coragem.',
          rep: +5,
          sc: { kar: 10, mp: 5 },
          npc: {},
          flag: { viu_espioes_helmrath: true },
          item: 'Anel Identificador',
          gold: 0,
          outcome: `Você sobe em uma árvore e espera.

Vinte minutos depois: três homens com o brasão discreto do Barão Helmrath passam abaixo de você. Eles falam sem saber que estão sendo ouvidos.

<em>"...o Escudo precisa chegar ao Barão antes do aventureiro. A Grifo foi comprometida, alguém avisou o anão..."</em>

Você deixa eles irem. E nota que o último deles perde um anel na lama — um anel com o brasão completo de Helmrath, prova de afiliação.

Você desce e pega o anel.`,
        },
      ],
    },

    // ════ CENA 5 — CHEGADA ÀS RUÍNAS ════════════════════
    {
      id: 5,
      title: 'Arveth Antes de Ser Ruínas',
      atmosphere: 'awe',
      narrative: (G) => {
        const chegou_primeiro = Engine.hasFlag('chegou_arveth_primeiro');
        const corvus = Engine.npcIs('corvus', 'aliado');
        return `As Ruínas de Arveth não parecem ter sido construídas por humanos.

${chegou_primeiro ? `Você chegou antes de todos — e a solidão aqui tem um peso específico.` : corvus ? `Você e Corvus chegaram juntos, e mesmo ele — que parece não se impressionar com nada — pára diante das ruínas.` : `Você chega às ruínas no início da tarde.`}

O que sobrou de Arveth são colunas de pedra que não são pedra — são algum material que não reflete a luz certa, que muda de cor dependendo do ângulo, que está quente mesmo na sombra. As ruínas sobem em espiral, como se quem as projetou nunca tivesse ouvido falar de ângulos retos.

No centro da espiral, no ponto mais alto, algo brilha.

O Escudo de Arveth.

Mas entre você e o Escudo: golem de pedra, mas essa pedra se move. Armadilhas de runa que você pode sentir queimando no ar. E uma voz — vinda de algum lugar sem origem — que diz em um idioma que você não deveria entender mas entende:

<em>"Por que você merece o que está aqui?"</em>

Não é uma armadilha. É uma pergunta real. E Arveth espera uma resposta real.`;
      },
      choices: [
        {
          text: 'Responder: "Não mereço. Mas o mundo precisa de mim para tentar."',
          subtext: 'Humildade honesta — a resposta que os soberbos nunca dão.',
          rep: +15,
          sc: { kar: 12, mp: 10 },
          npc: {},
          flag: { arveth_aprovou: true },
          item: null,
          gold: 0,
          outcome: `O silêncio depois da sua resposta dura tempo suficiente para você se arrepender.

Então os golens de pedra se ajoelham.

Não é uma metáfora — eles literalmente dobram as estruturas que têm no lugar de joelhos e abaixam as cabeças. As runas de armadilha se apagam uma a uma como velas sendo sopradas.

E a voz:

<em>"Em mil anos, você é o segundo a responder assim. O primeiro foi quem escondeu o Escudo aqui."</em>

O caminho até o altar se abre sozinho.`,
        },
        {
          text: 'Destruir os golens e forçar o caminho até o Escudo',
          subtext: 'Às vezes a força é a única língua que funciona.',
          rep: -10,
          sc: { str: 20, hp: -22, mp: -5 },
          npc: {},
          flag: { pegou_escudo_forca: true },
          item: 'Escudo de Arveth',
          gold: 0,
          outcome: `A batalha é real.

Os golens de pedra não sangram — mas racham. E cada rachadura exige exatamente o tipo de força que deixa marcas em quem a usa.

Você chega ao Escudo com mãos que tremem e dois cortes profundos que não vão fechar sozinhos. O Escudo está lá. Você o pega.

A voz não fala mais. Mas você sente — não sente exatamente, mais percebe da forma que se percebe que alguém está decepcionado — que algo foi perdido aqui além do seu sangue.`,
        },
        {
          text: 'Decifrar os glifos nas colunas antes de responder',
          subtext: 'Entender o lugar antes de agir nele.',
          rep: +10,
          sc: { mp: 20, kar: 5 },
          npc: {},
          flag: { decifrou_glifos: true, arveth_aprovou: true },
          item: 'Escudo de Arveth',
          gold: 0,
          outcome: `Os glifos são em Elven Antigo — não o elven que se estuda, o elven que existia antes das fronteiras.

Você leva quarenta minutos descifrando. A voz espera com uma paciência que parece não custar nada.

O que você aprende: Arveth não era uma cidade. Era um experimento. E o Escudo não é uma arma — é uma chave. Para quê, os glifos não dizem. Mas respondem à pergunta da voz com algo que não é uma resposta, é uma intenção:

<em>"Vim entender o que tenho que usar."</em>

A voz parece satisfeita com isso.

O Escudo flutua até suas mãos como se tivesse esperado por você especificamente.`,
        },
      ],
    },

    // ════ CENA 6 — O SEGREDO DO ESCUDO ══════════════════
    {
      id: 6,
      title: 'O Que o Escudo Guarda',
      atmosphere: 'revelation',
      narrative: (G) => {
        const aprovado = Engine.hasFlag('arveth_aprovou');
        const decifrou = Engine.hasFlag('decifrou_glifos');
        return `O Escudo de Arveth pesa menos do que deveria.

${aprovado ? `Nas suas mãos, ele pulsa — não como coração, mas como pulmão. Como algo que respira.` : `Nas suas mãos, ele está frio. Funcional, mas inerte. Como uma ferramenta que você ganhou sem a confiança de quem a fez.`}

Você está sentado no centro das ruínas tentando entender o que tem nas mãos quando ouve passos. Pesados. Organizados. Muitos.

Os soldados do Barão Helmrath chegaram.

Doze deles. Com o capitão na frente — não o Capitão Duren, um diferente, com olhos sem profundidade, do tipo que obedece ordens sem processá-las.

<em>"O Escudo pertence ao Barão,"</em> ele diz. <em>"Entregue agora e vai para casa andando."</em>

${decifrou ? `<em>Você sabe que o Escudo é uma chave. Se Helmrath o conseguir — e através dele Malachar — o que eles podem abrir com isso?</em>` : `<em>Você não sabe o que o Escudo faz além de repelir fogo de dragão. Mas entregar algo de Arveth a um servo de Malachar claramente não pode ser bom.</em>`}

Corvus ${Engine.npcIs('corvus', 'aliado') ? 'surge de trás de uma coluna, mão na faca, esperando sua decisão' : 'não está aqui — você está sozinho'}.`;
      },
      choices: [
        {
          text: 'Ativar o Escudo como escudo — e correr',
          subtext: 'Às vezes sobreviver é mais inteligente que lutar.',
          rep: 0,
          sc: { hp: 5, str: 8, mp: -8 },
          npc: {},
          flag: { fugiu_de_helmrath: true },
          item: null,
          gold: 0,
          outcome: `Você levanta o Escudo e faz o único gesto intuitivo: pressiona o símbolo central.

Uma onda de força expande do Escudo em todas as direções. Não machuca ninguém — apenas empurra, como uma respiração forte. Os soldados recuam três passos involuntários.

É o suficiente.

Você corre para a saída das ruínas antes que eles se reorganizem. O capitão grita ordens. Você já está na floresta.

O Escudo pulsa no seu braço como se aprovasse a escolha.`,
        },
        {
          text: 'Fingir entregar o Escudo — e usar magia para trocá-lo por uma réplica',
          subtext: 'O truque só funciona se a ilusão for perfeita.',
          rep: -5,
          sc: { mp: 18, kar: 5 },
          npc: {},
          flag: { enganou_helmrath: true },
          item: null,
          gold: 0,
          outcome: `Você molda uma cópia do Escudo em luz e sombra — ela dura o suficiente.

<em>"Toma,"</em> você diz, entregando a ilusão ao capitão. <em>"Não vale o sangue."</em>

Ele pega. Sorri. Parte com seus doze soldados.

A ilusão vai se desfazer em dezoito horas. Você terá usado esse tempo.

O verdadeiro Escudo de Arveth está no seu braço, debaixo do casaco.`,
        },
        {
          text: 'Recusar e enfrentar todos os doze — o Escudo não pode cair em mãos erradas',
          subtext: 'Algumas coisas não podem ser negociadas.',
          rep: +10,
          sc: { str: 18, hp: -25, mp: 5 },
          npc: { corvus: Engine.npcIs('corvus', 'aliado') ? 'aliado' : 'neutro' },
          flag: { derrotou_soldados_helmrath: true },
          item: null,
          gold: 5,
          outcome: `<em>"Não."</em>

Uma palavra. O resto é consequência.

A batalha dura seis minutos que parecem sessenta. ${Engine.npcIs('corvus', 'aliado') ? 'Corvus trabalha pelos flancos com eficiência cirúrgica enquanto você absorve o centro da investida.' : 'Você absorve e devolve, absorve e devolve.'}

Doze soldados, doze resultados diferentes. O capitão é o último — você o deixa de pé, mas desarmado.

<em>"Diz ao Barão que Arveth não é de Helmrath,"</em> você fala, e larga a espada dele a seus pés. <em>"Nunca foi."</em>`,
        },
      ],
    },

    // ════ CENAS 7-9 — VILAGEM DE MIRETH ════════════════
    {
      id: 7,
      title: 'A Anciã de Mireth',
      atmosphere: 'wise',
      narrative: (G) => {
        const escudo = Engine.hasItem('Escudo de Arveth');
        const segredo_floresta = Engine.hasFlag('sabe_segredo_floresta');
        return `A aldeia de Mireth não aparece nos mapas novos — só nos velhos, os feitos por cartógrafos que ainda acreditavam que lugares pequenos mereciam existir no papel.

Você a encontra por acidente, ou por algo que se parece com acidente.

Os habitantes de Mireth são o que resta de cinco vilas diferentes do norte, fundidas pela necessidade de sobreviver juntas. São pessoas que aprenderam a confiar umas nas outras porque não tinham mais ninguém.

Elderwyn te encontra antes de você procurar por ela. Uma mulher que poderia ter noventa ou cento e noventa anos, com as mãos menores que deveriam ser possíveis e os olhos maiores que o rosto comporta.

Ela olha para ${escudo ? 'o Escudo no seu braço' : 'você'} e diz:

<em>"Você foi a Arveth. Eu posso ver o pó das ruínas nos seus cabelos."</em>

Ela te convida para dentro. Há chá que cheira a tempo.

${segredo_floresta ? `<em>"A floresta te contou, não foi?"</em> ela diz sem que você mencione nada. <em>"Sobre quem criou Malachar."</em>` : `<em>"Senta. Tem coisas que você precisa saber antes de chegar ao Pântano."</em>`}`;
      },
      choices: [
        {
          text: 'Escutar Elderwyn com toda a atenção',
          subtext: 'Os velhos sabem coisas que os livros esqueceram de registrar.',
          rep: +10,
          sc: { kar: 10, mp: 15 },
          npc: { elderwyn: 'aliada' },
          flag: { sabe_fraqueza_malachar: true },
          item: null,
          gold: 0,
          outcome: `Elderwyn fala por duas horas. Você não interrompe uma vez.

Ela fala sobre o Pacto que criou Malachar: não um dragão, mas um homem que trocou sua alma por poder perpétuo. O Cristal de Alma que ele carrega é literalmente o que sobrou da sua humanidade — e é a única coisa que o pode matar.

<em>"Mas tem mais,"</em> ela diz. <em>"O Cristal não pode ser destruído por qualquer coisa. Precisa ser tocado por alguém com reputação limpa — sem cinismo, sem crueldade acumulada. É por isso que todos os outros falharam."</em>

Ela te olha.

<em>"Ainda dá tempo de você não estragar isso."</em>`,
        },
        {
          text: 'Pedir a Elderwyn para curar seus ferimentos antes de qualquer coisa',
          subtext: 'Você não chega a lugar nenhum morto.',
          rep: +5,
          sc: { hp: 30, mp: 8 },
          npc: { elderwyn: 'aliada' },
          flag: {},
          item: 'Ervas de Mireth',
          gold: 0,
          outcome: `Elderwyn examina seus ferimentos sem fazer julgamentos sobre como você os adquiriu.

Suas mãos pequenas têm força precisa. As ervas que ela usa cheiram a coisas que você não tem nome para descrever.

<em>"Sua cabeça está cheia de pressa,"</em> ela diz enquanto trabalha. <em>"A pressa mata mais aventureiros do que os dragões."</em>

Ela cuida de você com a eficiência de quem já cuidou de muitos que não voltaram. Quando termina, te entrega um pacote de ervas.

<em>"Para o Pântano. Certas criaturas lá odeiam esse cheiro. Use."</em>`,
        },
        {
          text: 'Pedir a Elderwyn que fique com o Escudo — é mais seguro aqui',
          subtext: 'Proteger o artefato pode ser mais importante que levá-lo.',
          rep: +15,
          sc: { kar: 15 },
          npc: { elderwyn: 'aliada' },
          flag: { escudo_em_mireth: true },
          item: null,
          gold: 0,
          outcome: `Você tira o Escudo do braço e o coloca nas mãos de Elderwyn.

Ela o recebe sem surpresa, como se esperasse exatamente isso.

<em>"Se você não voltar,"</em> ela diz, <em>"eu sei para onde mandar."</em>

<em>"Se eu não voltar,"</em> você responde, <em>"manda de volta para Arveth."</em>

Ela guarda o Escudo debaixo das tábuas do chão sem drama. E então te olha com o tipo de seriedade que vem de ter vivido tempo suficiente para não desperdiçar seriedade à toa.

<em>"Agora você vai ao Pântano sem proteção. Mas também sem ninguém te seguindo por causa do Escudo. Às vezes o melhor escudo é não precisar de um."</em>`,
        },
      ],
    },

    {
      id: 8,
      title: 'Mireth Esta Noite',
      atmosphere: 'human',
      narrative: (G) => {
        const elderwyn = Engine.npcIs('elderwyn', 'aliada');
        const rep = Engine.state.reputation;
        return `Mireth à noite é diferente do que você esperava.

Há música. Não a música festiva e performática de cidades — música real, do tipo que existe porque as pessoas precisam dela para continuar, não para ser ouvida por outros.

${elderwyn ? `Elderwyn te apresentou às famílias como "alguém que veio ajudar", e as pessoas de Mireth, que aprenderam a avaliar intenções por sobrevivência, te aceitaram sem fazer perguntas que você não quer responder.` : `Você se senta sozinho na beira do fogo comunitário, e as pessoas de Mireth te deixam em paz sem que isso pareça rejeição.`}

${rep >= 20 ? `As crianças ficam perto de você de um jeito que as crianças só ficam perto de quem reconhecem como seguro.` : rep <= -20 ? `Os adultos ficam atentos de um jeito discreto — não com medo, mas com a prudência de quem aprendeu que estranhos às vezes custam mais do que ajudam.` : `As pessoas são cordiais com a cordialidade cansada de quem já foi cordial com muita gente que não mereceu.`}

Um homem se senta ao seu lado. Chama-se Gareth. Mãos de ferreiro. Filhos que ele perdeu no norte.

<em>"Você vai ao Pântano amanhã?"</em>

Você confirma.

<em>"Meu irmão foi ao Pântano há três meses procurar minha família que ficou para trás. Não voltou. Se você achar ele..."</em>

Gareth não termina a frase. Não precisa.`;
      },
      choices: [
        {
          text: 'Prometer que vai procurar o irmão de Gareth',
          subtext: 'Uma promessa tem peso — mas essa pessoa merece que você carregue esse peso.',
          rep: +10,
          sc: { kar: 12 },
          npc: {},
          flag: { promessa_gareth: true },
          item: null,
          gold: 0,
          outcome: `<em>"Eu procuro,"</em> você diz.

Gareth não sorri. Mas os ombros descem dois centímetros.

<em>"Nome dele é Aldric. Tem um machado com o símbolo da forja de Mireth no cabo — presente do nosso pai. Se ele... se não estiver mais, me traz o machado."</em>

Você guarda o nome. Gareth se levanta e volta para o fogo sem mais palavras, porque algumas coisas não precisam de mais palavras.

Você acrescentou um peso à sua mochila que não pesa nada em gramas e tudo no resto.`,
        },
        {
          text: 'Ser honesto — não pode prometer o que não sabe se vai conseguir cumprir',
          subtext: 'Uma mentira gentil ainda é uma mentira.',
          rep: +5,
          sc: { kar: 8, mp: 5 },
          npc: {},
          flag: {},
          item: null,
          gold: 0,
          outcome: `<em>"Não posso prometer,"</em> você diz. <em>"Mas se eu achar, volto com notícias. Isso eu posso garantir."</em>

Gareth te olha por um momento longo.

<em>"Você é o único que não prometeu que ia achar ele vivo. Isso,"</em> ele diz com voz rouca, <em>"me faz confiar mais em você do que em todos os outros que passaram por aqui."</em>

Ele te dá o nome mesmo assim. E um mapa rudimentar de onde ele acredita que o irmão estava indo.`,
        },
        {
          text: 'Dar a Gareth o que você tem — ouro, comida, qualquer coisa útil',
          subtext: 'Às vezes o que as pessoas mais precisam é de algo concreto.',
          rep: +8,
          sc: { kar: 10 },
          npc: {},
          flag: { ajudou_gareth: true },
          item: null,
          gold: -5,
          outcome: `Você coloca cinco moedas de ouro na mão de Gareth sem explicar.

Ele olha para o ouro com a expressão de quem não sabe se deve aceitar.

<em>"Para os filhos,"</em> você diz. <em>"Não para o irmão. Para os que já estão aqui."</em>

Gareth fecha a mão em volta das moedas devagar. Não diz obrigado — a língua não vai. Mas você acha que entendeu de qualquer forma.`,
        },
      ],
    },

    {
      id: 9,
      title: 'A Entrada do Pântano',
      atmosphere: 'dread',
      narrative: (G) => {
        const fraqueza = Engine.hasFlag('sabe_fraqueza_malachar');
        const ervas = Engine.hasItem('Ervas de Mireth');
        return `O Pântano dos Perdidos começa onde o cheiro de terra úmida se torna cheiro de algo pior.

Não é putrefação — é mais velho que isso. É o cheiro do tempo acumulado em lugar fechado. O cheiro de memórias que não foram embora porque não tinham para onde ir.

${ervas ? `Você queima as Ervas de Mireth antes de entrar. A fumaça cria um perímetro invisível que você não consegue ver mas consegue sentir.` : `Você entra sem proteção. A névoa parece notar isso.`}

O Pântano faz coisas com a percepção.

Você vê seu pai por um segundo — não uma alucinação suave, mas a versão totalmente convincente de alguém que você perdeu, parado entre os cipós, olhando para você com a expressão específica que ele tinha quando estava decepcionado.

Você para.

Respira.

${fraqueza ? `<em>Elderwyn te avisou sobre isso. "O Pântano não inventa — ele usa o que encontra. O medo que você carrega, ele amplifica."</em>` : `Alguma coisa em você sabe que isso não é real. Mas saber não é o mesmo que não sentir.`}

E então você ouve algo que definitivamente não é alucinação: um grito. Humano. Próximo.`;
      },
      choices: [
        {
          text: 'Ir na direção do grito — alguém precisa de ajuda',
          subtext: 'Há coisas que você faz independente do custo.',
          rep: +15,
          sc: { kar: 15, hp: -8 },
          npc: {},
          flag: { encontrou_aldric: true },
          item: null,
          gold: 0,
          outcome: `Você segue o grito por trezentos metros de lama e cipó.

Encontra um homem preso em areia movediça até a cintura. Mãos de ferreiro. Um machado no cinto com o símbolo de uma forja.

Aldric.

Você o puxa com toda a força que você tem, e quando ele finalmente sai da lama e para no chão firme, ele chora com a intensidade de quem passou semanas achando que ia morrer ali.

<em>"Você é real?"</em> ele pergunta.

<em>"Sim,"</em> você diz. <em>"E seu irmão está esperando em Mireth."</em>`,
        },
        {
          text: 'Ignorar o grito — pode ser uma armadilha do Pântano',
          subtext: 'Sobreviver às vezes exige não se distrair.',
          rep: -10,
          sc: { str: 10, mp: 5 },
          npc: {},
          flag: {},
          item: null,
          gold: 0,
          outcome: `Você continua em frente. O grito se repete duas vezes e para.

Uma parte de você fica com isso.

O Pântano parece satisfeito com sua decisão — como se sua frieza fosse a senha para uma passagem mais suave. A névoa abre um caminho quase claro.

Você chega ao centro do Pântano mais rápido do que deveria ser possível.

Mas o grito não para de ecoar nos lugares internos onde os pensamentos vivem.`,
        },
        {
          text: 'Usar magia para localizar a origem do grito antes de se mover',
          subtext: 'Coragem sem informação é só pressa com outro nome.',
          rep: +5,
          sc: { mp: 15, hp: -3 },
          npc: {},
          flag: { encontrou_aldric: true },
          item: 'Bússola do Pântano',
          gold: 0,
          outcome: `Você fecha os olhos e estende a percepção mágica como uma rede.

O grito tem origem — real, humana, a 280 metros a nordeste. E há algo mais: uma presença grande e antiga circulando a origem, mas não atacando. Esperando.

Você vai ao local com a rota calculada. Aldric está preso em areia movediça, consciente, e uma criatura do Pântano — um ser de névoa e memória — observa de longe.

Você resgata Aldric enquanto a criatura assiste. Quando você part, a criatura deposita algo no chão onde Aldric estava: uma bússola que aponta para saídas do Pântano, não para o norte.`,
        },
      ],
    },

    // ════ CENAS 10-14 — PÂNTANO E LIRIEN ════════════════
    {
      id: 10,
      title: 'A Feiticeira na Gaiola',
      atmosphere: 'moral',
      narrative: (G) => {
        const sabe_criador = Engine.hasFlag('sabe_segredo_floresta');
        return `No coração do Pântano, onde a lama para de ser lama e começa a ser algo que não tem nome em nenhum idioma moderno, há uma estrutura.

Não foi construída por ninguém vivo.

É uma gaiola feita de luz solidificada — não luz natural, mas o tipo de luz que existe em sonhos ruins, que clareia mas não ilumina. E dentro da gaiola: uma mulher.

Lirien.

Você não sabe o nome dela ainda, mas vai saber em breve, da forma que se aprende os nomes de pessoas que mudam sua história.

Ela é jovem — ou parece. Tem o tipo de olhos que viram tempo demais: não velhos, apenas... saturados. Quando te vê, não grita, não pede ajuda. Apenas observa com a qualidade de alguém avaliando uma aposta.

<em>"Três semanas,"</em> ela diz quando você para diante da gaiola. <em>"Três semanas nessa gaiola e você é a primeira pessoa que parou aqui e não tentou primeiro me matar ou me vender."</em>

${sabe_criador ? `<em>"Você sabe sobre quem criou Malachar, não sabe?"</em> ela diz de repente, sem preâmbulo. <em>"A floresta te contou. Eu podia sentir quando aconteceu."</em>

Isso te faz parar completamente.` : ''}

<em>"Posso te ajudar a chegar onde você está indo,"</em> ela continua. <em>"Não como trato. Como escolha. A diferença importa."</em>`;
      },
      choices: [
        {
          text: 'Destruir a gaiola e libertá-la sem condições',
          subtext: 'Liberdade não deveria ter preço.',
          rep: +20,
          sc: { kar: 20, hp: -8, mp: -10 },
          npc: { lirien: 'aliada_profunda' },
          flag: { lirien_livre: true, lirien_aliada: true },
          item: null,
          gold: 0,
          outcome: `Você ataca a gaiola sem negociar. Sem pedir nada. Apenas porque é o certo.

A gaiola de luz resiste — não foi feita para ceder fácil. Você usa magia, força, e algo que talvez seja só teimosia, e no décimo minuto a estrutura estala e se desfaz como névoa ao sol.

Lirien sai devagar. Fica de pé com a cuidadosa equanimidade de quem testou as pernas antes de confiar nelas.

Fica em silêncio por um tempo longo.

<em>"Ninguém fez isso antes,"</em> ela diz finalmente. <em>"Sem pedir nada."</em>

<em>"Você estava presa,"</em> você responde. <em>"Não precisa de mais razão do que isso."</em>

Ela te olha como se você fosse uma espécie que ela não catalogou ainda.`,
        },
        {
          text: 'Propor um acordo justo — ajuda mútua, sem vínculo forçado',
          subtext: 'O respeito começa no tipo de trato que você oferece.',
          rep: +10,
          sc: { kar: 12, mp: 8 },
          npc: { lirien: 'aliada' },
          flag: { lirien_livre: true, lirien_aliada: true },
          item: 'Amuleto do Vínculo',
          gold: 0,
          outcome: `<em>"Eu te liberto,"</em> você diz. <em>"Em troca, você me guia até Malachar. Quando terminar, cada um segue seu caminho. Sem vínculo, sem dívida."</em>

Lirien considera isso com o rigor de quem já teve muitos acordos quebrados.

<em>"Sem vínculo mágico?"</em>

<em>"Só a palavra."</em>

<em>"A palavra de um estranho não vale muito."</em>

<em>"Não,"</em> você concorda. <em>"Mas é o que eu tenho. Você decide se é suficiente."</em>

Um momento longo.

<em>"Está bem."</em>

Ela sai da gaiola quando você a abre, e o primeiro gesto que faz é estender a mão para um aperto. Você aperta.`,
        },
        {
          text: 'Deixá-la na gaiola — não dá para confiar em quem está presa nesse lugar',
          subtext: 'Cautela não é crueldade.',
          rep: -15,
          sc: { str: 8, mp: 5 },
          npc: { lirien: 'inimiga' },
          flag: { abandonou_lirien: true },
          item: null,
          gold: 0,
          outcome: `Você olha para Lirien por um tempo longo.

E continua andando.

Ela não grita. Não implora. Apenas te acompanha com os olhos até você sumir na névoa.

O Pântano parece mais pesado depois disso. Não há razão física para isso — é só uma percepção. Mas persiste o resto do caminho.

<em>Você vai se lembrar dos olhos dela por mais tempo do que esperaria.</em>`,
        },
      ],
    },

    {
      id: 11,
      title: 'O Que Lirien Sabe',
      atmosphere: 'exposition',
      narrative: (G) => {
        const aliada = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        const abandonou = Engine.hasFlag('abandonou_lirien');
        if (abandonou) {
          return `Você atravessa o Pântano sozinho com as informações que tem — que são menos do que precisaria.

O caminho sem guia é longo, perigoso, e silencioso do tipo errado. Você encontra rastros do que claramente foi uma batalha recente — sangue velho, marcas de armas, um escudo partido com o símbolo de Helmrath.

Alguém passou aqui antes de você e não passou facilmente.

No centro do Pântano, uma pedra com inscrições funciona como marco: à direita, a saída para a Cidadela. À esquerda, as ruínas do templo de Valdrun Antigo.

Você escolhe a direção sozinho.`;
        }
        return `Lirien caminha ao seu lado pelo Pântano com a desenvoltura de quem conhece cada palmo — o que faz sentido quando ela explica que ficou três semanas presa aqui antes de ser capturada.

<em>"Quem te prendeu na gaiola?"</em> você pergunta.

<em>"Helmrath. Meu erro foi pensar que ele ainda tinha espaço para trair Malachar."</em>

Ela navigates cipós e lama com gestos precisos enquanto fala — a história vai saindo em pedaços, como as histórias reais sempre saem.

Lirien era estudiosa em Greyvail. Descobriu o que o Cristal de Alma de Malachar realmente é. Foi capturada antes de conseguir usar esse conhecimento.

<em>"O Cristal é a alma original dele,"</em> ela diz. <em>"Quando você o destrói, mata Malachar. Mas se alguém o toca com más intenções — vingança, ódio, ganância — o Cristal absorve essas intenções e transfere para quem tocou."</em>

Ela para e te olha.

<em>"Você entende o que isso significa?"</em>`;
      },
      choices: [
        {
          text: '"Significa que só quem toca o Cristal sem querer nada para si pode destruí-lo."',
          subtext: 'Você entendeu. A pergunta agora é se você é essa pessoa.',
          rep: +10,
          sc: { kar: 10, mp: 10 },
          npc: {},
          flag: { entende_cristal: true },
          item: null,
          gold: 0,
          outcome: `Lirien te olha por um momento que parece avaliação e parece outra coisa ao mesmo tempo.

<em>"Exato. Todos os outros que tentaram queriam matar Malachar por raiva, por ambição, por vingança justa. E a vingança justa ainda é vingança."</em>

<em>"E você?"</em> você pergunta. <em>"O que você queria quando foi lá?"</em>

Ela não responde imediatamente.

<em>"Queria que ele parasse. Não que ele sofresse. Só que parasse."</em>

<em>"Isso é diferente?"</em>

<em>"Parece que sim,"</em> ela diz, e retoma o caminho.`,
        },
        {
          text: '"Significa que eu tenho que entrar sem raiva. E não sei se consigo."',
          subtext: 'Honestidade sobre os próprios limites é também uma forma de coragem.',
          rep: +15,
          sc: { kar: 15 },
          npc: { lirien: 'aliada_profunda' },
          flag: { entende_cristal: true, foi_honesto_com_lirien: true },
          item: null,
          gold: 0,
          outcome: `As palavras saem antes de você poder pensar se é sábio dizer isso.

Lirien para de andar.

Ela te olha com algo que não é pena — é mais próximo de reconhecimento.

<em>"Você é a primeira pessoa que disse isso. Todos os outros disseram que iam conseguir, que eram bons o suficiente, que seus motivos eram puros."</em>

<em>"Talvez não sejam. Meus motivos."</em>

<em>"Mas você sabe que talvez não sejam,"</em> ela diz. <em>"Isso é a diferença."</em>

Ela retoma o caminho com algo sutilmente diferente na postura.`,
        },
        {
          text: '"Significa que preciso de um plano alternativo caso não seja a pessoa certa."',
          subtext: 'O pragmatismo também é uma virtude.',
          rep: +5,
          sc: { str: 8, mp: 12, kar: 5 },
          npc: {},
          flag: { entende_cristal: true, quer_plano_b: true },
          item: null,
          gold: 0,
          outcome: `Lirien considera isso com um respeito que talvez você não esperasse.

<em>"Pragmático. A maioria das pessoas que ouve isso pensa só no plano A."</em>

<em>"Se o plano A depende de eu ser perfeito,"</em> você diz, <em>"é bom ter um plano B."</em>

Ela explica: há uma alternativa. O Cristal pode ser selado — não destruído, mas aprisionado de novo — usando uma combinação do Escudo de Arveth e uma palavra de selamento que ela sabe.

<em>"É menos definitivo do que destruir. Mas mais seguro do que a alternativa de você tentar destruir no estado errado."</em>`,
        },
      ],
    },

    {
      id: 12,
      title: 'O Acampamento de Corvus',
      atmosphere: 'alliance',
      narrative: (G) => {
        const corvus_aliado = Engine.npcIs('corvus', 'aliado');
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        return `Na saída do Pântano, onde a lama finalmente volta a ser terra, há um acampamento.

${corvus_aliado ? `Corvus te esperava. Literalmente: sentado, com chá, olhando na direção de onde você viria como se soubesse exatamente quando você apareceria.` : `Um acampamento pequeno, bem escondido, com a fogueira posicionada para não projetar sombra visível à distância. Profissional.`}

${corvus_aliado ? `<em>"Demorou,"</em> ele diz, sem ironia perceptível.` : `O homem que se levanta para te receber tem o tipo de calma que vem de ter estado em lugares piores do que esse Pântano.`}

Corvus.

${lirien ? `Ele olha para Lirien com o reconhecimento de quem já ouviu o nome. <em>"A estudiosa de Greyvail. Ouvi falar."</em>

<em>"Espero que bem,"</em> ela diz.

<em>"Ouvi que você foi a única pessoa que chegou perto o suficiente de Malachar para entender o Cristal."</em>` : ''}

O mercenário tem informações que nenhum de vocês tem: a planta completa da Cidadela de Fogo. Ele a conseguiu de uma forma que ele prefere não detalhar — e você prefere não perguntar.

<em>"Há um problema,"</em> ele diz, abrindo o mapa sobre uma pedra plana. <em>"O General Voss sabe que você está vindo. Ele mudou os turnos de guarda. A entrada que existia não existe mais."</em>`;
      },
      choices: [
        {
          text: 'Planejar um ataque de distração enquanto alguém entra por baixo',
          subtext: 'Dividir a atenção é mais inteligente do que forçar uma entrada.',
          rep: 0,
          sc: { str: 12, mp: 8, kar: 5 },
          npc: {},
          flag: { plano_distração: true },
          item: null,
          gold: 0,
          outcome: `Vocês passam três horas em volta do mapa.

O plano final é limpo pelo padrão de planos perigosos: Corvus cria a distração pelo portão leste, Lirien (se estiver) vai pelo sistema de aquedutos com o mapa mental que ela tem da estrutura mágica, e você entra pelo portão sul quando a guarda se redistribuir.

<em>"O problema,"</em> diz Corvus, <em>"é que limpo pelo padrão de planos perigosos ainda é perigoso."</em>

<em>"Você toparia de outra forma?"</em> você pergunta.

<em>"Não,"</em> ele responde. E começa a preparar o equipamento.`,
        },
        {
          text: 'Usar a planta para encontrar a única entrada sem guarda',
          subtext: 'Às vezes existe uma porta que ninguém está guardando por razão.',
          rep: +5,
          sc: { mp: 15, lck: 10 },
          npc: {},
          flag: { entrada_secreta: true },
          item: null,
          gold: 0,
          outcome: `Você estuda o mapa até sua cabeça doer.

E então você vê. Há uma entrada que não está marcada como entrada — marcada como manutenção. Usada para levar pedra quando a Cidadela foi construída, selada depois, mas selada de dentro, o que significa que por fora não tem guarda porque ninguém sabe que existe por dentro.

<em>"Ninguém vai estar lá,"</em> você diz, <em>"porque ninguém sabe que deveria estar."</em>

Corvus olha onde você está apontando por um tempo longo.

<em>"Hm,"</em> ele diz. Que é, vindo de Corvus, o equivalente a um aplauso.`,
        },
        {
          text: 'Propor negociação com o General Voss antes de qualquer ataque',
          subtext: 'Mesmo generais têm limites de lealdade.',
          rep: +10,
          sc: { kar: 18, mp: 5 },
          npc: { general_voss: 'suspicioso' },
          flag: { tentou_negociar_voss: true },
          item: null,
          gold: 0,
          outcome: `<em>"Voss foi leal a Valdrun antes de Malachar,"</em> você diz. <em>"Essa lealdade não some — fica enterrada."</em>

Corvus te olha com a expressão de quem não acredita mas está curioso para ver como isso vai acabar.

Você manda uma mensagem via pássaro-mensageiro de Corvus: uma única linha, para o General Voss.

<em>"Eu sei o que você foi antes de se tornar o que é agora. Esse homem ainda existe?"</em>

A resposta chega em duas horas: uma única linha de volta.

<em>"Fachada norte. Meia-noite. Venha sozinho."</em>`,
        },
      ],
    },

    {
      id: 13,
      title: 'A Noite Antes da Cidadela',
      atmosphere: 'calm_before_storm',
      narrative: (G) => {
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        const fraqueza = Engine.hasFlag('sabe_fraqueza_malachar');
        const entende = Engine.hasFlag('entende_cristal');
        return `A Cidadela de Fogo é visível do acampamento.

Não porque seja próxima — é porque é grande o suficiente para ter seu próprio horizonte. As chamas que coroam as muralhas não se apagam com vento. São alimentadas por algo que não é combustível.

Você está sentado olhando para ela quando ${lirien ? 'Lirien senta ao seu lado sem fazer barulho' : 'o silêncio do campo se instala ao seu redor'}.

${lirien ? `<em>"Com medo?"</em> ela pergunta.

<em>"Sim,"</em> você responde sem hesitar.

<em>"Bom,"</em> ela diz. <em>"O medo significa que você sabe o que está fazendo."</em>

Ela fica em silêncio um pouco. E então: <em>"Posso te fazer uma pergunta?"</em>

<em>"Pode."</em>

<em>"Por que você está fazendo isso? Não a resposta bonita. A verdadeira."</em>` : `A pergunta que você faz para si mesmo: <em>por que está aqui?</em> E a resposta honesta que você não consegue evitar.`}

${fraqueza && entende ? `Você tem as informações. O Cristal de Alma. A condição para destruí-lo. O que falta agora é você ser a pessoa que consegue cumprir essa condição.

Ou encontrar uma forma de não precisar ser.` : !fraqueza ? `Você tem menos informações do que gostaria. Vai entrar naquela Cidadela na base do que tem — e torcer para ser suficiente.` : `Você tem as informações. O que não tem é certeza sobre si mesmo.`}`;
      },
      choices: [
        {
          text: 'Responder honestamente — e descobrir sua própria motivação dizendo em voz alta',
          subtext: 'Às vezes você só entende o que sente quando coloca em palavras.',
          rep: +10,
          sc: { kar: 12, mp: 8 },
          npc: { lirien: Engine.npcIs('lirien', 'aliada_profunda') ? 'aliada_profunda' : 'aliada' },
          flag: { resolveu_motivacao: true },
          item: null,
          gold: 0,
          outcome: `Você fala. A resposta sai não como um discurso mas como uma descoberta — cada frase revelando a próxima.

Você está aqui porque viu o que Malachar está fazendo às pessoas. Às famílias de Mireth. Ao Capitão Duren. À criança que Gareth perdeu. Ao irmão que quase morreu no Pântano.

Não é raiva. É algo mais quieto que raiva e mais profundo.

${Engine.npcIs('lirien', 'aliada_profunda') || Engine.npcIs('lirien', 'aliada') ? `Lirien ouve sem interromper.

<em>"Acho que você consegue tocar o Cristal,"</em> ela diz finalmente.

<em>"Por quê?"</em>

<em>"Porque você não quer que ele morra. Você quer que ele pare."</em>` : `Você fica com as palavras no ar, sem ninguém para ouvi-las exceto a noite.

Isso também serve.`}`,
        },
        {
          text: 'Usar essa noite para descansar — amanhã exige tudo que você tem',
          subtext: 'Heróis cansados cometem erros que heróis descansados não cometem.',
          rep: 0,
          sc: { hp: 20, mp: 15 },
          npc: {},
          flag: { descansou_antes_cidadela: true },
          item: null,
          gold: 0,
          outcome: `Você faz a coisa que parece errada mas é certa: dorme.

Não perfeitamente — o tipo de sono que vem com pesadelos que você não lembra ao acordar mas que deixam um resíduo emocional de coisas processadas. Mas você acorda com o corpo mais pesado de forma útil, o tipo de pesado que significa que algo foi resolvido em algum lugar.

${Engine.npcIs('lirien', 'aliada_profunda') || Engine.npcIs('lirien', 'aliada') ? `Lirien acendeu um fogo pequeno e está fazendo chá quando você acorda.

<em>"Bom descanso?"</em>

<em>"Suficiente."</em>

<em>"Suficiente funciona."</em>` : `Corvus já está acordado e pronto. Como sempre.`}`,
        },
        {
          text: 'Escrever uma carta para Mireth — caso você não volte',
          subtext: 'Quem vai a batalhas difíceis deve deixar palavras atrás.',
          rep: +15,
          sc: { kar: 18 },
          npc: {},
          flag: { escreveu_carta: true },
          item: null,
          gold: 0,
          outcome: `Você pega papel de Corvus e escreve uma carta para Gareth.

Não é uma carta bonita — você não é escritor. É direta. Fala sobre o irmão dele, sobre o que você encontrou no Pântano. Fala sobre Mireth e o que aquela comunidade significa para você mesmo tendo passado lá apenas uma noite.

Fala sobre o que você acha que vai acontecer amanhã, e sobre o que você espera que aconteça ao reino depois.

Você dobra a carta e escreve um nome na frente.

Corvus a aceita sem comentário. Você ambos sabem o que isso significa, e nenhum dos dois precisa dizer.`,
        },
      ],
    },

    {
      id: 14,
      title: 'O General Voss',
      atmosphere: 'confrontation',
      narrative: (G) => {
        const negociou = Engine.hasFlag('tentou_negociar_voss');
        const distração = Engine.hasFlag('plano_distração');
        const entrada_sec = Engine.hasFlag('entrada_secreta');
        if (negociou) {
          return `Meia-noite. Fachada norte da Cidadela.

O General Voss é maior em pessoa do que em reputação — e a reputação já era considerável. Um homem que foi feito de guerra, que deixou a guerra fazê-lo várias vezes, e que sobreviveu cada vez com algo diferente no rosto.

Ele vem sozinho. O que ou é um sinal de confiança ou é porque ele sabe que não precisa de ninguém.

<em>"Você é mais jovem do que eu esperava,"</em> ele diz.

<em>"Todos são,"</em> você responde.

Um momento.

<em>"Eu servi a Casa Valdrun por trinta e dois anos,"</em> ele diz, e a voz não muda de tom mas muda de textura. <em>"Quando Malachar surgiu, eu tinha uma escolha: morrer defendendo um rei morto, ou viver servindo ao que o matou."</em>

<em>"Você escolheu viver."</em>

<em>"Sim."</em>

<em>"E agora?"</em>

Ele olha para a Cidadela às suas costas por um tempo longo.`;
        }
        return `A abordagem da Cidadela é exatamente tão difícil quanto Corvus previu e exatamente tão possível quanto o mapa prometia.

${distração ? `A distração de Corvus funciona — explosões controladas na ala leste criam o caos calculado que redistribui a guarda.` : entrada_sec ? `A entrada de manutenção está onde o mapa dizia. Selada por dentro com uma magia que tinha séculos mas não tinha previsão de você.` : `Você força a entrada pelo ponto mais fraco do perímetro, com a combinação de sorte e competência que esses momentos exigem.`}

Você está dentro da Cidadela quando encontra o General Voss.

Não por acidente. Ele estava te esperando.

<em>"Eu sabia que você ia chegar,"</em> ele diz. Não há soldados com ele. <em>"E deixei chegar."</em>`;
      },
      choices: [
        {
          text: 'Confiar em Voss — aceitar o que ele está oferecendo',
          subtext: 'A redenção tem que ser possível, senão nada muda.',
          rep: +15,
          sc: { kar: 18, mp: 8 },
          npc: { general_voss: 'aliado' },
          flag: { voss_aliado: true },
          item: null,
          gold: 0,
          outcome: `<em>"O que você está oferecendo?"</em> você pergunta diretamente.

<em>"Uma rota até o salão do trono que não vai matar você antes de chegar lá. E os meus homens olhando para o outro lado."</em>

<em>"Por quê?"</em>

<em>"Porque trinta e dois anos de serviço a Valdrun pesam mais do que o medo,"</em> ele diz. <em>"Hoje."</em>

Você estende a mão. Ele a aperta com a força de quem não aperta mãos há muito tempo.

<em>"Malachar está no salão do trono. O Cristal fica no peito. Você vai saber o que fazer."</em>

Ele volta para sua posição sem olhar para trás.`,
        },
        {
          text: 'Neutralizar Voss — não dá para arriscar que seja uma armadilha',
          subtext: 'Cautela às vezes tem cara de crueldade.',
          rep: -10,
          sc: { str: 15, hp: -10 },
          npc: { general_voss: 'neutro' },
          flag: {},
          item: null,
          gold: 0,
          outcome: `Você age antes de ele terminar de falar.

Voss é bom — muito bom. Mas você é mais rápido, ou mais desesperado, que é parecido com rápido em resultado.

Ele está no chão, desarmado, sem ferimentos graves.

<em>"Erro,"</em> ele diz com calma impressionante para alguém no chão.

<em>"Talvez,"</em> você responde, e continua sem o que ele ia oferecer.

O caminho pelo resto da Cidadela vai ser mais difícil do que precisava ser.`,
        },
        {
          text: 'Testar Voss — dar a ele uma escolha real antes de decidir confiar',
          subtext: 'Confiança ganhar tem que ser diferente de confiança simplesmente concedida.',
          rep: +8,
          sc: { kar: 12, str: 5 },
          npc: { general_voss: 'aliado' },
          flag: { voss_aliado: true, testou_voss: true },
          item: null,
          gold: 0,
          outcome: `<em>"Prove,"</em> você diz.

<em>"Como?"</em>

<em>"Abra um caminho. Sozinho. Sem me dar informação que eu possa verificar depois — faça algo agora, aqui, que me mostre que você está do lado que diz estar."</em>

Voss te olha.

Então vai até a parede e aciona uma alavanca escondida. Uma passagem se abre.

<em>"Isso vai ao subsolo. Tem uma saída para o jardim interno — cinquenta metros do salão do trono. Não tem guarda porque Malachar acha que ninguém sobrevive ao jardim."</em>

<em>"E sobrevive?"</em>

<em>"Com o Escudo, talvez. Sem ele..."</em>

Ele não termina. Você entende.`,
        },
      ],
    },

    // ════ CENAS 15-19 — CIDADELA E CONFRONTO FINAL ══════
    {
      id: 15,
      title: 'Dentro da Cidadela',
      atmosphere: 'infiltration',
      narrative: (G) => {
        const voss = Engine.npcIs('general_voss', 'aliado');
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        return `A Cidadela de Fogo por dentro não tem fogo.

Tem escuridão com pontos de calor que parecem respirar. Tem corredores que mudam de proporção conforme você avança — não visivelmente, mas o modo como soa é diferente, e o eco não devolve exatamente o que você mandou.

Malachar fez isso com o lugar. Não é arquitetura — é humor.

${voss ? `A rota que Voss te deu é precisa. Você passa por três grupos de guarda sem ser visto porque os guardas estão exatamente onde ele disse que estariam, e os buracos estão exatamente onde ele disse que estariam.` : `Você navega pelos corredores no escuro e na velocidade — fazendo escolhas rápidas em cruzamentos, confiando em instinto mais do que em plano.`}

${lirien ? `Lirien vai ao seu lado. Ela detecta armadilhas mágicas antes delas se ativarem com uma habilidade que parece quase entediada.

<em>"Quinto corredor,"</em> ela sussurra. <em>"Tem uma armadilha de confusão. Vai fazer você ver alguém que você perdeu. Não interaja."</em>` : ''}

Você passa pelo quinto corredor.

Você vê alguém que perdeu.

Você não interage. Mas é difícil. É muito difícil.

No final do corredor: uma porta. Pesada. Quente.

Do outro lado: vozes.`;
      },
      choices: [
        {
          text: 'Ouvir as vozes antes de entrar — informação vale tempo',
          subtext: 'Os últimos metros são onde os planos mudam.',
          rep: +5,
          sc: { mp: 10, str: 5 },
          npc: {},
          flag: { ouviu_plano_malachar: true },
          item: null,
          gold: 0,
          outcome: `Você encosta o ouvido na madeira quente.

Duas vozes. Uma é Malachar — você sabe antes mesmo de processá-la, da forma que se sabe que algo é perigoso antes de o cérebro nomear o perigo.

A outra... você não reconhece. Mas o que ela diz congela algo em você:

<em>"O aventureiro chegou mais longe do que os outros. Isso confirma que o Cristal está funcionando como atrativo."</em>

Malachar responde: <em>"Deixe-o entrar. Eu quero ver quem é capaz de chegar até aqui."</em>

Pausa.

<em>"E se ele conseguir destruir o Cristal?"</em>

Malachar ri. E a risada não tem maldade — tem algo pior. Tem certeza.

<em>"Então ele vai descobrir o que acontece depois."</em>`,
        },
        {
          text: 'Entrar pela porta — o elemento surpresa ainda existe por um segundo',
          subtext: 'Depois do primeiro momento, tudo é reação.',
          rep: 0,
          sc: { str: 15, hp: -10 },
          npc: {},
          flag: { entrou_sem_preparar: true },
          item: null,
          gold: 0,
          outcome: `Você abre a porta.

O salão do trono é enorme — não pelo tamanho, mas pela forma como o espaço parece se expandir para acomodar o peso do que aconteceu aqui.

Malachar está no trono.

Ele não é o que você esperava. É apenas um homem — um homem muito velho, com olhos que contêm a experiência específica de alguém que fez um trato ruim e viveu mil anos com as consequências.

E no peito dele: o Cristal de Alma. Pulsando como coração.

Ele te olha sem surpresa.

<em>"Finalmente,"</em> ele diz.`,
        },
        {
          text: 'Usar magia para criar um caminho alternativo — entrar pelo teto',
          subtext: 'O inesperado confunde mais que o inevitável.',
          rep: +5,
          sc: { mp: 20, hp: -5, str: 5 },
          npc: {},
          flag: { entrada_dramatica: true },
          item: null,
          gold: 0,
          outcome: `Você sobe pelas paredes externas com magia de adesão e entra pelo vitral superior do salão.

A entrada é... dramática.

Malachar olha para você descendo do teto com a expressão de quem viu muitas coisas estranhas e está avaliando onde isso se encaixa na lista.

<em>"Isso é novo,"</em> ele diz.

${Engine.npcIs('lirien', 'aliada_profunda') || Engine.npcIs('lirien', 'aliada') ? `Lirien entra pela porta dois segundos depois, enquanto os guardas ainda estão olhando para cima.

<em>"Eficiente,"</em> ela comenta.` : ''}`,
        },
      ],
    },

    {
      id: 16,
      title: 'O Salão do Trono',
      atmosphere: 'confrontation',
      narrative: (G) => {
        const ouviu = Engine.hasFlag('ouviu_plano_malachar');
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        return `Malachar não ataca.

Isso é o que você não esperava.

O Rei-Dragão — e você vê agora que o nome é metáfora, que não há dragão, só um homem que deveria ter morrido há mil anos e não morreu — fica sentado no trono com as mãos abertas sobre os braços da cadeira. Como quem espera.

${ouviu ? `Você sabe que ele queria que você chegasse aqui. Esse conhecimento muda a dinâmica de uma forma que você ainda está processando.` : ''}

<em>"Sente-se,"</em> ele diz, apontando para uma cadeira que não estava lá há um segundo.

${lirien ? `Lirien fica de pé atrás de você, tensa mas silenciosa.` : ''}

<em>"Você tem perguntas,"</em> ele continua. <em>"Todo mundo que chega até aqui tem perguntas. Os que atacam imediatamente geralmente são os que têm mais medo das respostas."</em>

O Cristal de Alma pulsa no peito dele como uma ferida que cicatrizou em volta de algo estrangeiro.

Você tem uma janela: fazer perguntas agora, ou agir agora. Ambas as coisas têm consequências.`;
      },
      choices: [
        {
          text: 'Perguntar: "Você quer ser destruído?"',
          subtext: 'A pergunta mais direta é às vezes a mais corajosa.',
          rep: +15,
          sc: { kar: 20, mp: 10 },
          npc: { malachar: 'ambiguo' },
          flag: { perguntou_malachar: true, malachar_quer_fim: true },
          item: null,
          gold: 0,
          outcome: `A pergunta fica no ar por tempo suficiente para você se perguntar se foi longe demais.

Malachar fecha os olhos.

<em>"Há novecentos e quarenta e três anos eu fiz um trato,"</em> ele diz com a voz de quem está recitando algo memorizado não para não esquecer, mas para nunca parar de lembrar. <em>"Não queria poder. Queria tempo. Tempo para terminar o que tinha começado."</em>

<em>"E terminou?"</em>

Ele abre os olhos. E o que você vê lá é mais difícil de processar do que qualquer ataque.

<em>"Há muito tempo."</em>

Pausa.

<em>"Mas o trato não tem cláusula de encerramento voluntário."</em>`,
        },
        {
          text: 'Atacar o Cristal imediatamente — cada segundo de hesitação é uma cidade que pega fogo',
          subtext: 'O custo da inação é real e visível.',
          rep: -5,
          sc: { str: 20, hp: -20, mp: -10 },
          npc: { malachar: 'inimigo' },
          flag: { atacou_malachar: true },
          item: null,
          gold: 0,
          outcome: `Você avança.

Malachar se levanta — e o que você pensou que seria um homem se move como algo que não é.

A batalha no salão do trono é tudo que você esperava e nada que você estava preparado para de verdade. Cada golpe que você desfere é devolvido com milênios de prática por trás. Cada feitiço que você lança é absorvido por algo que existia antes dos feitiços terem nome.

Mas você não para.

Você não para porque parar não é uma opção.

E Malachar — após um tempo que parece vida inteira e durou talvez vinte minutos — hesita. Um segundo. Apenas um.

É o suficiente.`,
        },
        {
          text: 'Pedir a Malachar que voluntariamente libere o Cristal',
          subtext: 'Se ele quer fim, talvez possa escolher como esse fim chega.',
          rep: +20,
          sc: { kar: 25, mp: 15 },
          npc: { malachar: 'cooperativo' },
          flag: { malachar_cooperou: true },
          item: null,
          gold: 0,
          outcome: `<em>"Se você quer que acabe,"</em> você diz, <em>"me dê o Cristal."</em>

Silêncio.

<em>"Não é assim que funciona,"</em> ele responde.

<em>"Eu sei. Mas você já tentou de todas as outras formas há novecentos anos. Talvez a única que não tentou seja pedir para alguém."</em>

Malachar te olha com a expressão de alguém que está processando uma ideia que deveria ser óbvia mas nunca foi.

Lentamente — tão lentamente que você prende a respiração — ele abre a mão.

O Cristal flutua do peito dele até ficar suspenso entre vocês dois.`,
        },
      ],
    },

    {
      id: 17,
      title: 'O Cristal de Alma',
      atmosphere: 'climax',
      narrative: (G) => {
        const cooperou = Engine.hasFlag('malachar_cooperou');
        const entende = Engine.hasFlag('entende_cristal');
        const motivacao = Engine.hasFlag('resolveu_motivacao');
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        return `O Cristal de Alma de Malachar está a trinta centímetros da sua mão.

É menor do que você imaginou. Tem o tamanho de um punho fechado, é transparente como vidro mas com profundidade como água, e dentro dele — você olha e não consegue parar de olhar — há algo que se move.

A alma original de um homem. O que sobrou de quem ele foi antes de fazer um trato ruim.

${cooperou ? `Malachar está de pé à sua frente. Não ameaçador — esgotado. Da forma que alguém fica esgotado depois de novecentos e quarenta e três anos de algo que não deveria durar tanto.` : `Malachar está enfraquecido mas presente, observando o que você vai fazer com a atenção de alguém que desistiu de ter preferências.`}

${lirien ? `Lirien se coloca ao seu lado e diz baixo: <em>"Você sabe o que precisa. O estado certo. Se não estiver, me dá — eu tento."</em>` : ''}

${entende ? `Você sabe: se tocar o Cristal com raiva, com desejo de punição, com qualquer coisa que não seja simplesmente querer que isso pare — você se torna o próximo Malachar.` : `Há algo em volta do Cristal que parece avaliar. Não magicamente — psicologicamente. Como se o objeto soubesse a diferença entre intenções.`}

${motivacao ? `Você resolveu sua motivação ontem à noite. Você sabe por que está aqui. A questão agora é se você consegue manter isso enquanto toca o Cristal.` : `A questão agora é: o que você quer de verdade aqui? A resposta importa mais do que qualquer técnica.`}

Você estende a mão.`;
      },
      choices: [
        {
          text: 'Tocar o Cristal querendo que tudo pare — não que Malachar sofra',
          subtext: 'A intenção certa no momento certo.',
          rep: +20,
          sc: { kar: 20, mp: 15, hp: -10 },
          npc: { malachar: 'em_paz' },
          flag: { cristal_destruido_certo: true },
          item: null,
          gold: 0,
          outcome: `Você toca o Cristal.

O que você sente é difícil de descrever — não dor, mas pressão. O Cristal avaliando o que você carrega. Procurando raiva e não encontrando. Procurando ambição e não encontrando. Procurando vingança — e encontrando apenas o desejo de que as cidades do norte parem de queimar.

O Cristal aquece na sua mão.

E então — simplesmente, sem drama proporcional ao que representa — racha.

Malachar faz um som que não é grito e não é suspiro. E começa a desaparecer. Não como poeira — como névoa com a luz saindo. Como alguém que finalmente pode ir embora.

<em>"Obrigado,"</em> ele diz. Ou algo que parece isso. As palavras já estão ficando difusas.`,
        },
        {
          text: 'Dar o Cristal a Lirien — ela tem a intenção certa, você não tem certeza sobre a sua',
          subtext: 'Conhecer seus próprios limites é também uma forma de sabedoria.',
          rep: +15,
          sc: { kar: 15, mp: 10 },
          npc: { lirien: 'aliada_profunda' },
          flag: { lirien_destruiu_cristal: true },
          item: null,
          gold: 0,
          outcome: `Você fecha a mão em volta do Cristal e o estende para Lirien.

Ela te olha com algo que parece surpresa.

<em>"Você teve que vir até aqui para não fazer isso?"</em> ela pergunta.

<em>"Tinha que ver se conseguia. Não consigo."</em>

Lirien pega o Cristal.

O que acontece em seguida você vê no rosto dela — não dor, mas esforço. O esforço específico de sentir algo horrível que foi feito e não desejar que quem fez sofra por isso.

O Cristal racha.

Malachar fecha os olhos.

Lirien fica de pé, tremendo levemente, com fragmentos de Cristal na palma aberta.`,
        },
        {
          text: 'Usar o Escudo de Arveth para selar o Cristal em vez de destruí-lo',
          subtext: 'A solução mais segura quando você não tem certeza do resto.',
          rep: +10,
          sc: { mp: 20, str: 8 },
          npc: { malachar: 'selado' },
          flag: { malachar_selado: true },
          item: null,
          gold: 0,
          outcome: `Você pega o Cristal — e imediatamente ergue o Escudo de Arveth entre o Cristal e seu próprio peito.

A magia do Escudo envolve o Cristal como maré. O Cristal resiste — e então cede, não para você, mas para o peso de Arveth que o Escudo carrega.

O Cristal congela. Literalmente: fica suspenso em âmbar de luz, inerte, selado.

Malachar — sem o Cristal pulsando no peito — começa a envelhecer. Novecentos e quarenta e três anos em questão de minutos. Não é horror — é alivio, visivelmente.

<em>"Suficiente,"</em> ele diz, e se senta no trono pela última vez.`,
        },
      ],
    },

    {
      id: 18,
      title: 'As Consequências',
      atmosphere: 'aftermath',
      narrative: (G) => {
        const destruido = Engine.hasFlag('cristal_destruido_certo');
        const lirien_destruiu = Engine.hasFlag('lirien_destruiu_cristal');
        const selado = Engine.hasFlag('malachar_selado');
        const voss = Engine.npcIs('general_voss', 'aliado');
        const corvus = Engine.npcIs('corvus', 'aliado');
        const rep = Engine.state.reputation;

        let resultado = '';
        if (destruido || lirien_destruiu) {
          resultado = `O Cristal está destruído. Malachar foi embora.

O que acontece na Cidadela é imediato: as chamas nas muralhas se apagam. Não gradualmente — de uma vez. O silêncio que fica é o tipo que só existe quando algo que estava fazendo barulho há muito tempo finalmente para.`;
        } else if (selado) {
          resultado = `O Cristal está selado. Malachar envelheceu para além do possível e parou.

As chamas nas muralhas diminuem mas não apagam completamente. A Cidadela respira diferente — não livre, mas menos oprimida.`;
        } else {
          resultado = `O que aconteceu, aconteceu.

As consequências se espalham pela Cidadela como água em solo seco.`;
        }

        return `${resultado}

${voss ? `Voss aparece na entrada do salão. Ele olha para o trono vazio — ou onde Malachar estava — por um tempo longo.

<em>"O que acontece agora?"</em> ele pergunta.

<em>"Isso é uma pergunta para quem ficar aqui,"</em> você responde. <em>"E eu acho que esse alguém é você."</em>` : ''}

${corvus ? `Corvus está na saída com dois cavalos.

<em>"Habitual,"</em> você diz.

<em>"Eficiência,"</em> ele responde.` : ''}

Lá fora, no campo que circunda a Cidadela, pessoas começam a sair dos esconderijos. Dos porões. Dos lugares onde se esconde de algo que durou muito tempo.

Elas olham para o céu onde as chamas não estão mais.

${rep >= 50 ? `E algumas delas te reconhecem — de Kael, de Mireth, de histórias que já viajaram mais rápido do que você. Elas te olham como se olham para coisas que não acreditavam que existiam.` : rep <= -20 ? `Elas te olham com a expressão de quem não tem certeza do que acabou de ser salvo ou do que acabou de ser colocado no lugar.` : `Elas simplesmente ficam de pé e respiram o ar que pela primeira vez em muito tempo tem o cheiro de possibilidade.`}`;
      },
      choices: [
        {
          text: 'Ficar na Cidadela para ajudar a reconstrução',
          subtext: 'Acabar uma guerra é diferente de construir a paz.',
          rep: +15,
          sc: { kar: 20, hp: 10 },
          npc: {},
          flag: { ficou_para_reconstruir: true },
          item: null,
          gold: 0,
          outcome: `Você não vai embora.

As semanas seguintes são diferentes de tudo que veio antes — não o tipo de diferente que é dramático, mas o tipo que é necessário. Você ajuda com decisões que ninguém mais quer tomar. Ouve brigas que precisam de alguém de fora para arbitrar. Garante que os refugiados de Mireth tenham onde ir antes de deixar de ser necessário aqui.

Não é glória. É trabalho.

Mas no final de três semanas, quando você sai, há algo que não existia quando você chegou: um começo.`,
        },
        {
          text: 'Ir para Mireth contar pessoalmente o que aconteceu',
          subtext: 'As pessoas que te ajudaram merecem saber.',
          rep: +20,
          sc: { kar: 25 },
          npc: {},
          flag: { voltou_mireth: true },
          item: null,
          gold: 0,
          outcome: `Você vai a Mireth antes de qualquer outra coisa.

Gareth está na entrada da aldeia quando você aparece — como se estivesse esperando, mas tentando não parecer.

Você fala. A aldeia ouve.

Quando você termina, há um silêncio que é diferente do silêncio do medo. É o silêncio de pessoas processando que o futuro agora contém possibilidades que ontem não existiam.

Gareth estreita você sem aviso e sem desculpa.

<em>"Você não precisava vir,"</em> ele diz.

<em>"Precisava,"</em> você responde.`,
        },
        {
          text: 'Partir sozinho — sua parte está feita',
          subtext: 'Não toda vitória exige um discurso.',
          rep: +5,
          sc: { hp: 15, str: 5 },
          npc: {},
          flag: { partiu_sozinho: true },
          item: null,
          gold: 10,
          outcome: `Você vai embora antes que alguém pense em dar discurso.

A estrada que se abre à sua frente não tem destino específico — o que é, você percebe ao caminhar, exatamente o que você queria.

Atrás de você: o reino começa o processo longo e desorganizado de se tornar ele mesmo novamente.

À sua frente: o próximo horizon.

Você não olha para trás. Não porque o que ficou não importa — mas porque olhar para frente requer toda a atenção disponível.`,
        },
      ],
    },

    {
      id: 19,
      title: 'O Destino que Você Construiu',
      atmosphere: 'denouement',
      narrative: (G) => {
        const rep = Engine.state.reputation;
        const lirien = Engine.npcIs('lirien', 'aliada') || Engine.npcIs('lirien', 'aliada_profunda');
        const corvus = Engine.npcIs('corvus', 'aliado');
        const elderwyn = Engine.npcIs('elderwyn', 'aliada');
        const ficou = Engine.hasFlag('ficou_para_reconstruir');
        const voltou = Engine.hasFlag('voltou_mireth');
        const partiu = Engine.hasFlag('partiu_sozinho');
        const escreveu = Engine.hasFlag('escreveu_carta');

        let epilogo = '';
        if (ficou) {
          epilogo = `Três meses depois, Kael tem um prefeito eleito pela primeira vez em quarenta anos. A eleição foi uma bagunça produtiva de pessoas descobrindo o que querem de um governo. Você foi consultado em pelo menos uma decisão por dia e recusou qualquer cargo.`;
        } else if (voltou) {
          epilogo = `Mireth, dois anos depois, duplicou de tamanho. Não por guerra — por escolha. Pessoas que ouviram falar de uma aldeia onde o povo se uniu e sobreviveu foram até lá para ajudar a construir.`;
        } else if (partiu) {
          epilogo = `A estrada te levou a outros lugares, outras histórias. O seu nome chegou antes de você — sempre há alguém que conhece alguém que estava em Kael quando o portão se abriu, ou em Mireth quando a notícia chegou.`;
        }

        return `O reino de Valdrun não voltou ao que era.

Nunca volta. Esse é o segredo que as histórias de heróis raramente mencionam: o mundo depois da crise não é o mundo antes dela com o monstro removido. É um mundo diferente, moldado por o que aconteceu, carregando as marcas de tudo que foi perdido e tudo que foi encontrado.

${epilogo}

${lirien ? `Lirien voltou a Greyvail. Ela manda cartas — curtas, precisas, com a handwriting de quem escreve rápido porque tem muita coisa para dizer e pouco tempo para dizer. A última termina com: <em>"O próximo problema está a nordeste de Greyvail e vai precisar de alguém com habilidades específicas. Caso você esteja por perto."</em>` : ''}

${corvus ? `Corvus desapareceu. Naturalmente. Mas uma vez, em uma cidade sem nome a duzentos quilômetros de Kael, você encontra um trabalho já feito que tem a precisão específica dele. Você sorri para ninguém em particular.` : ''}

${elderwyn ? `Elderwyn mandou uma mensagem via corvo — a mesma forma que sua aventura começou, o que parece apropriado. A mensagem diz apenas: <em>"Bem feito. Agora descanse."</em> Você descansa. Por uma semana. Aí o próximo corvo chega.` : ''}

${escreveu ? `A carta que você escreveu antes da Cidadela chegou ao destino. Gareth a guarda dobrada no bolso do avental. Às vezes, quando alguém perguntar sobre o que aconteceu com Malachar, ele tira a carta e lê um pedaço.` : ''}

O que você construiu aqui não é um legado — é um começo.

E começos, você aprendeu, são suficientes.`;
      },
      choices: [
        {
          text: 'Aceitar o que veio — tanto o peso quanto a liberdade',
          subtext: 'A jornada define o destino tanto quanto o destino define a jornada.',
          rep: +10,
          sc: { kar: 10, hp: 10, mp: 10 },
          npc: {},
          flag: { aceitou_jornada: true },
          item: null,
          gold: 0,
          outcome: `Há um momento, em algum lugar entre onde você estava e onde está, em que você para.

Não porque está cansado. Porque quer sentir o peso específico desse momento antes que ele se torne memória.

O que você fez não foi perfeito. Você deixou coisas para trás que não deveria ter deixado, tomou decisões que não tomaria de novo, foi mais lento ou mais rápido do que a situação pedia em pelo menos uma ocasião.

Mas aqui está você. E o mundo está diferente por causa disso.

Às vezes é o suficiente. Às vezes é mais do que isso.

<em>Fim do Capítulo IV.</em>`,
        },
        {
          text: 'Pensar no que aprendeu sobre si mesmo — não sobre Malachar',
          subtext: 'A maior vitória sempre é sobre quem você era antes de começar.',
          rep: +15,
          sc: { kar: 15, mp: 10 },
          npc: {},
          flag: { reflexao_final: true },
          item: null,
          gold: 0,
          outcome: `A pergunta mais honesta não é: <em>venci?</em>

É: <em>quem sou agora que não era quando comecei?</em>

Você começou como aventureiro sem nome e sem história. Mas a história é exatamente o que você coletou ao longo do caminho — em Kael, no portão; em Mireth, ao redor do fogo; no Pântano, no escuro; no salão do trono, com o Cristal na mão.

Você aprendeu que o medo não é o oposto da coragem — é o material do qual a coragem é feita.

Que as intenções importam mais do que as técnicas.

Que ajudar uma criança perdida no portão de uma cidade cercada pode mudar mais coisas do que qualquer batalha.

<em>Fim do Capítulo IV.</em>`,
        },
        {
          text: 'Olhar para o próximo horizonte — isso foi um começo, não um fim',
          subtext: 'Há sempre mais mundo do que o que você já viu.',
          rep: +5,
          sc: { str: 10, kar: 10, lck: 10 },
          npc: {},
          flag: { proximo_horizonte: true },
          item: null,
          gold: 0,
          outcome: `Você olha para o norte — que agora, pela primeira vez em meses, não tem fumaça.

E para o leste, onde as montanhas guardam segredos que nenhum mapa registrou ainda.

E para o sul, onde dizem que há uma cidade submersa que ressurge uma vez a cada século, e esse século está chegando.

O corvo que te trouxe aqui foi um começo. E começos, você percebe, raramente chegam sozinhos.

O próximo já está a caminho.

<em>Fim do Capítulo IV — e talvez o início do próximo.</em>`,
        },
      ],
    },

  ], // fim scenes

  // ── Finais (22) ──────────────────────────────────────
  endings: [
    { id:'lenda',      title:'O Herói Lendário',       type:'heroico',    emoji:'👑', color:'#c9a84c',
      cond: (s,r,f,n) => s.hp>=70 && s.str>=60 && s.kar>=60 && r>=50,
      text: (G) => `Os bardos não precisaram inventar nada sobre ${G.heroName}.

A verdade já era boa o suficiente.

Em Kael, a criança que você salvou no portão cresceu para ser escriba e documentou cada escolha que você fez naqueles dias — com a precisão de alguém que estava presente em um ponto de inflexão histórica. O documento foi copiado cinquenta vezes antes do fim do ano.

Em Mireth, seu nome é dito com o mesmo tom que se diz "inverno" ou "colheita" — não como homenagem, mas como parte da paisagem do possível.

No salão do trono de Kael, reformado pelos cidadãos que finalmente elegeram seus próprios governantes, há uma única peça de arte: não uma estátua sua, não um retrato. É uma janela. Com a vista para o norte — onde as chamas costumavam estar.

Chamam a janela pelo seu nome.

Você descobriu, nessa jornada, que herói não é uma identidade. É uma escolha que se faz repetidamente, até que as escolhas começam a fazer você.` },
    { id:'libertador', title:'O Libertador do Povo',   type:'heroico',    emoji:'🔓', color:'#0C7C59',
      cond: (s,r,f,n) => s.kar>=75 && r>=30,
      text: (G) => `${G.heroName} não libertou o reino com espadas.

Libertou com presença.

A diferença entre um tirano e um libertador não está nas batalhas que vence — está em o que deixa em pé quando vai embora. Você deixou estruturas. Você deixou pessoas que sabiam como se organizar sem que alguém do exterior lhes dissesse o que fazer.

Isso é mais difícil do que qualquer batalha com Malachar.

Kael elegeu um conselho de cidadãos. Mireth tornou-se modelo para outras aldeias. O General Voss, com sua lealdade finalmente apontando na direção certa, ajudou a criar uma guarda que serve às cidades, não aos poderes que as controlam.

Você foi embora antes de qualquer um disso estar completo. Não por impaciência — por sabedoria.

A melhor liberdade é aquela que não precisa de você para continuar funcionando.` },
    { id:'arquimago',  title:'O Arquimago Supremo',     type:'heroico',    emoji:'🔮', color:'#7b52d9',
      cond: (s,r,f,n) => s.mp>=80 && s.str<50,
      text: (G) => `A Torre de Greyvail nunca ficou satisfeita com ${G.heroName}.

Não porque o que você fez foi insuficiente — mas porque o que você sabe agora não cabe nas categorias que a Torre construiu para organizar o conhecimento.

A floresta te contou coisas. O Cristal de Alma te deixou sentir o que um milênio de consciência aprisionada sente. Arveth te mostrou que há sistemas mágicos que antecederam qualquer tradição que a Torre considera fundacional.

Você construiu uma sala de estudos num lugar que não está em nenhum mapa. Pesquisadores chegam até você por recomendação — nunca por convite, porque você nunca convida. Os que encontram o caminho, encontram por mérito.

O conhecimento que você acumulou vai mudar como a magia é praticada.

Em cem anos.

Você está bem com isso.` },
    { id:'rei',        title:'O Rei Diplomata',         type:'heroico',    emoji:'⚜️', color:'#185FA5',
      cond: (s,r,f,n) => s.kar>=70 && s.hp>=50 && r>=40,
      text: (G) => `Ninguém pediu para ${G.heroName} ficar.

Mas quando o caos que vem depois de uma era terminar começou — e ele sempre vem, o caos depois — havia uma pessoa que as facções opostas conseguiam concordar em ouvir.

Você.

Não porque você queria poder. Exatamente porque não queria.

O processo foi lento. Três meses de negociações que pareciam não ir a lugar nenhum seguidos de uma semana em que tudo se encaixou de uma vez. Um conselho foi formado. Você preside — temporariamente, até que um sistema melhor seja construído.

Temporariamente já dura dois anos.

Você é mau nisso — na parte de ter poder. Mas é bom na única coisa que importa: fazer com que as pessoas na sala ouçam umas às outras em vez de apenas esperarem sua vez de falar.

O reino não tem rei. Tem um processo.

Você considera isso uma vitória maior do que qualquer batalha.` },
    { id:'guerreiro',  title:'O Guerreiro Imortal',     type:'heroico',    emoji:'⚔️', color:'#D85A30',
      cond: (s,r,f,n) => s.str>=70 && s.hp>=60 && s.mp<45,
      text: (G) => `As cicatrizes de ${G.heroName} têm endereços.

Esta, de Arveth. Esta, do Pântano dos Perdidos. Esta — a mais profunda — do salão do trono, do último minuto com Malachar quando o Rei-Dragão decidiu que ia levar um de vocês junto.

Você sobreviveu porque você sempre sobrevive. Não por invulnerabilidade — por recusa. Há uma qualidade em você que se recusa a dobrar mesmo quando tudo indica que dobrar seria o correto.

Isso tem custos. Você carrega todos eles.

Mas os soldados que te viram em frente à Cidadela de Fogo — e os que estavam do lado errado que te viram não parar mesmo depois de ser atingido — esses soldados contam a história. Há uma versão onde você virou lenda na sua própria vida.

Você não se importa com lenda.

Você se importa com a próxima batalha que alguém vai precisar que você apareça.` },
    { id:'equilibrio', title:'O Mestre do Equilíbrio',  type:'heroico',    emoji:'⚖️', color:'#BA7517',
      cond: (s,r,f,n) => Math.abs(s.str-s.mp)<20 && Math.abs(s.mp-s.kar)<20 && s.hp>=50,
      text: (G) => `A raridade de ${G.heroName} não estava no poder — estava na ausência de especialização.

Você não era o melhor guerreiro que foi a Arveth. Nem o mago mais habilidoso que enfrentou Malachar. Nem o diplomata mais carismático que os soldados de Helmrath encontraram.

Mas você era capaz de cada uma dessas coisas no momento em que cada uma era necessária.

Isso é mais difícil do que parece. Especialização é confortável — ela te diz quem você é. Equilíbrio exige que você saiba quem você é sem depender de uma habilidade para te definir.

Em Greyvail, há um novo curso na Torre. Chama-se Abordagem Integrada. O texto de base é uma transcrição de tudo que você fez, em ordem, com análise de por que cada escolha foi a escolha naquele momento.

Você nunca vai ler. Mas Lirien disse que é bom.` },
    { id:'anjo',       title:'O Anjo da Redenção',      type:'heroico',    emoji:'✨', color:'#2e8b57',
      cond: (s,r,f,n) => s.hp>=80 && s.kar>=55 && s.mp>=55 && r>=60,
      text: (G) => `A coisa que definiu ${G.heroName} não foi o que fez com Malachar.

Foi o que fez antes de chegar lá.

A criança no portão de Kael. O irmão de Gareth no Pântano. Lirien na gaiola. A decisão de ouvir Elderwyn até o fim. A carta escrita para Mireth antes da Cidadela.

Cada uma dessas escolhas foi feita sem calcular retorno. Sem pensar em como ficaria na história. Sem saber se haveria história para contar.

Isso é o que as pessoas lembram. Não o confronto com Malachar — que foi real e importante — mas os gestos pequenos que não tinham audiência.

Em Mireth, a criança da mulher refugiada que você defendeu na rua de Kael cresceu com sua história. Ela se tornou guardiã de refugiados. Ela cuidou de setenta e três famílias no inverno seguinte.

Setenta e três famílias que existem por uma corrente de atos que começou com você escolhendo o certo sem razão calculada.` },
    { id:'sombra',     title:'O Guardião das Sombras',  type:'misterioso', emoji:'🌑', color:'#534AB7',
      cond: (s,r,f,n) => s.mp>=65 && s.kar>=50 && s.hp<60,
      text: (G) => `Ninguém sabe exatamente o que ${G.heroName} fez na Cidadela de Fogo.

Os relatos contradizem uns aos outros nos pontos específicos. Alguns dizem que você lutou abertamente. Outros que você foi invisível até o momento decisivo. Outros ainda que você nunca chegou perto de Malachar — que o que destruiu o Cristal foi algo que você colocou em movimento antes de entrar.

Isso é intencional.

Você percebeu, em algum ponto do caminho, que o trabalho mais eficiente é o que ninguém vê sendo feito. Que a proteção mais duradoura opera antes das ameaças se tornarem crises.

Você continua operando. Nas margens do que as cidades sabem que está acontecendo.

Há um novo perigo formando-se a nordeste. Você já está lá há duas semanas.

Ninguém sabe.` },
    { id:'oraculo',    title:'O Oráculo Eterno',        type:'misterioso', emoji:'👁️', color:'#3C3489',
      cond: (s,r,f,n) => s.mp>=85,
      text: (G) => `O que a floresta mostrou a ${G.heroName}, e o que o Cristal de Alma transmitiu ao ser destruído, e o que as runas de Arveth gravaram na memória durante aquelas horas de decifração — o conjunto disso ultrapassou o que uma mente humana foi projetada para conter.

Não de forma catastrófica. De forma transformadora.

Você ainda é você. Mas você agora contém perspectivas de tempo que a maioria das pessoas nunca terá acesso.

Você viu o fim de Malachar antes de ele acontecer. Você viu o início do que vem depois. E algumas coisas além das quais você preferiu não olhar.

Reis enviam mensageiros. Você responde quando considera relevante.

Não é arrogância — é economia de atenção. Há perguntas mais interessantes do que política de curto prazo.

A próxima era começou. Você é um dos poucos que sabe exatamente quando.` },
    { id:'foragido',   title:'O Foragido Lendário',     type:'misterioso', emoji:'🌫️', color:'#666460',
      cond: (s,r,f,n) => s.str>=40 && s.hp<45 && s.kar>=40,
      text: (G) => `${G.heroName} sumiu.

Não de forma dramática — simplesmente parou de aparecer nos lugares onde as pessoas esperavam que aparecesse. O Capitão Duren enviou mensageiros. Elderwyn tentou via corvo. Até Corvus, que não procura ninguém, fez uma exceção.

Nada.

Há avistamentos. Uma figura com a descrição vaga que combina com você foi vista em três países diferentes na mesma semana — impossível, o que significa que pelo menos dois dos avistamentos são projeção de pessoas que querem ver.

O terceiro pode ser real.

A ausência que você deixou tem o formato de sua presença. As pessoas que você ajudou seguem adiante mais confiantes porque um dia alguém apareceu e fez o que precisava ser feito sem ficar para receber crédito.

Esse é o legado do foragido: o que fica quando você vai embora.` },
    { id:'espectro',   title:'O Espírito Vingativo',    type:'misterioso', emoji:'👻', color:'#26215C',
      cond: (s,r,f,n) => s.hp<=20 && s.mp>=55,
      text: (G) => `${G.heroName} entrou na Cidadela de Fogo com menos vida do que deveria.

Saiu com menos ainda.

O que exatamente aconteceu no salão do trono — o que você fez, o que custou — não está nos relatos públicos. Está nos sussurros. Na versão que os guardas que estavam lá contam apenas uma vez, para pessoas em quem confiam, com a voz de quem não tem certeza se o que viu foi real.

Você existe agora de uma forma diferente.

Não morto. Não exatamente vivo, no sentido convencional. Em algum ponto entre os dois onde a magia que habitou você por tanto tempo criou algo que os textos de Greyvail vão chamar de Estado de Persistência.

Você assombra — mas não de forma hostil. Você aparece onde é necessário. Onde o mal está se formando antes de ser visível. Onde alguém precisa de proteção que nenhum ser físico pode oferecer.

O Pântano dos Perdidos tem menos criaturas hostis desde que você passou por lá. A floresta dos Sussurros mais segura. Kael dorme melhor.

Ninguém consegue explicar por quê.` },
    { id:'ermitao',    title:'O Ermitão Sábio',         type:'neutro',     emoji:'🏔️', color:'#0F6E56',
      cond: (s,r,f,n) => s.mp>=60 && s.kar<40 && s.str<40,
      text: (G) => `${G.heroName} encontrou um lugar.

Não um lugar famoso. Um lugar correto — com a qualidade de luz específica em certas horas e a temperatura do vento que parece calculada para o tipo de concentração que você precisa para continuar estudando o que a floresta mostrou e o que Arveth revelou.

Peregrinos chegam. Poucos chegam ao lugar certo. Os que chegam passam por um processo que funciona como filtro não intencional: a jornada até você só é completada por quem tem a qualidade de persistência que torna a conversa valendo.

Você não faz segredo do conhecimento — você compartilha tudo que sabe.

O que é raro é encontrá-lo.

Greyvail mandou um delegado oficial pedindo que você voltasse para ensinar na Torre.

Você mandou de volta uma mensagem com três páginas de notas de pesquisa e nenhuma resposta à pergunta.` },
    { id:'mercenario', title:'O Mercenário Lendário',   type:'neutro',     emoji:'💰', color:'#633806',
      cond: (s,r,f,n) => s.str>=45 && s.kar>=45 && s.hp<50,
      text: (G) => `${G.heroName} enviou uma fatura.

Para o Conselho Provisório de Kael. Itemizada, razoável, com descrições que eram diplomaticamente vagas nos pontos onde "neutralização de soldados de Helmrath" seria a descrição precisa.

O Conselho pagou sem reclamar, porque qualquer valor era barato para o que foi feito.

Você pegou o dinheiro e foi embora, o que é exatamente o que você disse que ia fazer.

O que as pessoas esquecem sobre mercenários competentes: eles têm reputação que precisam proteger. Você cumpriu o trabalho. Mais do que cumpriu — foi além onde precisava ser. Não por altruísmo, mas porque trabalho mal feito é publicidade ruim.

O próximo trabalho chegou via Corvus — que tem fontes que você prefere não questionar.

Valdrun está mais seguro. Você está mais rico.

Ambas as coisas parecem corretas.` },
    { id:'exilado',    title:'O Exilado Glorioso',      type:'neutro',     emoji:'🌅', color:'#5F5E5A',
      cond: (s,r,f,n) => s.str>=50 && s.kar<35 && s.hp>=40,
      text: (G) => `${G.heroName} fez o que fez e foi embora antes que alguém pudesse transformar isso em algo que não era.

Você conhece o ciclo: herói faz coisa importante, herói vira símbolo, símbolo vira propaganda, propaganda não tem nada a ver com a pessoa.

Você recusou o símbolo antes de ele ter tempo de se formar.

Não sem custo — há gente em Kael que acha que você os abandonou. Há uma versão de você nos relatos que é arrogante, orgulhosa, incapaz de conexão.

Essa versão não é toda a verdade. Mas não é toda mentira também.

Você vive além das fronteiras do que os mapas de Valdrun consideram território. O que está lá fora é mais interessante do que o que ficou para trás, e você tem habilidades que funcionam em qualquer contexto.

Você não é um exilado por punição. É por escolha. A diferença parece pequena de fora.

Por dentro é tudo.` },
    { id:'viajante',   title:'O Viajante Solitário',    type:'neutro',     emoji:'🗺️', color:'#888780',
      cond: (s,r,f,n) => true,
      text: (G) => `${G.heroName} era apenas alguém que estava lá quando era necessário estar.

Não é um final ruim. É, na verdade, mais raro do que parece: a maioria das pessoas que está no lugar certo na hora certa está lá por acidente ou por ambição. Você estava lá porque apareceu.

Malachar foi derrotado, contido, redimido — qualquer que seja a palavra correta para o que aconteceu no salão do trono. O mundo continua sendo o tipo de lugar onde coisas terríveis acontecem e onde pessoas aparecem para fazer o que pode ser feito.

Você foi uma dessas pessoas.

A estrada que você toma agora não tem nome ainda. Não foi suficientemente percorrida.

Você é o tipo de pessoa que prefere estradas assim.` },
    { id:'martir',     title:'O Mártir Sagrado',        type:'tragico',    emoji:'🕯️', color:'#993C1D',
      cond: (s,r,f,n) => s.hp<=30 && s.kar>=55 && r>=20,
      text: (G) => `${G.heroName} sabia.

Não de forma dramática, não com visão profética. Sabia da forma que se sabe quando o corpo tem informações que a cabeça não processou ainda: que entrar na Cidadela com as condições em que estava, com o que encontrou no Pântano, com o que custou em Arveth — que isso tinha um preço que provavelmente era mais alto do que o que restava.

Você foi assim mesmo.

A carta para Mireth chegou. Gareth a leu para a aldeia no dia em que a notícia chegou. Depois guardou cuidadosamente.

A criança do portão de Kael, anos depois, vai visitar o lugar onde você foi visto pela última vez e ficar lá por um tempo que parece mais do que curiosidade.

Estátuas não sangram. Mas às vezes, nas noites mais frias, as pessoas que passam perto da sua memória ficam um pouco mais quentes do que deveriam.` },
    { id:'sacrificio', title:'O Grande Sacrifício',     type:'tragico',    emoji:'🩸', color:'#993556',
      cond: (s,r,f,n) => s.kar>=60 && s.hp<=25 && r>=10,
      text: (G) => `No salão do trono, com o Cristal na mão e Malachar à sua frente, havia uma escolha que não estava nas opções que você pensou que teria.

O Cristal precisava de intenção pura para destruir. Você tinha intenção pura. Mas o corpo não tinha mais o suficiente para sobreviver ao que o Cristal faria com quem o destruísse no estado de pureza completa.

${G.heroName} tocou o Cristal com a intenção certa.

A vitória foi completa. As chamas nas muralhas apagaram. O reino começou seu processo irregular e humano de reconstrução.

Elderwyn, quando soube, ficou em silêncio por um tempo longo.

<em>"Era o tipo de pessoa que o mundo produz raramente,"</em> ela disse finalmente. <em>"E usa rapidamente."</em>

Isso não é crítica. É observação. O mundo usa o que tem.

O nome de ${G.heroName} não está em estátuas. Está em algo mais permanente: nas escolhas que as pessoas de Mireth fazem quando ninguém está olhando, moldadas por uma presença que passou rápido mas deixou impressão duradoura.` },
    { id:'berserker',  title:'O Berserker Caído',       type:'tragico',    emoji:'💀', color:'#791F1F',
      cond: (s,r,f,n) => s.str>=65 && s.hp<=35,
      text: (G) => `${G.heroName} entrou na Cidadela de Fogo no estado que guerreiros chegam quando levaram longe demais.

Não raiva — além da raiva. O lugar onde a raiva queima tão completa que o que resta é só movimento.

A batalha no salão do trono durou mais do que deveria. Malachar — que era mil anos de algo — aprendeu rapidamente que forçar o confronto direto era erro, e recuou para posição defensiva.

Você avançou de qualquer forma.

O que aconteceu depois está nos relatos dos guardas que sobreviveram: uma figura que não parou. Que absorveu o que seria fatal para qualquer pessoa em condições normais. Que chegou.

E caiu.

Mas o Cristal estava destruído. Malachar havia ido. O custo foi pago com a moeda que você tinha.

Em Kael há um monumento. Não bonito — honesto. Uma armadura amassada num pedestal de pedra bruta. A placa diz apenas: <em>Foi suficiente.</em>` },
    { id:'traidor',    title:'O Traidor Coroado',       type:'tragico',    emoji:'🗡️', color:'#A32D2D',
      cond: (s,r,f,n) => s.kar>=65 && r<-10 && s.str<30 && s.mp<30,
      text: (G) => `${G.heroName} entrou na Cidadela de Fogo com o objetivo de acabar com Malachar.

Saiu com um cargo.

A sequência de decisões que levou a isso parece, em retrospecto, ter uma lógica perversa: cada compromisso foi razoável no contexto em que foi feito. Cada alinhamento tático era justificável. Cada vez que você escolheu o caminho que garantia sua sobrevivência em detrimento dos outros era, localmente, sensato.

O somatório não era.

Helmrath precisava de alguém com suas habilidades. Você precisava de proteção que ele oferecia. O acordo foi feito em passos pequenos o suficiente para que nenhum individual parecesse o que o conjunto era.

O que você se tornou: funcional, poderoso dentro dos limites do que o sistema permite, e muito ciente de que os limites do que o sistema permite estão ficando menores a cada mês.

Há uma voz — que soa como Elderwyn, que soa como Gareth, que soa como Lirien — que você ouve às vezes quando a sala está vazia.

Você nunca responde.` },
    { id:'demonio',    title:'O Demônio Despertado',    type:'tragico',    emoji:'😈', color:'#501313',
      cond: (s,r,f,n) => s.str>=60 && s.mp>=60 && s.kar<30 && r<-30,
      text: (G) => `O que o Cristal faz com intenção errada foi documentado por Lirien muito antes de ${G.heroName} chegar ao salão do trono.

O problema com documentação é que documentação precisa ser lida.

Você tocou o Cristal com poder suficiente para destruí-lo — magia e força em abundância. E com raiva suficiente, ou ambição suficiente, ou acúmulo suficiente de decisões que escolheram eficácia sobre compaixão, para que o Cristal encontrasse o que procurava.

O processo é invisível. Isso é o que torna difícil — não há momento dramático de corrupção, não há linha clara de antes e depois. Há apenas um conjunto de escolhas que se desviam por graus imperceptíveis do que você era no portão de Kael.

Malachar foi. Mas o que ocupou o espaço que ele deixou tem seu rosto.

Em algum lugar — em Mireth, talvez, ou na floresta — há alguém que vai ter que fazer com ${G.heroName} o que ${G.heroName} fez com Malachar.

O ciclo tem uma lógica horrível.` },
    { id:'corrupto',   title:'O Poder Corrompido',      type:'tragico',    emoji:'🖤', color:'#72243E',
      cond: (s,r,f,n) => s.str>=55 && s.mp>=55 && s.hp<50 && r<0,
      text: (G) => `${G.heroName} foi a Arveth para salvar o reino.

Saiu de lá com o Escudo — e com a ideia de que alguém com esse artefato, com esse poder, com esse conhecimento não deveria colocá-lo nas mãos de um conselho de cidadãos que não entende o que carrega.

A ideia cresceu.

Não de uma vez — graduamente, da forma que ideias perigosas sempre crescem. Primeiro foi proteger. Depois foi organizar. Depois foi garantir que as estruturas certas estavam no lugar. Depois foi... algo para o qual as palavras começaram a ficar inadequadas.

O reino é mais estável do que era. Mais seguro. Mais eficiente.

E cada vez menos livre.

Há um grupo de resistência formando-se. Eles se reúnem na Floresta dos Sussurros, que de alguma forma continua sendo um lugar que você não consegue controlar completamente. O Guardião da Floresta não deixa.

Eles vão precisar de alguém corajoso.` },
    { id:'amaldicoado',title:'O Amaldiçoado',           type:'tragico',    emoji:'⛓️', color:'#4A1B0C',
      cond: (s,r,f,n) => s.hp<=15,
      text: (G) => `${G.heroName} foi longe demais.

Não em termos de distância — em termos de custo. Cada batalha custou o que custou, e a soma de Kael mais Arveth mais o Pântano mais a Cidadela somou mais do que qualquer corpo deveria ser capaz de pagar.

E ainda assim você chegou ao salão do trono.

O que aconteceu lá, aconteceu. O Cristal foi destruído ou selado ou interrompido de alguma forma — os relatos não concordam nos detalhes porque quem estava presente ainda processa em sonhos fragmentados.

O que aconteceu com você depois é mais claro para os outros do que para você.

Há momentos de lucidez. Há momentos que não são.

Elderwyn cuida — sem ser pedida, sem explicar. Mireth tem um quarto que ficou disponível sem anúncio. A criança de Kael visita regularmente com comida que você às vezes come e às vezes não sabe que está lá.

Você foi além do que qualquer um esperava. O que está do outro lado disso é real e específico e seu.

Não é o fim que você planejou. Raramente é.` },
  ],

  endingPriority: [
    'lenda','anjo','libertador','rei','arquimago','guerreiro','equilibrio',
    'sombra','oraculo','foragido','mercenario','ermitao','exilado',
    'sacrificio','martir','espectro','berserker','corrupto','traidor',
    'demonio','amaldicoado','viajante'
  ],
};
