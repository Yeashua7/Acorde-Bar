// Menú de Comida (Leña y Barro)
const platos = [
  { nombre: "Sopa de Gallina India", precio: "$6.00", descripcion: "Cocida en olla de barro con vegetales frescos." },
  { nombre: "Carne Guisada", precio: "$5.50", descripcion: "Guiso especial de la casa cocinado a la leña." },
  { nombre: "Costilla de Cerdo", precio: "$7.00", descripcion: "Ahumada a la leña con salsa barbacoa casera." },
  { nombre: "Frijoles de la Olla", precio: "$4.00", descripcion: "Servidos con arroz, queso y tortillas a mano." },
  { nombre: "Churrasco Típico", precio: "$8.00", descripcion: "Carne asada a la leña con chirmol y chorizo." },
];

// Lista de Bebidas
const bebidas = [
  { nombre: "Horchata de Morro", precio: 1.50 },
  { nombre: "Refresco de Chan", precio: 1.50 },
  { nombre: "Café de Palo", precio: 1.25 },
  { nombre: "Chocolate En Barro", precio: 1.75 },
  { nombre: "Pilsener 330ml", precio: 1.50 },
  { nombre: "Pilsener 750ml", precio: 2.50 },
  { nombre: "Coca-Cola", precio: 1.00 },
];

function mostrarBebidas() {
  const contenedor = document.getElementById('bebidas-menu');
  if (!contenedor) return;

  bebidas.forEach(bebida => {
    const div = document.createElement('div');
    div.className = 'menu-item bebida-item';
    div.innerHTML = `
      <div class="bebida-info">
        <span class="item-nombre">${bebida.nombre}</span>
      </div>
      <span class="item-price">$${bebida.precio.toFixed(2)}</span>
    `;
    // Animación en hover/click
    div.addEventListener('mouseenter', () => div.classList.add('active'));
    div.addEventListener('mouseleave', () => div.classList.remove('active'));
    // Para móvil
    div.addEventListener('touchstart', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
      div.classList.add('active');
    });
    contenedor.appendChild(div);
  });
}

function mostrarPlatos() {
  const contenedor = document.getElementById('platos-menu');
  if (!contenedor) return;

  platos.forEach(plato => {
    const div = document.createElement('div');
    div.className = 'menu-item plato-item';
    div.innerHTML = `
      <div class="plato-info">
        <span class="item-nombre">${plato.nombre}</span>
        <small class="item-desc">${plato.descripcion || ''}</small>
      </div>
      <span class="item-price">${plato.precio}</span>
    `;

    div.addEventListener('mouseenter', () => div.classList.add('active'));
    div.addEventListener('mouseleave', () => div.classList.remove('active'));
    div.addEventListener('touchstart', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
      div.classList.add('active');
    });
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPlatos();
  mostrarBebidas();

  // Cierra animación en móvil al tocar fuera
  document.body.addEventListener('touchstart', function () {
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
  });
});