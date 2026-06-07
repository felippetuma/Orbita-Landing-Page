
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

