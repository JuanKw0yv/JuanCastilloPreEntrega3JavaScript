const datosComponentes = {
    procesadores: {
        Intel: [
            { nombre: 'Intel Core i9-13900K', precio: 599, imagen: 'ruta_a_imagen1.jpg' },
            { nombre: 'Intel Core i7-13700K', precio: 409, imagen: 'ruta_a_imagen2.jpg' },
            { nombre: 'Intel Core i5-13600K', precio: 319, imagen: 'ruta_a_imagen3.jpg' }
        ],
        AMD: [
            { nombre: 'AMD Ryzen 9 7950X', precio: 699, imagen: 'ruta_a_imagen4.jpg' },
            { nombre: 'AMD Ryzen 7 7800X', precio: 449, imagen: 'ruta_a_imagen5.jpg' },
            { nombre: 'AMD Ryzen 5 7600X', precio: 299, imagen: 'ruta_a_imagen6.jpg' }
        ]
    },
    tarjetas: {
        NVIDIA: [
            { nombre: 'NVIDIA RTX 3090', precio: 1499, imagen: 'ruta_a_imagen7.jpg' },
            { nombre: 'NVIDIA RTX 3080', precio: 899, imagen: 'ruta_a_imagen8.jpg' },
            { nombre: 'NVIDIA RTX 3070', precio: 599, imagen: 'ruta_a_imagen9.jpg' }
        ],
        Radeon: [
            { nombre: 'Radeon RX 6900XT', precio: 999, imagen: 'ruta_a_imagen10.jpg' },
            { nombre: 'Radeon RX 6800XT', precio: 649, imagen: 'ruta_a_imagen11.jpg' },
            { nombre: 'Radeon RX 6700XT', precio: 479, imagen: 'ruta_a_imagen12.jpg' }
        ]
    },
    almacenamiento: {
        SSD: [
            { nombre: 'Samsung 980 Pro 1TB', precio: 199, imagen: 'ruta_a_imagen13.jpg' },
            { nombre: 'WD Black SN850 1TB', precio: 179, imagen: 'ruta_a_imagen14.jpg' },
            { nombre: 'Crucial P5 Plus 1TB', precio: 149, imagen: 'ruta_a_imagen15.jpg' }
        ],
        HDD: [
            { nombre: 'Seagate BarraCuda 2TB', precio: 59, imagen: 'ruta_a_imagen16.jpg' },
            { nombre: 'Western Digital Blue 1TB', precio: 49, imagen: 'ruta_a_imagen17.jpg' },
            { nombre: 'Toshiba X300 4TB', precio: 119, imagen: 'ruta_a_imagen18.jpg' }
        ]
    },
    motherboards: {
        Intel: [
            { nombre: 'Motherboard Intel Z590', precio: 299, imagen: 'ruta_a_imagen19.jpg' },
            { nombre: 'Motherboard Intel B560', precio: 199, imagen: 'ruta_a_imagen20.jpg' }
        ],
        AMD: [
            { nombre: 'Motherboard AMD X570', precio: 289, imagen: 'ruta_a_imagen21.jpg' },
            { nombre: 'Motherboard AMD B550', precio: 179, imagen: 'ruta_a_imagen22.jpg' }
        ]
    }
};

// Mostrar los datos según la selección
function mostrarDatos() {
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("subcategoria") ? document.getElementById("subcategoria").value : '';
    const resultado = document.getElementById("resultado");

    let datos = [];

    if (categoria in datosComponentes) {
        if (tipo in datosComponentes[categoria]) {
            datos = datosComponentes[categoria][tipo];
        }
    }

    resultado.innerHTML = `<h2>Resultados de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</h2>`;

    datos.forEach(item => {
        resultado.innerHTML += `
            <div class="resultado-item">
                <img src="${item.imagen}" alt="${item.nombre}" class="resultado-img">
                <p>${item.nombre} - $${item.precio}</p>
                <button onclick="añadirAlCarrito('${item.nombre}', ${item.precio})">Añadir al Carrito</button>
            </div>
        `;
    });
}

function actualizarSubcategoria() {
    const categoria = document.getElementById("categoria").value;
    const subcategoriaContainer = document.getElementById("subcategoriaContainer");
    const subcategoriaSelect = document.getElementById("subcategoria");

    const subcategorias = Object.keys(datosComponentes[categoria] || {});

    if (subcategorias.length > 0) {
        subcategoriaContainer.style.display = 'block';
        subcategoriaSelect.innerHTML = `<option value="">Selecciona un tipo</option>`;
        subcategorias.forEach(subcategoria => {
            subcategoriaSelect.innerHTML += `<option value="${subcategoria}">${subcategoria}</option>`;
        });
    } else {
        subcategoriaContainer.style.display = 'none';
        subcategoriaSelect.innerHTML = '';
    }
}

// Manejo de cambios en el formulario
document.getElementById("categoria").addEventListener('change', actualizarSubcategoria);
