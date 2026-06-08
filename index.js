
// Botão pra voltar pra cima, quando o eixo Y passar de 500
let topButton = document.getElementById("topButton")

function backToTop() {
    window.scrollTo({top:0, behavior: "smooth"})
}

window.addEventListener("scroll", function(){
    if (window.pageYOffset > 500) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
})

function switchTheme() {
    currentTheme = (currentTheme + 1) % 4;
    
    let root = document.documentElement;

    if (currentTheme === 0) {
        root.style.setProperty('--bg-color', '#1d1c1c');
        root.style.setProperty('--copyright-theme', '#555555')
        document.querySelectorAll('.plans, footer, .quiz-section').forEach(el => el.style.backgroundColor = '#1d1c1c');

    } 
}