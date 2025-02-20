// Definir a data do Dia dos Namorados
const countdownDate = new Date("june 12, 2025 00:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const x = setInterval(function() {

    // Obtém a data e hora de agora
    const now = new Date().getTime();

    // Calcula a diferença entre a data atual e a data do evento
    const distance = countdownDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos de tempo com efeitos de animação
    updateTimeElement("days", days);
    updateTimeElement("hours", hours);
    updateTimeElement("minutes", minutes);
    updateTimeElement("seconds", seconds);

    // Quando a contagem terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "O Dia dos Namorados Chegou!";
        document.getElementById("timer").style.color = "#ff4081"; // Alterando a cor para rosa
        document.getElementById("timer").style.fontSize = "3rem";
    }
}, 1000);

// Função para atualizar os elementos de tempo com animações
function updateTimeElement(id, value) {
    const element = document.getElementById(id);

    // Adicionando animação de contagem
    if (element.innerHTML != value) {
        // Adiciona uma animação de aumento de valor
        element.style.animation = "scale-up 0.5s ease-in-out";
        
        // Atualiza o valor com um efeito suave
        setTimeout(() => {
            element.innerHTML = value;
            element.style.animation = ""; // Remove a animação depois que ela termina
        }, 500); // Espera a animação terminar antes de atualizar o valor
    }
}

// Função de animação para aumentar o número
document.styleSheets[0].insertRule(`
    @keyframes scale-up {
        0% {
            transform: scale(0.5);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`, 0);


