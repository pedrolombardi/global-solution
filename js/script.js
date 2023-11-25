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
// Função 3: validar formulário
document.getElementById("form").addEventListener("submit", function(event){
      event.preventDefault()
      var formContent = {
        name: document.getElementById("form-name").value,
        email: formEmail=(document.getElementById("form-email").value),
        phone: formPhone=(document.getElementById("form-phone").value),
        text: formText=(document.getElementById("form-text").value),
      }
      console.log(formContent);
      document.getElementById("form-send").style.display = "none"
      document.getElementById("form-sent").style.display = "block"
    });
// Função 4: modo escuro (dark mode)
function dark() {
    var toggleDark = false
    if (toggleDark == false) {
        document.documentElement.style.setProperty('--main-color', '#4976fb')
        document.documentElement.style.setProperty('--text-color', 'white')
        document.documentElement.style.setProperty('--back-color', 'rgb(40,40,40)')
        toggleDark = true
    }
    ;
}