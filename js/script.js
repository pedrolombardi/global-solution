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
function carousel (next) {
    const offset = next === true ? 1 : -1
    const items = event.target.closest("#carousel-main").querySelector("#carousel-items");
    const currentItem = items.querySelector("[data-active]")
    var index = [...items.children].indexOf(currentItem) + offset
    if (index < 0) index = items.children.length - 1
    if (index >= items.children.length) index = 0
    items.children[index].dataset.active = true
    delete currentItem.dataset.active
}
// Função 3:

// Função 4: