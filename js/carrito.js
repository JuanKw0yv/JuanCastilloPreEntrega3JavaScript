// Función para añadir un artículo al carrito
function añadirAlCarrito(nombre, precio) {
    const carritoItems = JSON.parse(localStorage.getItem('carritoItems')) || [];
    carritoItems.push({ nombre, precio });
    localStorage.setItem('carritoItems', JSON.stringify(carritoItems));
    actualizarCarrito();
}

// Función para actualizar el carrito en la UI
function actualizarCarrito() {
    const carritoItems = JSON.parse(localStorage.getItem('carritoItems')) || [];
    const carritoLista = document.getElementById('carritoItems');
    carritoLista.innerHTML = '';

    carritoItems.forEach((item, index) => {
        carritoLista.innerHTML += `
            <li>
                ${item.nombre} - $${item.precio} 
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </li>`;
    });
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(index) {
    const carritoItems = JSON.parse(localStorage.getItem('carritoItems')) || [];
    carritoItems.splice(index, 1);
    localStorage.setItem('carritoItems', JSON.stringify(carritoItems));
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carritoItems');
    actualizarCarrito();
}

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
