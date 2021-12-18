/*==================== SECCIONES CLICKEADAS ACTIVAS ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CAMBIO DEL BACKGROUND EN EL HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // Cuando el scroll es mayor a 200vh, se agrega la clase 'scroll-header'
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== ANIMACION DE ELEMENTOS ====================*/
/*const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);*/

/*==================== CREACION DE CLASE ====================*/
class Producto {
  constructor(id, nombre, tiempo, precio) {
    this.id = id;
    this.nombre = nombre;
    this.tiempo = tiempo;
    this.precio = parseFloat(precio);
  }
  agregarEnvio() {
    return this.precio + 30;
  }
}

const productos = [];
productos.push(new Producto("1", "Pizza de Pepperoni", 10, 150)); /*0*/
productos.push(new Producto("2", "Pizza de Hongos & Salame", 12, 170)); /*1*/
productos.push(new Producto("3", "Pizza de Olivas & Bacon", 11, 100)); /*2*/
productos.push(new Producto("4", "Pizza de Olivas & Morron", 12, 95)); /*3*/
productos.push(new Producto("5", "Pizza Margarita", 12, 98)); /*4*/
productos.push(new Producto("6", "Chicken Pizza", 15, 145)); /*5*/
productos.push(new Producto("7", "Pizza Caprese", 13, 129)); /*6*/
productos.push(new Producto("8", "Sausage Pizza", 15, 220)); /*7*/
productos.push(new Producto("9", "Pizza Light Weight", 17, 170)); /*8*/

/*==================== EVENTO CLICK EN CARRITO DE MENÚ ====================*/

const pepperoniPizza = document.getElementById("pepperoniPizza");

console.log(productos);
