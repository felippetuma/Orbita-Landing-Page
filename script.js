// Lógica dos botões dos planos
function plansButtonClick() {
    alert("O nosso site ainda está em desenvolvimento, volte mais tarde..")
}

function validateForm() {
    let emailInput = document.getElementById("email-input");

    if (emailInput.value == "") {
        alert("Por favor, preencha o campo de e-mail antes de enviar.");
        return
    
    } else {
        alert("Email cadastrado com sucesso!");
    }
}

// Lógica do botão backToTop
let topButton = document.getElementById("topButton")

function backToTop() {
    window.scrollTo({top:0, behavior: "smooth"})
}

window.addEventListener("scroll", function(){
     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
  }
})

let currentTheme = 0
function switchTheme() {
    currentTheme = (currentTheme + 1) % 4;
    
    let root = document.documentElement;

    if (currentTheme === 0) {
        root.style.setProperty('--bg-color', '#1d1c1c');
        root.style.setProperty('--copyright-theme', '#555555')
        document.querySelectorAll('.plans, footer, .quiz-section').forEach(el => el.style.backgroundColor = '#1d1c1c');

    } else if (currentTheme === 1) {
        root.style.setProperty('--bg-color', '#0f1f15');
        root.style.setProperty('--copyright-theme', '#e7e7e7')
        document.querySelectorAll('.plans, footer, .quiz-section').forEach(el => el.style.backgroundColor = '#0f1f15');

    }
    
}


// Lógica do quiz
let points = 0
let currentQuestion = 0

const quizTitle = document.querySelector('.quiz-title');
const quizDesc = document.querySelector('.quiz-description');
const quizList = document.querySelector('.quiz-list');
const quizCounter = document.querySelector('.quiz-counter');

// o "yes" adiciona ponto e o "no" tira o ponto, da variavel points 
// UPDATE: Eu removi os pontos do no, deixei só com que o yes desse pontos, fica mais lógico assim
let questions = [
    {
        title: "Você já perdeu parte da produção por causa de uma mudança no clima que te pegou de surpresa?",
        yes: 1,
        no: 0,
    },
    {
        title: "Quando uma praga surge na sua plantação, você costuma demorar para descobrir o foco inicial dela?",
        yes: 1,
        no: 0,
    },
    {
        title: "Seu terreno tem mais de 2.000 hectares e você sente que é impossível acompanhar tudo de perto visualmente?",
        yes: 1,
        no: 0,
    },
    {
        title: "Você toma decisões sobre o plantio baseadas no 'achismo' ou na intuição, em vez de usar dados concretos?",
        yes: 1,
        no: 0,
    },
    {
        title: "Você gostaria de receber avisos automáticos no celular ou computador sempre que houver risco de calor extremo ou granizo na sua região?",
        yes: 1,
        no: 0,
    },
    {
        title: "Você tem dificuldade para calcular se o valor que gasta por hectare mensalmente está trazendo o retorno esperado?",
        yes: 1,
        no: 0,
    },
    {
        title: "Você sente falta de recomendações personalizadas de cultivo para o tipo específico de planta que você cultiva?",
        yes: 1,
        no: 0,
    },
    {
        title: "Se um funcionário ou vizinho notar uma anomalia na terra, você tem um painel centralizado para registrar e acompanhar esse alerta?",
        yes: 1,
        no: 0,
    },
    {
        title: "Você investe muito dinheiro na lavoura e sente que sua propriedade está desprotegida contra imprevistos do Agronegócio?",
        yes: 1,
        no: 0,
    },
    {
        title: "Se você pudesse ver o status da sua fazenda de qualquer lugar, em tempo real, isso facilitaria a sua vida hoje?",
        yes: 1,
        no: 0,
    },
    
]

function loadQuestion() {
    if (currentQuestion >= questions.length) {
       showResult();
       return;
    }

    let data = questions[currentQuestion];

    // Setta as strings aqui
    quizTitle.textContent = data.title;
    quizCounter.textContent = `${currentQuestion + 1}/${questions.length}`;

    
}

function registerAnswer(choice) {
    let data = questions[currentQuestion];


    if (choice === 'yes') {
        points += data.yes;
    } else if (choice === 'no') {
        points += data.no;
    }

    // Incrementa o contador e carrega a proxima questão
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    quizDesc.textContent = "Diagnóstico Concluído!";
    quizCounter.textContent = "";
    quizList.innerHTML = "";

    if (points >= 4) {
        quizTitle.innerHTML = `<strong>${points} pontos.</strong> Você se beneficiaria muito do sistema de Predições e Alertas em tempo real da Orbita para evitar prejuízos financeiros.`;
    } else {
        quizTitle.innerHTML = `<strong>${points} pontos.</strong> Seus processos atuais são seguros, mas o Plano Normal da Orbita pode automatizar seu mapeamento por um custo fixo baixo.`;
    }
}

loadQuestion()

