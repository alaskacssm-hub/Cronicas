// ═══════════════════════════════════════════════════════════════
//  CRÔNICAS DO DESTINO — GAME DATA (100% OFFLINE)
//  4 cenários · 8 cenas cada · 3 escolhas por cena · 22 finais
// ═══════════════════════════════════════════════════════════════

const ENDINGS = [
  { id:'lenda',       title:'O Herói Lendário',       type:'heroico',    emoji:'👑', color:'#c9a84c',
    cond: s => s.hp>=70 && s.str>=60 && s.kar>=60,
    text: 'Os bardos cantarão seu nome por gerações. Com a espada erguida sobre as ruínas do mal derrotado, você olhou para o povo que te aclamava — guerreiro, sábio e justo. Nenhum reino ousará desafiar sua lenda. Você não era apenas um herói. Era a esperança feita carne.' },
  { id:'arquimago',   title:'O Arquimago Supremo',     type:'heroico',    emoji:'🔮', color:'#7b52d9',
    cond: s => s.mp>=75 && s.str<45,
    text: 'A Torre dos Antigos abriu suas portas somente para você. Seus dedos traçam runas que dobram a realidade, sua mente contém segredos que civilizações inteiras esqueceram. O poder que você acumulou transcende qualquer espada ou exército — você reescreve as leis do mundo.' },
  { id:'rei',         title:'O Rei Diplomata',         type:'heroico',    emoji:'⚜️', color:'#185FA5',
    cond: s => s.kar>=70 && s.hp>=50,
    text: 'Sem derramar sangue desnecessário, você unificou o que parecia impossível unir. Sua voz dobrou tiranos, sua presença converteu inimigos em aliados. O trono que ocupa não foi conquistado pela força — foi oferecido por um povo que finalmente encontrou alguém digno de liderar.' },
  { id:'guerreiro',   title:'O Guerreiro Imortal',     type:'heroico',    emoji:'⚔️', color:'#D85A30',
    cond: s => s.str>=70 && s.hp>=60 && s.mp<40,
    text: 'Eles tentaram dobrar você em batalha após batalha — e fracassaram. Cada cicatriz é um troféu, cada inimigo derrotado um capítulo de uma saga que nunca terá fim. Seu nome ecoa nos campos de batalha como um aviso aos fracos e uma promessa aos oprimidos: o guerreiro sempre volta.' },
  { id:'anjo',        title:'O Anjo da Redenção',      type:'heroico',    emoji:'✨', color:'#2e8b57',
    cond: s => s.hp>=80 && s.kar>=55 && s.mp>=55,
    text: 'Você poderia ter escolhido o poder. Poderia ter escolhido a glória solitária. Em vez disso, escolheu salvar — cada vida, cada alma perdida que cruzou seu caminho. O mundo não te lembra como um conquistador, mas como a luz que chegou quando tudo parecia escuridão.' },
  { id:'equilibrio',  title:'O Mestre do Equilíbrio',  type:'heroico',    emoji:'⚖️', color:'#BA7517',
    cond: s => Math.abs(s.str-s.mp)<15 && Math.abs(s.mp-s.kar)<15 && s.hp>=50,
    text: 'Onde outros escolheram um caminho, você trilhou todos. Nem puramente mago, nem puramente guerreiro, nem puramente diplomata — você é a síntese rara de tudo que um herói pode ser. Os antigos chamavam esse estado de Harmonia Perfeita. Poucos a alcançam. Você alcançou.' },
  { id:'libertador',  title:'O Libertador do Povo',    type:'heroico',    emoji:'🔓', color:'#0C7C59',
    cond: s => s.kar>=75,
    text: 'Eles estavam acorrentados — pelo medo, pela tirania, pelo desespero. Você chegou sem exércitos, apenas com palavras que cortavam mais fundo que qualquer lâmina. Um por um, os grilhões caíram. O povo livre que marcha atrás de você é seu único troféu, e o mais valioso de todos.' },
  { id:'sombra',      title:'O Guardião das Sombras',  type:'misterioso', emoji:'🌑', color:'#534AB7',
    cond: s => s.mp>=60 && s.kar>=50 && s.hp<60,
    text: 'Você opera nas margens do mundo visível, onde heróis comuns não ousam entrar. Ferido mas incansável, você usa magia e persuasão para manipular os fios do destino antes que o mal sequer perceba que foi derrotado. Ninguém sabe seu nome. Todos estão vivos por sua causa.' },
  { id:'oraculo',     title:'O Oráculo Eterno',        type:'misterioso', emoji:'👁️', color:'#3C3489',
    cond: s => s.mp>=80,
    text: 'A magia consumiu sua humanidade — e em troca deu algo maior. Você enxerga o que foi, o que é e o que será. Os reis te temem. Os sábios te consultam em segredo. Você não pertence mais a nenhuma era — é a voz que sussurra verdades impossíveis entre os séculos.' },
  { id:'foragido',    title:'O Foragido Lendário',     type:'misterioso', emoji:'🌫️', color:'#666460',
    cond: s => s.str>=40 && s.hp<45 && s.kar>=40,
    text: 'Ferido demais para sentar em tronos, sábio demais para ser capturado. Você desapareceu nas bordas do mundo conhecido, e sua ausência se tornou um mito mais poderoso que qualquer presença. Dizem que ainda aparece quando o perigo é grande o bastante. Dizem muita coisa.' },
  { id:'espectro',    title:'O Espírito Vingativo',    type:'misterioso', emoji:'👻', color:'#26215C',
    cond: s => s.hp<=20 && s.mp>=50,
    text: 'Seu corpo não resistiu — mas sua vontade sim. Alimentada por magia e por uma raiva justa, sua essência persiste onde nenhum mortal deveria. Você assombra os culpados, protege os inocentes e desafia a própria morte. Entre os vivos e os mortos, você encontrou um terceiro caminho.' },
  { id:'ermitao',     title:'O Ermitão Sábio',         type:'neutro',     emoji:'🏔️', color:'#0F6E56',
    cond: s => s.mp>=55 && s.kar<40 && s.str<40,
    text: 'O mundo ofereceu poder e glória — você recusou os dois. No alto de uma montanha que nenhum mapa registra, você acumulou um conhecimento que nenhuma biblioteca contém. Raros peregrinos chegam até você. Os que chegam, nunca partem os mesmos.' },
  { id:'mercenario',  title:'O Mercenário Lendário',   type:'neutro',     emoji:'💰', color:'#633806',
    cond: s => s.str>=45 && s.kar>=45 && s.hp<50,
    text: 'Você sobreviveu fazendo o que precisava ser feito, por quem pagasse mais — mas nunca vendeu sua alma completamente. No final, com o bolso cheio e o corpo marcado, você olha para trás e vê uma trilha de problemas resolvidos. Não é uma lenda. É uma vida honesta, à sua maneira.' },
  { id:'exilado',     title:'O Exilado Glorioso',      type:'neutro',     emoji:'🌅', color:'#5F5E5A',
    cond: s => s.str>=50 && s.kar<35 && s.hp>=40,
    text: 'Você era poderoso demais para ser ignorado e inconveniente demais para ser tolerado. O exílio que te impuseram você transformou em liberdade. Além das fronteiras conhecidas, onde nenhuma lei te alcança, você construiu algo que nenhum reino pode oferecer: uma vida verdadeiramente sua.' },
  { id:'viajante',    title:'O Viajante Solitário',    type:'neutro',     emoji:'🗺️', color:'#888780',
    cond: s => true,
    text: 'Nem herói nem vilão, nem sábio nem guerreiro — você foi simplesmente alguém que seguiu em frente. A jornada te moldou sem te definir. Há dignidade nisso: no horizonte que você persegue sem jamais alcançar, e nas histórias que carrega sem jamais contar a ninguém.' },
  { id:'martir',      title:'O Mártir Sagrado',        type:'tragico',    emoji:'🕯️', color:'#993C1D',
    cond: s => s.hp<=30 && s.kar>=55,
    text: 'Você sabia que não voltaria, e foi assim mesmo. O povo que você salvou nunca entendeu completamente o que foi sacrificado por eles. Ergueram uma estátua no lugar onde você caiu. Estátuas não sangram. Mas às vezes, nas noites mais frias, dizem que a pedra fica quente.' },
  { id:'sacrificio',  title:'O Grande Sacrifício',     type:'tragico',    emoji:'🩸', color:'#993556',
    cond: s => s.kar>=60 && s.hp<=25,
    text: 'No momento decisivo, você viu claramente: era você ou tudo o mais. Sem hesitar — e isso é o que define um herói de verdade — você escolheu o resto. A vitória que o mundo celebra tem um custo que só você pagou. Ninguém disse que era justo. Apenas necessário.' },
  { id:'traidor',     title:'O Traidor Coroado',       type:'tragico',    emoji:'🗡️', color:'#A32D2D',
    cond: s => s.kar>=65 && s.str<30 && s.mp<30,
    text: 'Suas palavras sempre foram mais afiadas que qualquer lâmina. No final, você usou esse dom para garantir sua própria sobrevivência — e destruiu tudo que dizia proteger. O trono que ocupa é real. O vazio que sente ao sentar nele também.' },
  { id:'berserker',   title:'O Berserker Caído',       type:'tragico',    emoji:'💀', color:'#791F1F',
    cond: s => s.str>=65 && s.hp<=35,
    text: 'A raiva foi sua arma e sua sentença. Você venceu cada batalha até que o corpo simplesmente não pôde mais. Caiu como uma árvore centenária — barulhento, inevitável, impressionante. Seus inimigos te temem até agora. Que não seja pouca coisa.' },
  { id:'demonio',     title:'O Demônio Despertado',    type:'tragico',    emoji:'😈', color:'#501313',
    cond: s => s.str>=60 && s.mp>=60 && s.kar<30,
    text: 'Poder demais sem compaixão suficiente — essa é a receita de um monstro. Você não percebeu quando cruzou a linha. Provavelmente não importava. O que você é agora assombra os pesadelos de gerações, e dentro de você, em algum lugar muito fundo, algo ainda se lembra de ter sido diferente.' },
  { id:'corrupto',    title:'O Poder Corrompido',      type:'tragico',    emoji:'🖤', color:'#72243E',
    cond: s => s.str>=55 && s.mp>=55 && s.hp<50,
    text: 'Você começou querendo salvar o mundo. Em algum ponto, salvar o mundo virou controlar o mundo. E controlar virou algo mais sombrio ainda. O poder que você acumulou é real — e real também é o rastro de cinzas que deixou para chegar até ele.' },
  { id:'amaldicoado', title:'O Amaldiçoado',           type:'tragico',    emoji:'⛓️', color:'#4A1B0C',
    cond: s => s.hp<=15,
    text: 'Cada escolha te custou algo. No final, o preço foi tudo. Mas há uma estranha paz em ter chegado tão longe com tão pouco sobrando. Você foi além do que qualquer um esperava. Isso não muda o que aconteceu — mas talvez mude o que isso significa.' },
];

const ENDING_PRIORITY = [
  'lenda','anjo','oraculo','libertador','rei','arquimago','guerreiro','equilibrio',
  'sombra','foragido','mercenario','ermitao','exilado','sacrificio','martir','demonio',
  'espectro','berserker','corrupto','traidor','amaldicoado','viajante'
];

// ═══════════════════════════════════════════════════════════════
//  SCENARIOS — each has 8 scenes, each scene has 3 choices
//  stat_changes: hp, mp, str, kar (range -20 to +20)
//  Each choice can give an optional item
// ═══════════════════════════════════════════════════════════════

const SCENARIOS = {

// ──────────────────────────────────────────────
//  FANTASIA
// ──────────────────────────────────────────────
fantasia: {
  name: 'Fantasia',
  icon: '⚔️',
  intro: 'O reino de Valdrun está à beira do colapso. O Rei-Dragão Malachar desperta após mil anos de sono, e sua sombra já cobre as cidades do norte. Você é um aventureiro sem nome — mas o destino raramente pede permissão.',
  scenes: [
    {
      text: 'Na entrada da cidade de Kael, guardas bloqueiam o portão. Um cartaz com sua silhueta — alguém te delatou. Ao fundo, uma criança sozinha chora perto dos muros. O capitão da guarda avança em sua direção.',
      choices: [
        { text: 'Enfrentar os guardas na força', outcome: 'Você abre caminho na base do punho — mas sangra pelo esforço.', stat_changes: { str: 12, hp: -15 }, item: null },
        { text: 'Usar um feitiço de ilusão para passar invisível', outcome: 'A magia funciona perfeitamente — você cruza o portão como névoa.', stat_changes: { mp: 15, hp: 5 }, item: 'Pergaminho Rúnico' },
        { text: 'Ajudar a criança e ganhar a simpatia do capitão', outcome: 'O capitão era pai. Ele faz vista grossa — e ainda te dá uma dica.', stat_changes: { kar: 15, hp: 5 }, item: null },
      ]
    },
    {
      text: 'Na estalagem do Grifo Bêbado, um anão bêbado grita que sabe onde fica o Escudo de Arveth — artefato capaz de repelir o fogo do Rei-Dragão. Mas um grupo de mercenários ouviu a mesma coisa e já se levanta da mesa.',
      choices: [
        { text: 'Nocautear os mercenários antes que ajam', outcome: 'Mesa quebrada, dentes no chão, informação garantida.', stat_changes: { str: 10, hp: -10, kar: -5 }, item: 'Punho de Ferro' },
        { text: 'Lançar sono mágico sobre os mercenários', outcome: 'Eles roncarão até o amanhecer. O anão conta tudo entre risadas.', stat_changes: { mp: 12 }, item: null },
        { text: 'Comprar uma rodada de bebidas e negociar', outcome: 'Você e os mercenários agora são aliados temporários — e têm o mapa.', stat_changes: { kar: 15 }, item: 'Mapa das Ruínas' },
      ]
    },
    {
      text: 'As Ruínas de Arveth são uma armadilha viva. Golens de pedra guardam a entrada, e a magia do lugar ressoa com algo antigo e faminto. No centro, o Escudo brilha num altar cercado de armadilhas.',
      choices: [
        { text: 'Destruir os golens pelo caminho, sem parar', outcome: 'Pedra e sangue. Você pega o Escudo com as mãos abertas.', stat_changes: { str: 15, hp: -18 }, item: 'Escudo de Arveth' },
        { text: 'Decifrar os glifos e desativar as armadilhas', outcome: 'Cada runa silenciada abre um caminho. O Escudo é seu sem um arranhão.', stat_changes: { mp: 18, hp: 8 }, item: 'Escudo de Arveth' },
        { text: 'Conversar com o espírito guardião do local', outcome: 'O espírito estava esperando alguém digno. Ele entrega o Escudo de bom grado.', stat_changes: { kar: 18, mp: 5 }, item: 'Escudo de Arveth' },
      ]
    },
    {
      text: 'Na aldeia de Mireth, você encontra refugiados do norte. Uma anciã, ex-conselheira do rei morto, diz que Malachar tem um ponto fraco: o Cristal de Alma que ele carrega no peito. Mas chegar até ele exige atravessar o Pântano dos Perdidos.',
      choices: [
        { text: 'Partir imediatamente, sem descanso', outcome: 'Você avança sem parar — os monstros do pântano aprendem a te temer.', stat_changes: { str: 10, hp: -12, kar: -5 }, item: null },
        { text: 'Estudar os manuscritos da anciã primeiro', outcome: 'Três dias de leitura revelam um caminho seguro e um feitiço de proteção.', stat_changes: { mp: 15, hp: 5 }, item: 'Manuscrito Antigo' },
        { text: 'Organizar os refugiados e liderar uma caravana', outcome: 'Vocês atravessam juntos. A força do grupo repele os predadores.', stat_changes: { kar: 12, hp: 8 }, item: null },
      ]
    },
    {
      text: 'No coração do Pântano dos Perdidos, uma feiticeira aprisionada numa gaiola de luz te oferece um trato: ela te guia até Malachar em troca de liberdade. Seu passado é sombrio — mas ela parece sincera.',
      choices: [
        { text: 'Destruir a gaiola e deixá-la livre de graça', outcome: 'Você liberta sem exigir nada. Ela chora e jura lealdade verdadeira.', stat_changes: { kar: 20, hp: -5 }, item: null },
        { text: 'Aceitar o trato e liberar com um feitiço de vínculo', outcome: 'O vínculo mágico garante a lealdade dela — e ensina algo sobre magia antiga.', stat_changes: { mp: 15, kar: 5 }, item: 'Amuleto do Vínculo' },
        { text: 'Recusar e seguir sozinho pelo pântano', outcome: 'Você sobrevive pela força bruta, mas chega exausto e ensanguentado.', stat_changes: { str: 10, hp: -20 }, item: null },
      ]
    },
    {
      text: 'Nas muralhas da Cidadela de Fogo, o general leal a Malachar oferece rendição — em troca de que você entregue seus companheiros como escravos. Atrás dele, mil soldados esperam ordem.',
      choices: [
        { text: 'Atacar o general na frente de todos', outcome: 'Ele cai. O exército hesita. A brecha é aberta na força e no sangue.', stat_changes: { str: 18, hp: -15, kar: -8 }, item: null },
        { text: 'Lançar um feitiço de confusão em massa', outcome: 'O exército vira contra si mesmo por tempo suficiente para você avançar.', stat_changes: { mp: 20, hp: 5 }, item: null },
        { text: 'Fazer um discurso e convencer os soldados a se rebelar', outcome: 'Metade do exército joga as armas no chão. A cidadela se rende sem batalha.', stat_changes: { kar: 20, hp: 10 }, item: 'Selo do General' },
      ]
    },
    {
      text: 'No salão do trono, o Cristal de Alma de Malachar flutua exposto — uma armadilha óbvia. O Rei-Dragão ri enquanto três ilusões suas cercam você. Um erro significa a morte.',
      choices: [
        { text: 'Atacar todas as ilusões até encontrar o real', outcome: 'Você sangra em três lugares — mas o golpe final acerta o verdadeiro Malachar.', stat_changes: { str: 15, hp: -18 }, item: null },
        { text: 'Usar magia para revelar qual é o real', outcome: 'A runa de revelação desfaz as ilusões. Malachar, exposto, recua.', stat_changes: { mp: 18, hp: 5 }, item: null },
        { text: 'Ignorar as ilusões e ir direto ao Cristal', outcome: 'Você apostou que o Cristal era o ponto fraco — e apostou certo.', stat_changes: { kar: 10, mp: 10, hp: -8 }, item: null },
      ]
    },
    {
      text: 'Malachar está enfraquecido, o Cristal de Alma rachado em suas mãos. Ele implora por misericórdia — diz que foi amaldiçoado, que não escolheu isso. Há verdade em seus olhos. E há cidades em chamas lá fora.',
      choices: [
        { text: 'Destruir o Cristal e acabar com Malachar', outcome: 'O Rei-Dragão cai. O fogo se apaga. O reino chora e comemora ao mesmo tempo.', stat_changes: { str: 10, hp: -5 }, item: null },
        { text: 'Usar um feitiço de selamento para prendê-lo', outcome: 'Você sela a maldição dentro de uma esfera. Malachar dorme. O mundo respira.', stat_changes: { mp: 15, hp: 8 }, item: 'Esfera do Selamento' },
        { text: 'Negociar um tratado e poupar sua vida', outcome: 'Malachar, redimido, usa seu poder para reconstruir o que destruiu.', stat_changes: { kar: 20, hp: 10 }, item: null },
      ]
    },
  ]
},

// ──────────────────────────────────────────────
//  CYBERPUNK
// ──────────────────────────────────────────────
cyberpunk: {
  name: 'Cyberpunk',
  icon: '🤖',
  intro: 'Neo-Valdrun, 2087. A MegaCorp Axiom controla tudo: água, ar, dados, sonhos. Você é um ghost — sem chip de identidade, sem registro, sem existência oficial. Isso te torna invisível. Isso te torna perigoso.',
  scenes: [
    {
      text: 'Um drone da Axiom escaneou seu rosto no beco do Setor 9. Em quinze segundos chegam agentes. Uma garota com olhos de neônio te puxa para uma passagem secreta — mas exige pagamento em dados roubados.',
      choices: [
        { text: 'Destruir o drone e correr pelos telhados', outcome: 'Você some antes dos agentes chegarem — mas alerta a rede deles.', stat_changes: { str: 12, hp: -10 }, item: null },
        { text: 'Hackear o drone e apagar o registro do scan', outcome: 'Trinta segundos de código. O drone segue em frente como se você não existisse.', stat_changes: { mp: 15, hp: 5 }, item: 'Kit de Hacking' },
        { text: 'Convencer a garota a te ajudar de graça', outcome: 'Ela viu algo em você. Diz que te ajuda — e que vai cobrar depois, de outra forma.', stat_changes: { kar: 15 }, item: null },
      ]
    },
    {
      text: 'No submundo do Mercado Negro de Syn, você encontra Rael, um ex-engenheiro da Axiom com a planta do servidor central. Ele quer dinheiro. Muitos agentes também estão procurando por ele.',
      choices: [
        { text: 'Intimidar Rael e pegar a planta à força', outcome: 'Ele entrega tremendo. A planta é sua — e um inimigo permanente também.', stat_changes: { str: 12, kar: -8, hp: -5 }, item: 'Planta do Servidor' },
        { text: 'Hackear o implante neural de Rael e extrair os dados', outcome: 'Invasão limpa. Ele nem percebe que você copiou tudo.', stat_changes: { mp: 18 }, item: 'Planta do Servidor' },
        { text: 'Oferecer proteção a Rael em troca da planta', outcome: 'Ele aceita. Agora você tem um aliado com conhecimento interno da Axiom.', stat_changes: { kar: 15, hp: 5 }, item: 'Planta do Servidor' },
      ]
    },
    {
      text: 'O Distrito Zero é território da gangue Chrome Skull. Para chegar ao servidor da Axiom você precisa passar por aqui. O líder, uma mulher com braços de titânio, bloqueia seu caminho pessoalmente.',
      choices: [
        { text: 'Enfrentar a líder em combate direto', outcome: 'Titânio contra carne — mas você tem mais vontade. Ela recua com respeito.', stat_changes: { str: 15, hp: -18 }, item: 'Braçadeira Chrome' },
        { text: 'Usar pulso eletromagnético para desativar seus implantes', outcome: 'Com os braços offline, ela é apenas humana. A gangue te deixa passar.', stat_changes: { mp: 15, hp: -5 }, item: null },
        { text: 'Propor uma aliança contra a Axiom', outcome: 'Você aperta a mão de titânio. A Chrome Skull tem 200 membros — todos seus agora.', stat_changes: { kar: 20 }, item: 'Emblema Chrome' },
      ]
    },
    {
      text: 'Dentro do servidor da Axiom, você descobre algo pior que esperava: um arquivo chamado Projeto Éden. A corporação planeja um reset neural em massa — apagar as memórias de toda a população e recomeçar do zero. O upload começa em 6 horas.',
      choices: [
        { text: 'Destruir fisicamente os servidores agora', outcome: 'Explosões controladas. O projeto para. Metade da rede da Axiom também.', stat_changes: { str: 15, hp: -12 }, item: null },
        { text: 'Hackear o sistema e reescrever o código do Éden', outcome: 'Você passa quatro horas codificando um vírus que transforma o reset em liberação.', stat_changes: { mp: 20, hp: 5 }, item: 'Código Éden' },
        { text: 'Vazar os arquivos para toda a mídia independente', outcome: 'Em minutos, Éden é o nome mais buscado do planeta. A Axiom treme.', stat_changes: { kar: 18, mp: 5 }, item: null },
      ]
    },
    {
      text: 'A CEO da Axiom, Dra. Voss, aparece no seu feed neural. Ela diz que sabe quem você é — e quem você foi. Oferece um cargo dentro da corporação: poder real, em troca de silêncio sobre o Projeto Éden.',
      choices: [
        { text: 'Recusar e ameaçar expô-la publicamente', outcome: 'Voss desconecta. Agora você tem a corporação inteira como inimigo declarado.', stat_changes: { str: 8, kar: 5, hp: -8 }, item: null },
        { text: 'Fingir aceitar para obter acesso ao nível mais alto', outcome: 'Você entra pela porta da frente. O que descobre lá dentro é ainda pior.', stat_changes: { mp: 12, kar: 10 }, item: 'Crachá Executivo' },
        { text: 'Negociar: Éden cancelado em troca de silêncio', outcome: 'Voss aceita. Você não confia nela. Mas Éden para — por enquanto.', stat_changes: { kar: 15, hp: 8 }, item: null },
      ]
    },
    {
      text: 'No coração da torre da Axiom, você encontra Kai — um garoto de 12 anos conectado como hub central do Projeto Éden. Ele é tanto a fonte quanto a vítima do sistema. Desligar o projeto significa desligar ele.',
      choices: [
        { text: 'Desligar o sistema à força, sem hesitar', outcome: 'Você faz o que precisa ser feito. Kai fecha os olhos. O projeto para.', stat_changes: { str: 10, hp: -15, kar: -10 }, item: null },
        { text: 'Hackear o sistema para extrair Kai antes de desligar', outcome: 'Três horas de código, mãos tremendo. Kai acorda em carne e osso, confuso e vivo.', stat_changes: { mp: 20, hp: -8 }, item: null },
        { text: 'Deixar Kai decidir o próprio destino', outcome: 'O garoto ouviu tudo. Ele mesmo digita o shutdown. Depois pede seu nome.', stat_changes: { kar: 20, hp: 5 }, item: null },
      ]
    },
    {
      text: 'Os agentes de elite da Axiom cercam o andar 99. Você tem uma janela de 90 segundos para chegar à antena de transmissão no topo e encerrar o sinal de controle de vez. O elevador está travado.',
      choices: [
        { text: 'Subir pelas escadarias derrubando tudo pela frente', outcome: 'Você chega. Chegam também oito agentes caídos nos degraus atrás de você.', stat_changes: { str: 15, hp: -15 }, item: null },
        { text: 'Usar o chip de Rael para hackear o elevador', outcome: 'O elevador obedece. Você sobe sem encontrar ninguém — elegante demais.', stat_changes: { mp: 15, hp: 5 }, item: null },
        { text: 'Convencer os agentes a virar o sistema contra Voss', outcome: 'Você tinha 90 segundos. Usou 85 falando. Os 5 restantes foram suficientes.', stat_changes: { kar: 18, hp: 8 }, item: null },
      ]
    },
    {
      text: 'No topo da torre, a Dra. Voss espera com uma arma apontada para sua cabeça — e um chip na outra mão. O chip é uma cópia de você. "Se você morrer aqui, ele vive e faz o que eu quiser." A antena pisca atrás dela.',
      choices: [
        { text: 'Avançar e destruir o chip, custando o que custar', outcome: 'O chip explode. Voss atira. Você acerta a antena antes de cair.', stat_changes: { str: 12, hp: -20 }, item: null },
        { text: 'Hackear o chip remotamente e corrompê-lo', outcome: 'O chip implode na mão dela. Voss percebe que perdeu — e foge para o nada.', stat_changes: { mp: 20, hp: 5 }, item: null },
        { text: 'Convencer Voss de que ninguém precisa morrer hoje', outcome: 'Ela hesita. Nesse segundo de hesitação, você desliga a antena manualmente.', stat_changes: { kar: 18, hp: 8 }, item: null },
      ]
    },
  ]
},

// ──────────────────────────────────────────────
//  HORROR
// ──────────────────────────────────────────────
horror: {
  name: 'Horror',
  icon: '👁️',
  intro: 'A Mansão Velmoor existe em todos os mapas e em nenhum. Você chegou aqui porque foi convidado — ou porque algo te trouxe. Lá dentro, os corredores mudam, as portas mentem, e o que você encontrar depende do que você carrega por dentro.',
  scenes: [
    {
      text: 'O portão da mansão se fecha sozinho atrás de você. Na entrada, um espelho enorme mostra seu reflexo — mas ele está um segundo atrasado. Do corredor da esquerda vem um choro. Do direito, uma luz quente e convidativa.',
      choices: [
        { text: 'Quebrar o espelho com força', outcome: 'Sete anos de azar, dizem. O reflexo late ao cair. Mas o caminho está livre.', stat_changes: { str: 10, hp: -8 }, item: 'Estilhaço Encantado' },
        { text: 'Estudar o espelho em busca de pistas', outcome: 'O atraso tem um padrão. O reflexo te mostra uma chave escondida na moldura.', stat_changes: { mp: 15, hp: 5 }, item: 'Chave Velha' },
        { text: 'Ir até o choro — pode ser alguém precisando de ajuda', outcome: 'Era uma criança. Era também um teste. Ela te entrega uma vela que nunca apaga.', stat_changes: { kar: 15, hp: 5 }, item: 'Vela Eterna' },
      ]
    },
    {
      text: 'Na biblioteca, os livros sussurram seu nome. Um tomo negro flutua até você — dentro, um ritual que promete poder absoluto sobre a mansão. Mas a tinta parece sangue fresco. Do outro lado da sala, uma janela de escape real pisca por um segundo.',
      choices: [
        { text: 'Arrancar as páginas do tomo e destruir o ritual', outcome: 'A biblioteca grita. Você resiste. O tomo cinza some.', stat_changes: { str: 8, hp: -10, mp: -5 }, item: null },
        { text: 'Ler o ritual em voz baixa para entendê-lo', outcome: 'Você absorve o conhecimento sem executar o ritual. Perigoso — e valioso.', stat_changes: { mp: 20, hp: -8 }, item: 'Tomo das Sombras' },
        { text: 'Ignorar o tomo e ir à janela de escape', outcome: 'A janela era real. Mas te leva a outro cômodo da mansão, não para fora.', stat_changes: { kar: 10, hp: 8 }, item: null },
      ]
    },
    {
      text: 'No quarto da criança morta, uma boneca de porcelana de olhos azuis te pede que conte uma história. Recusar seria rude. A última pessoa que a contrariou ainda está nas paredes — literalmente.',
      choices: [
        { text: 'Destruir a boneca antes que ela aja', outcome: 'Porcelana estilhaçada, escuridão por trinta segundos, silêncio depois.', stat_changes: { str: 12, hp: -12 }, item: null },
        { text: 'Contar uma história que prende a atenção dela', outcome: 'Você narra por vinte minutos. Ela dorme. O quarto libera uma passagem secreta.', stat_changes: { mp: 15, kar: 8 }, item: 'Passagem Revelada' },
        { text: 'Sentar com ela e perguntar o que ela quer', outcome: 'A boneca queria ser ouvida. Ela te mostra o coração da mansão — e seus segredos.', stat_changes: { kar: 18, hp: 5 }, item: 'Mapa da Mansão' },
      ]
    },
    {
      text: 'No porão, você encontra o Arquiteto — o homem que construiu Velmoor e foi consumido por ela. Ele está preso entre as paredes, ainda vivo, ainda lúcido. Ele sabe como destruir a mansão. Libertá-lo, porém, tem um custo.',
      choices: [
        { text: 'Arrancar o Arquiteto das paredes pela força', outcome: 'Ossos estalam. Ele grita. Sobrevive — e te conta tudo antes de finalmente morrer.', stat_changes: { str: 10, hp: -15, kar: -5 }, item: 'Planta da Mansão' },
        { text: 'Usar magia para dissolver a parede ao redor dele', outcome: 'A parede libera o Arquiteto devagar. Ele sai inteiro — e agradecido.', stat_changes: { mp: 18, hp: 5 }, item: 'Planta da Mansão' },
        { text: 'Sentar e ouvir sua história completa primeiro', outcome: 'O Arquiteto nunca foi ouvido. Com as palavras ditas, a parede o libera sozinha.', stat_changes: { kar: 18, mp: 5 }, item: 'Planta da Mansão' },
      ]
    },
    {
      text: 'O Salão dos Espelhos multiplica você ao infinito. Cada reflexo toma uma decisão diferente. Um deles avança em sua direção com uma faca. É você — mas não é você.',
      choices: [
        { text: 'Enfrentar o reflexo armado em combate', outcome: 'Você derrota a versão de si que escolheu a violência — e absorve algo dela.', stat_changes: { str: 15, hp: -15 }, item: null },
        { text: 'Fechar os olhos e invocar proteção mágica', outcome: 'No escuro, os reflexos perdem poder. Quando você abre os olhos, só existe um.', stat_changes: { mp: 18, hp: -5 }, item: null },
        { text: 'Estender a mão para o reflexo e falar com ele', outcome: 'Ninguém nunca tentou isso. O reflexo para. Abaixa a faca. Desaparece em paz.', stat_changes: { kar: 20, hp: 5 }, item: null },
      ]
    },
    {
      text: 'A Entidade que habita Velmoor finalmente mostra uma forma — uma silhueta de tudo que você mais teme. Ela não ataca. Ela simplesmente pergunta: "O que você veio buscar aqui?"',
      choices: [
        { text: 'Atacar a Entidade imediatamente, sem responder', outcome: 'A luta é brutal e sem sentido. Você vence pelo puro instinto de sobreviver.', stat_changes: { str: 12, hp: -18 }, item: null },
        { text: 'Responder com um feitiço de banimento', outcome: 'As palavras de banimento funcionam — mas a Entidade ri enquanto some.', stat_changes: { mp: 15, hp: -8 }, item: 'Pergaminho de Banimento' },
        { text: 'Responder honestamente à pergunta dela', outcome: 'A verdade te custa mais que qualquer luta. Mas a Entidade recua, satisfeita.', stat_changes: { kar: 20, hp: -5 }, item: null },
      ]
    },
    {
      text: 'O coração de Velmoor é uma sala onde o tempo não existe. Você vê todos os que vieram antes de você — cada um falhou de uma forma diferente. No centro, uma porta. Simples, comum, ordinária.',
      choices: [
        { text: 'Arrombar a porta com força bruta', outcome: 'A porta cede ao terceiro chute. O que tem do outro lado é... normal. Estranhamente normal.', stat_changes: { str: 10, hp: -8 }, item: null },
        { text: 'Decifrar o mecanismo oculto da fechadura', outcome: 'A solução era elegante. A porta abre em silêncio, revelando o fim correto.', stat_changes: { mp: 15, hp: 8 }, item: null },
        { text: 'Pedir passagem à mansão com respeito', outcome: 'A mansão nunca foi pedida assim. A porta se abre sozinha. Educação tem poder.', stat_changes: { kar: 18, hp: 10 }, item: null },
      ]
    },
    {
      text: 'Do outro lado da porta está o criador da maldição — não um monstro, mas um homem velho e exausto que não consegue morrer enquanto a mansão existir. Ele te entrega um machado. "Você sabe o que precisa fazer," ele diz.',
      choices: [
        { text: 'Usar o machado para destruir a pedra angular da mansão', outcome: 'A mansão desmorona. O velho finalmente fecha os olhos com um sorriso.', stat_changes: { str: 15, hp: -10 }, item: null },
        { text: 'Usar magia para desatar a maldição sem destruir tudo', outcome: 'Você separa o homem da mansão. Ambos sobrevivem — livres.', stat_changes: { mp: 20, hp: 5 }, item: null },
        { text: 'Perguntar se ele quer ser salvo ou apenas ouvido', outcome: 'Ele quebra a chorar. Quando para, a maldição se desfaz por si mesma.', stat_changes: { kar: 20, hp: 8 }, item: null },
      ]
    },
  ]
},

// ──────────────────────────────────────────────
//  WESTERN
// ──────────────────────────────────────────────
western: {
  name: 'Faroeste',
  icon: '🤠',
  intro: 'Dusthaven, 1882. A cidade mais quente e mais fria do território — quente de sol, fria de sangue. O barão Colt Harrow controla tudo aqui com pistolas e subornos. Você chegou no trem das 11 sem bagagem e sem aliados. Isso vai mudar.',
  scenes: [
    {
      text: 'Na plataforma da estação, dois capangas de Harrow verificam passageiros. Eles notaram você. Do outro lado da rua, o xerife local observa tudo sem mover um músculo — parece assustado. Uma senhora com malas pesadas luta sozinha na sarjeta.',
      choices: [
        { text: 'Encarar os capangas e passar sem baixar o olhar', outcome: 'Sua postura fala antes de você. Os capangas decidem que não valem a briga.', stat_changes: { str: 12, kar: 5, hp: -5 }, item: null },
        { text: 'Observar o padrão de ronda e escorregar despercebido', outcome: 'Você usa cada sombra como aliada. Eles nunca souberam que você passou.', stat_changes: { mp: 12, hp: 5 }, item: null },
        { text: 'Ajudar a senhora com as malas — ela agradece demais', outcome: 'A "senhora" é a melhor informante de Dusthaven. Ela te conta tudo sobre Harrow.', stat_changes: { kar: 15, hp: 5 }, item: 'Mapa de Dusthaven' },
      ]
    },
    {
      text: 'No saloon do Cavalo Manco, um bêbado grita que tem prova de que Harrow assassinou o xerife anterior. O próprio barão está sentado no fundo, jogando cartas. Seus pistoleiros se levantam devagar.',
      choices: [
        { text: 'Chegar na frente dos pistoleiros e proteger o bêbado', outcome: 'Você intercepta os pistoleiros. Navalha e punho. O bêbado escapa — e a prova também.', stat_changes: { str: 15, hp: -15, kar: 5 }, item: null },
        { text: 'Roubar as cartas de Harrow para distrair a situação', outcome: 'Um truque de mão rápido. Harrow perde a paciência com você — os outros escapam.', stat_changes: { mp: 12, kar: 10 }, item: 'Carta Marcada' },
        { text: 'Levantar e falar no saloon inteiro — jogar a moral contra Harrow', outcome: 'Cinquenta pares de olhos viram para Harrow. Ele recua. Por hoje.', stat_changes: { kar: 18, hp: 5 }, item: null },
      ]
    },
    {
      text: 'O bêbado, sóbrio agora, revela que as provas estão no cofre do cartório — controlado por um tabelião corrupto chamado Pickney. Para entrar, você precisa de uma distração ou de força.',
      choices: [
        { text: 'Arrombar a porta dos fundos durante a noite', outcome: 'A fechadura cede no segundo soluço. O cofre não é problema para quem sabe.', stat_changes: { str: 12, hp: -5 }, item: 'Documentos de Harrow' },
        { text: 'Forjar um documento de ordem judicial para Pickney', outcome: 'Sua caligrafia é convincente. Pickney entrega tudo com um sorriso ansioso.', stat_changes: { mp: 15, hp: 5 }, item: 'Documentos de Harrow' },
        { text: 'Convencer Pickney de que Harrow vai jogá-lo fora de qualquer jeito', outcome: 'Você planta a semente da desconfiança. Pickney abre o cofre por conta própria.', stat_changes: { kar: 18 }, item: 'Documentos de Harrow' },
      ]
    },
    {
      text: 'Com as provas em mãos, você procura o xerife atual. Mas ele está de joelhos na praça central — Harrow descobriu seus planos e pegou o filho do xerife como refém. Cem pessoas assistem em silêncio.',
      choices: [
        { text: 'Avançar em direção a Harrow com as mãos nas armas', outcome: 'O faroeste tem uma linguagem própria. Harrow entende quando perdeu a iniciativa.', stat_changes: { str: 15, hp: -12, kar: 5 }, item: null },
        { text: 'Usar a multidão como cobertura para flanquear os capangas', outcome: 'Você se move pela massa sem ser visto. Os capangas são neutralizados pelo flanco.', stat_changes: { mp: 15, hp: -5 }, item: null },
        { text: 'Falar direto com o menino — dar a ele coragem para agir', outcome: 'O garoto de dez anos ouviu. Pisou no pé do capanga. A praça explodiu em favor de vocês.', stat_changes: { kar: 20, hp: 5 }, item: null },
      ]
    },
    {
      text: 'O xerife, liberto, quer ajudar — mas Harrow já mandou queimar a fazenda de todos que assinaram uma petição contra ele. As famílias estão nas chamas. O barão está na delegacia, rindo.',
      choices: [
        { text: 'Ir às fazendas ajudar a combater o fogo', outcome: 'Suas mãos ficam com bolhas. Três famílias são salvas. A quarta não.', stat_changes: { hp: -15, kar: 15, str: 5 }, item: null },
        { text: 'Usar pólvora controlada para criar um contra-fogo', outcome: 'Você conhece fogo. O contra-fogo para o avanço das chamas. Todos salvos.', stat_changes: { mp: 15, hp: -5 }, item: null },
        { text: 'Organizar a comunidade para combater juntos', outcome: 'Em dez minutos, toda Dusthaven estava em fila passando baldes. O fogo perdeu.', stat_changes: { kar: 18, hp: 5 }, item: 'Confiança da Cidade' },
      ]
    },
    {
      text: 'Harrow contratou um pistoleiro lendário — Crow Decker — para te eliminar. Decker te encontra no meio da rua principal ao pôr do sol. Ele é mais rápido que qualquer mortal. Você sabe disso.',
      choices: [
        { text: 'Aceitar o duelo — velocidade contra velocidade', outcome: 'Você leva um tiro no ombro. Mas o seu acerta o lugar certo. Decker cai primeiro.', stat_changes: { str: 18, hp: -20 }, item: 'Revólver de Decker' },
        { text: 'Usar o sol nas costas como vantagem tática', outcome: 'Decker piscou por meio segundo. Meio segundo foi o suficiente.', stat_changes: { mp: 15, hp: -8 }, item: 'Revólver de Decker' },
        { text: 'Fazer Decker hesitar falando do seu próprio passado', outcome: 'Você sabia que ele tinha uma filha. A menção do nome dela custou-lhe o tempo de reação.', stat_changes: { kar: 18, hp: -5 }, item: 'Revólver de Decker' },
      ]
    },
    {
      text: 'Com Decker caído, a cidade toda sai às ruas. Harrow está cercado na delegacia com seis capangas. O xerife tem uma ordem de prisão. Tem também um problema: Harrow ameaça explodir os barris de pólvora no porão.',
      choices: [
        { text: 'Invadir pela janela antes que ele execute a ameaça', outcome: 'Vidro e fumaça. Você desarma Harrow antes que ele chegue perto dos barris.', stat_changes: { str: 15, hp: -12 }, item: null },
        { text: 'Cortar o acesso ao porão por fora, deixando-o sem saída', outcome: 'Harrow percebe que está encurralado. Rende-se com os dentes cerrados.', stat_changes: { mp: 15, hp: 5 }, item: null },
        { text: 'Negociar a rendição em troca de julgamento justo', outcome: 'Você garante que ele seja julgado — não linchado. A lei vence de um jeito honesto.', stat_changes: { kar: 18, hp: 8 }, item: null },
      ]
    },
    {
      text: 'Harrow está preso. A cidade está livre. O xerife te oferece o distintivo de delegado — e a responsabilidade que vem com ele. Lá fora, um cavalo te espera com as rédeas soltas. O próximo horizonte é só seu.',
      choices: [
        { text: 'Aceitar o distintivo e ficar em Dusthaven', outcome: 'Você pendura o distintivo no peito. A cidade tem um protetor. Você tem um lar.', stat_changes: { str: 8, kar: 10, hp: 10 }, item: 'Distintivo de Xerife' },
        { text: 'Recusar e usar seu conhecimento para melhorar as leis locais', outcome: 'Sem título, sem poder — mas com influência real nas regras que vão proteger todos.', stat_changes: { mp: 15, kar: 8 }, item: null },
        { text: 'Pegar o cavalo e seguir para o próximo lugar que precise de você', outcome: 'Dusthaven te aplaude enquanto você cavalga. O horizonte está cheio de promessas.', stat_changes: { kar: 10, hp: 12, str: 5 }, item: null },
      ]
    },
  ]
},

}; // end SCENARIOS
