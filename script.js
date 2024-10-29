// Cria um elemento de imagem
const img = document.createElement('img');
img.src = 'https://i.pinimg.com/originals/4b/4f/a1/4b4fa16fff0d9782b6e53db976f89f78.gif';
img.alt = 'Moving GIF';
img.style.position = 'fixed';
img.style.bottom = '0';
img.style.left = '-100px'; // Começa fora da tela à esquerda
img.style.width = '100px'; // Tamanho da imagem
document.body.appendChild(img);

// Função para animar a imagem
function animateImage() {
    let position = -100; // Posição inicial
    const move = () => {
        position += 2; // Incrementa a posição
        img.style.left = position + 'px'; // Atualiza a posição da imagem

        // Reinicia a animação quando a imagem sai da tela à direita
        if (position > window.innerWidth) {
            position = -100; // Reinicia a posição
        }
        
        requestAnimationFrame(move); // Chama a próxima animação
    };

    move(); // Inicia a animação
}

// Inicia a animação da imagem
animateImage();

const storyElement = document.getElementById("story");
const buttonsElement = document.getElementById("buttons");

const story = {
    start: {
        text: "Em uma biblioteca esquecida, você encontra um tomo empoeirado, envolto em uma aura de mistério. Ao abrir suas páginas, um antigo pergaminho escorrega, revelando-se como um mapa de um tempo perdido. Ele conta sobre uma cidade amaldiçoada oculta nas sombras, guardada por espíritos vingativos sedentos por vingança. As histórias falam de tesouros inimagináveis, mas também de almas perdidas, eternamente aprisionadas. Um calafrio percorre sua espinha ao ponderar se tem coragem para explorar o desconhecido. Está pronto para enfrentar o que a escuridão esconde?",
        choices: [
            { text: "Entrar na Floresta Amaldiçoada", action: "forest" },
            { text: "Explorar as Ruínas Assombradas", action: "ruins" },
        ],
    },
    forest: {
        text: "A Floresta Amaldiçoada se ergue à sua frente, um labirinto de árvores retorcidas que parecem se mover à medida que você avança. O cheiro de decomposição preenche o ar, enquanto ecos de passos invisíveis ressoam no silêncio. Sombras dançam entre os troncos, sussurrando segredos antigos de tragédias esquecidas. Ao seu redor, criaturas noturnas observam, seus olhos brilhando na escuridão. Cada passo é um convite ao abismo. Você ousa buscar pistas escondidas entre as árvores ou prefere recuar para a segurança do mundo conhecido?",
        choices: [
            { text: "Buscar pistas entre as árvores", action: "clue" },
            { text: "Retornar à segurança", action: "end" },
        ],
    },
    ruins: {
        text: "As Ruínas Assombradas permanecem em silêncio opressivo, suas pedras frias e desgastadas pelo tempo, sussurrando contos de dor e desespero. À medida que você se aproxima, uma brisa gelada acaricia sua pele, e figuras espectrais começam a se materializar, suas formas distorcidas refletindo a agonia de um passado não resolvido. Você sente uma presença ancestral, como se as próprias paredes estivessem vivas, observando cada movimento seu. A cidade das sombras parece clamar por alguém que enfrente seus segredos sombrios. Você ousa investigar um altar misterioso, ou fugirá do terror que aguarda?",
        choices: [
            { text: "Investigar um altar misterioso", action: "altar" },
            { text: "Fugir em terror", action: "end" },
        ],
    },
    clue: {
        text: "Profundamente na floresta, você descobre um santuário em ruínas, entrelaçado com raízes que se torcem como serpentes. Inscrições antigas decoram a pedra, e uma frase arrepiante se destaca: 'A lua de sangue revelará o caminho para a cidade.' Um tremor percorre seu corpo ao sentir a escuridão intensificando-se ao seu redor. Ao examinar melhor o santuário, você encontra um diário de uma vítima anterior, descrevendo seus últimos momentos antes de ser capturada. O diário termina com um aviso: 'A cidade se alimenta da dor. Não confie em nada.' Você buscará a orientação da lua de sangue, ou fugirá antes que seja tarde demais?",
        choices: [
            { text: "Buscar a orientação da lua de sangue", action: "moon" },
            { text: "Fugir em desespero", action: "end" },
        ],
    },
    altar: {
        text: "No altar, restos de um ritual sombrio realizado há muito tempo estão espalhados, e o cheiro de sangue seco permeia o ar. Os fragmentos de ossos quebrados e oferendas murchas contam uma história de horror. Enquanto você examina o altar, visões de rituais passados invadem sua mente: pessoas sendo sacrificadas em nome de deuses cruéis, suas almas gritando por libertação. De repente, os espíritos, enfurecidos pela sua presença, se manifestam em uma tempestade de sombras e lamentos. A escuridão se agita, e você percebe que não está sozinho. O que você fará? Oferecerá um sacrifício para apaziguar essas almas atormentadas, ou tentará fugir da ira dos mortos?",
        choices: [
            { text: "Oferecer um sacrifício", action: "sacrifice" },
            { text: "Correr por sua vida", action: "end" },
        ],
    },
    moon: {
        text: "Sob o brilho sinistro da lua de sangue, a cidade amaldiçoada emerge da névoa, suas estruturas grotescas e retorcidas refletindo uma era de sofrimento e desespero. Ao cruzar o limiar, uma sensação de fatalidade se instala em seu coração. As ruas são um labirinto de ecos do passado, onde almas perdidas vagam, eternamente aprisionadas em sua própria agonia. O medo é palpável, e você sabe que, a cada passo, está se aproximando do que os espíritos temem. Você ousa explorar o Mercado das Sombras, onde negócios traiçoeiros aguardam, ou o Templo das Almas Perdidas, um lugar de desespero absoluto?",
        choices: [
            { text: "Investigar o Mercado das Sombras", action: "market" },
            { text: "Explorar o Templo das Almas Perdidas", action: "temple" },
        ],
    },
    sacrifice: {
        text: "O momento do sacrifício chega, e a escuridão ao seu redor pulsa com expectativa. Você oferece algo precioso de si mesmo, uma parte de sua própria alma. Os espíritos, agora cativados pela sua oferta, revelam um vislumbre do verdadeiro horror da cidade: ela se alimenta do desespero e da dor daqueles que caem aqui. Eles oferecem a você um poder sombrio, mas a um custo inimaginável. Você se tornará um dos muitos que vagam eternamente, ou tentará escapar dessa armadilha infernal? A escolha é sua.",
        choices: [
            { text: "Aceitar o conhecimento sombrio", action: "knowledge" },
            { text: "Fugir do altar", action: "end" },
        ],
    },
    market: {
        text: "No Mercado das Sombras, o ar está carregado de energia maligna, e os murmúrios de vozes perdidas ecoam pelas barracas cheias de trinkets amaldiçoados. Os vendedores, figuras sombrias com olhos vazios, oferecem objetos de poder inimaginável, mas cada um vem com sua própria maldição. Um vendedor se aproxima, oferecendo a você um espelho que reflete suas maiores fraquezas, prometendo poder em troca de sua dor. Mas você sabe que as promessas feitas aqui são tão traiçoeiras quanto as almas que as habitam. Você arriscará sua sanidade por poder, ou se afastará, evitando a escuridão?",
        choices: [
            { text: "Fazer um acordo com o vendedor", action: "deal" },
            { text: "Sair do mercado", action: "end" },
        ],
    },
    temple: {
        text: "O Templo das Almas Perdidas é um labirinto de dor e desespero. Os gritos das almas aprisionadas reverberam nas paredes, criando um lamento contínuo que invade sua mente. Ao entrar, a escuridão se torna opressiva, quase tangível, como se quisesse consumir você. Você vê sombras se contorcendo nas paredes, representações de vidas destruídas por este lugar. Uma voz ecoa, prometendo libertação das almas, mas fará você se sacrificar? Você enfrentará os espíritos ou fugirá antes que seja tarde demais?",
        choices: [
            { text: "Enfrentar os espíritos", action: "confront" },
            { text: "Fugir", action: "end" },
        ],
    },
    knowledge: {
        text: "Os espíritos revelam uma verdade aterrorizante: a cidade não é apenas amaldiçoada; é uma entidade viva, um parasita que se alimenta da dor e desolação daqueles que caem em suas garras. Você detém o poder de se tornar parte dessa escuridão ou tentar escapar, sabendo que o custo será alto. A lua de sangue brilha intensamente, um farol para o desespero. Você cederá à escuridão ou lutará pela sua liberdade?",
        choices: [
            { text: "Abraçar a escuridão", action: "darkness" },
            { text: "Tentar escapar", action: "escape" },
        ],
    },
    deal: {
        text: "O acordo que você faz é um pacto com as forças sombrias que habitam a cidade. O vendedor lhe entrega um amuleto que irradia poder, mas você sente sua mente sendo corroída a cada segundo que passa. Visões de horrores inimagináveis começam a assombrá-lo, e a linha entre a realidade e o pesadelo se confunde. Com esse poder em mãos, você poderia tentar conquistar a cidade, mas a um custo imensurável. Você usará essa força recém-descoberta, ou a rejeitará em busca da liberdade?",
        choices: [
            { text: "Usar o poder para conquistar a cidade", action: "conquer" },
            { text: "Rejeitar o poder e fugir", action: "end" },
        ],
    },
    confront: {
        text: "Determinado a enfrentar os espíritos, você avança com coragem. 'Libertem essas almas!' você grita, sua voz ecoando pelas sombras. A resposta é um rugido de fúria, e os espíritos avançam em uma tempestade de sombras. Você se encontra cercado por rostos torturados, suas expressões distorcidas pela dor. O peso da culpa e da tristeza pesa sobre você, e o terror aperta seu coração. Você lutará contra eles ou se entregará ao desespero?",
        choices: [
            { text: "Lutar contra os espíritos", action: "fight" },
            { text: "Rendir-se ao desespero", action: "end" },
        ],
    },
    darkness: {
        text: "Ao abraçar a escuridão, você se torna parte da própria cidade amaldiçoada. Sua essência se entrelaça com os mistérios que cercam os perdidos, e você sente a dor e a agonia de cada alma aprisionada. Embora você ganhe poder, a solidão e a tristeza se tornam suas únicas companheiras. Sua história agora se funde com as sombras, e você se tornará uma lenda, um aviso para os imprudentes que ousam entrar. Para sempre aprisionado, você questiona se algum dia encontrará a luz novamente.",
        choices: [
            { text: "Recomeçar", action: "start" },
        ],
    },
    conquer: {
        text: "Com o poder do amuleto, você se ergue como o governante da cidade amaldiçoada. As almas perdidas se curvam diante de você, mas a escuridão se infiltra em seu ser, corroendo sua humanidade. Visões de um futuro sombrio se aproximam, e você percebe que a cidade nunca permitirá que você escape de seu domínio. O fardo do poder é pesado, e a culpa pelas almas que não pôde salvar o assombra. Você se tornará um tirano ou buscará um caminho para a redenção?",
        choices: [
            { text: "Buscar a redenção", action: "redemption" },
            { text: "Recomeçar", action: "start" },
        ],
    },
    redemption: {
        text: "Em sua busca por redenção, você decide liberar as almas aprisionadas, mesmo que isso signifique sacrificar sua própria vida. Enquanto você recita um feitiço de libertação, os espíritos se agitam, reconhecendo sua intenção pura. O ritual consome sua energia vital, mas as almas começam a se elevar, agradecendo a você por libertá-las. No entanto, a cidade não ficará impune. Um grito estrondoso ressoa, e a cidade começa a desmoronar. Em sua última visão, você vê as almas sorrindo, finalmente livres, enquanto você é tragado pelas sombras.",
        choices: [
            { text: "Recomeçar", action: "start" },
        ],
    },
    fight: {
        text: "A batalha contra os espíritos rages com ferocidade. Você luta com cada grama de força, mas as sombras parecem ter vida própria, atacando com fúria sobrenatural. Apesar de seus esforços, você se vê sendo puxado para a escuridão, enquanto as almas perdidas gritam por ajuda. Sua coragem é testada até seus limites, e você deve decidir se foge ou enfrenta as consequências de suas ações. Você verá a verdade por trás dos gritos?",
        choices: [
            { text: "Fugir da cidade", action: "end" },
            { text: "Encarar a verdade dos gritos", action: "truth" },
        ],
    },
    truth: {
        text: "Ao encarar a verdade dos gritos, você descobre que cada alma perdida foi uma vítima de uma traição. Elas foram enganadas e sacrificadas por aqueles que buscavam poder. Ao ouvir suas histórias, uma onda de tristeza e desespero a envolve. Você percebe que a cidade é um reflexo de toda a dor e traição que ocorreu em vida. Uma escolha dolorosa se apresenta: lutar pela verdade e pela justiça, ou permitir que a escuridão a consuma.",
        choices: [
            { text: "Lutar pela justiça", action: "justice" },
            { text: "Deixar a escuridão consumi-lo", action: "end" },
        ],
    },
    justice: {
        text: "Ao lutar pela justiça, você se levanta contra a cidade e seus horrores. A escuridão tenta te derrubar, mas sua determinação brilha intensamente. Você invoca a força dos espíritos libertos para ajudá-lo. Juntos, vocês desafiam a cidade, mas a batalha deixa cicatrizes profundas em sua alma. Ao final, você pode ter libertado algumas almas, mas sua própria essência foi marcada para sempre. Ao sair, você sabe que a cidade sempre aguardará por sua volta.",
        choices: [
            { text: "Recomeçar", action: "start" },
        ],
    },
    end: {
        text: "Sua jornada chega a um fim trágico. A escuridão o consome, e sua essência se torna parte da cidade amaldiçoada. Seu nome será esquecido nas sombras, e as almas que você poderia ter salvo clamarão por toda a eternidade. Um profundo anseio por um novo começo a preenche, mas a cidade nunca permite que suas vítimas escapem. Você tentará novamente?",
        choices: [
            { text: "Recomeçar", action: "start" },
        ],
    },
};

// Função para iniciar o jogo
function startGame() {
    showStory("start");
}

// Função para exibir o texto da história e as escolhas
function showStory(storyKey) {
    const currentStory = story[storyKey];
    storyElement.textContent = currentStory.text;
    buttonsElement.innerHTML = ""; // Limpa os botões anteriores

    currentStory.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => showStory(choice.action);
        buttonsElement.appendChild(button);
    });
}

// Iniciar o jogo
startGame();
