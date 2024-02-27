/*// Array para representar el carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
  const producto = {
    id: id,
    nombre: nombre,
    precio: precio
  };
  carrito.push(producto);
  actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
  const indice = carrito.findIndex(producto => producto.id === id);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    actualizarCarrito();
  }
}

// Función para actualizar la interfaz de usuario del carrito
function actualizarCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoContainer.innerHTML = '';

  carrito.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.innerHTML = `
      <p>${producto.nombre} - $${producto.precio}</p>
      <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
    `;
    carritoContainer.appendChild(productoDiv);
  });
}

// Ejemplos de cómo agregar productos al carrito
document.getElementById('botonAgregar1').addEventListener('click', () => {
  agregarAlCarrito(1, 'Producto 1', 150.00);
});

// ... Continúa agregando más productos y botones de agregar aquí

// Inicializa la interfaz de usuario del carrito
actualizarCarrito();*/
/*document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('aside a')
  const articles = document.querySelectorAll('article section')

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      // Oculta todos los artículos
      articles.forEach((article) => {
        article.style.display = 'none'
      })

      // Muestra el artículo correspondiente al enlace clickeado
      const targetId = this.getAttribute('href').substring(1)
      const targetArticle = document.getElementById(targetId)
      if (targetArticle) {
        targetArticle.style.display = 'block'
      }
    })
  })
})*/
