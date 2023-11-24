// Função 1: animação header com scroll
window.onscroll = function() {
    toggleHeader()
  };
function toggleHeader () {
    var header = document.getElementById("header")
    if (document.scrollingElement.scrollTop >= 30) {
    header.classList.add('small-header')
    } else {
    header.classList.remove('small-header');
    }
}
// Função 2: carrossel

// Função 3:

// Função 4: