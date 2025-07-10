// Menú de boquitas dinámico
const bocas = [
  { nombre: "Carne oreada", precio: "$0.50" },
  { nombre: "Carne ahumada", precio: "$0.50" },
  { nombre: "Chorizo", precio: "$0.50" },
  { nombre: "Queso frito", precio: "$0.50" },
  { nombre: "Sopa", precio: "$0.50" },
  { nombre: "Ceviche camarón", precio: "$0.50" }
];

// Lista de bebidas
const drinks = [
  "Pilsener",
  "Golden",
  "Regia",
];

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

  // Render bebidas
  const drinksList = document.getElementById('drinks-list');
  drinks.forEach(drink => {
    const li = document.createElement('li');
    li.textContent = drink;
    drinksList.appendChild(li);
  });
});