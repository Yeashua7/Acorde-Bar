// Menú de boquitas dinámico
const bocas = [
  { nombre: "Carne oreada", precio: "$1.25" },
  { nombre: "Carne ahumada", precio: "$1.25" },
  { nombre: "Chorizo", precio: "$1.25" },
  { nombre: "Queso frito", precio: "$1.25" },
  { nombre: "Sopa", precio: "$1.25" },
  { nombre: "Ceviche camarón", precio: "$1.25" }
];

// Lista de cervezas
const cervezas = [
  { nombre: "Pilsener", precio: 1.25 },
  { nombre: "Golden", precio: 1.25 },
  { nombre: "Suprema", precio: 1.25 },
  { nombre: "Agua", precio: 1.25},
  { nombre: "Coca Cola", precio: 1.25 },
];

function mostrarCervezas() {
  const contenedor = document.getElementById('cervezas-menu');
  cervezas.forEach(cerveza => {
    const div = document.createElement('div');
    div.className = 'cerveza-item';
    div.innerHTML = `
      <span class="cerveza-nombre">${cerveza.nombre}</span>
      <span class="cerveza-price">$${cerveza.precio.toFixed(2)}</span>
    `;
    // Animación en hover/click
    div.addEventListener('mouseenter', () => div.classList.add('active'));
    div.addEventListener('mouseleave', () => div.classList.remove('active'));
    // Para móvil: toggle al tocar
    div.addEventListener('touchstart', function(e) {
      e.stopPropagation();
      document.querySelectorAll('.cerveza-item').forEach(item => item.classList.remove('active'));
      div.classList.add('active');
    });
    contenedor.appendChild(div);
  });
  // Cierra animación en móvil al tocar fuera
  document.body.addEventListener('touchstart', function() {
    document.querySelectorAll('.cerveza-item').forEach(item => item.classList.remove('active'));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Render boquitas
  const bocasMenu = document.getElementById('bocas-menu');
  bocas.forEach(boca => {
    const div = document.createElement('div');
    div.className = 'boca-item';
    div.innerHTML = `
      <span class="boca-nombre">${boca.nombre}</span>
      <span class="boca-price">${boca.precio}</span>
    `;
    // Animación en hover/click
    div.addEventListener('mouseenter', () => div.classList.add('active'));
    div.addEventListener('mouseleave', () => div.classList.remove('active'));
    // Para móvil: toggle al tocar
    div.addEventListener('touchstart', function(e) {
      e.stopPropagation();
      document.querySelectorAll('.boca-item').forEach(item => item.classList.remove('active'));
      div.classList.add('active');
    });
    bocasMenu.appendChild(div);
  });

  // Cierra animación en móvil al tocar fuera
  document.body.addEventListener('touchstart', function() {
    document.querySelectorAll('.boca-item').forEach(item => item.classList.remove('active'));
  });

  // Render cervezas
  mostrarCervezas();
});