function showAlert() { 
    alert("¡Te has Suscrito!");
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {document.querySelector(".nav-links"). classList.toggle("nav-links-responsive")})