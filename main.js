const btnMenu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
let menuIsOpen = false;

// Función para desactivar el desplazamiento de la página
function disableScroll() {
  // Obtener el valor actual de desplazamiento vertical
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.screenX || document.documentElement.scrollLeft;

  // Agregar estilos para desactivar el desplazamiento
  document.documentElement.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.left = `-${scrollLeft}px`;
}

// Función para habilitar el desplazamiento de la página
function enableScroll() {
  // Obtener los valores de desplazamiento guardados
  const scrollTop = parseInt(document.body.style.top, 10) * -1 || 0;
  const scrollLeft = parseInt(document.body.style.left, 10) * -1 || 0;

  // Restaurar estilos para habilitar el desplazamiento
  document.documentElement.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';

  // Desplazarse a la posición guardada anteriormente
  window.scrollTo(scrollLeft, scrollTop);
}

btnMenu.addEventListener("click", function (e) {
  if (!menuIsOpen) {
    btnMenu.classList.replace("bx-menu", "bx-x");
    navbar.classList.add("active");
    menuIsOpen = true;
    disableScroll()
  } else {
    btnMenu.classList.replace("bx-x", "bx-menu");
    navbar.classList.remove("active");
    menuIsOpen = false;
    enableScroll()
  }
});


var elemento = document.getElementById("cards")

elemento.addEventListener("wheel", function(event) {
  event.preventDefault(); // Evita el desplazamiento de la página

  var delta = event.deltaY || event.detail || (-event.wheelDelta);
  elemento.scrollLeft += delta;
});