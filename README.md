# Acordes Fire & Clay Kitchen 🔥🍲

Bienvenido al sitio web oficial de **Acordes Fire & Clay Kitchen**. Este proyecto representa la evolución digital de la marca, enfocándose en la cocina tradicional a la leña y olla de barro, con un modelo de negocio optimizado para **Solo Para Llevar (Delivery & Pick Up)**.

![Logo Acordes](img/logo_new.png)

## 📋 Descripción del Proyecto
Este sitio web es una **Landing Page Progresiva** diseñada para capturar la esencia rústica y cálida de la cocina tradicional, mientras ofrece una interfaz moderna y rápida para los clientes. El diseño utiliza una paleta de colores oscura y elegante (Negro/Carbón y Naranja Fuego) para resaltar la identidad visual.

## ✨ Características Principales

### 1. **Diseño Visual de Alto Impacto**
- **Tema "Fire & Clay"**: Fondo oscuro con gradientes profundos y acentos en naranja fuego y terracota.
- **Tipografía Premium**: Combinación de *Montserrat* (moderna, títulos) y *Merriweather* (clásica, slogans) para evocar tradición.
- **Micro-interacciones**: Efectos de elevación y resplandor en tarjetas y botones.

### 2. **Menú Digital Dinámico**
- El menú de **Platos Fuertes** y **Bebidas** se genera dinámicamente mediante JavaScript (`script.js`).
- Fácil de actualizar: Solo edita la lista de objetos en el código y el sitio se actualiza automáticamente.

### 3. **Optimización "Delivery Only"**
- Se eliminaron mapas físicos para evitar confusiones de ubicación (modelo *Dark Kitchen* o solo desyuno/almuerzo para llevar).
- Banner prominente de **"Solo para llevar • Delivery"** en el encabezado.

### 4. **Integración Social Profesional**
- Botones flotantes (Sticky) siempre visibles.
- **Iconos Vectoriales**: Uso de SVGs oficiales para WhatsApp, Instagram, Facebook y TikTok.
- **Efectos de Marca**: Cada red social tiene su propio color y animación (ej. TikTok tiene efecto glitch).

## 🛠️ Tecnologías Utilizadas
- **HTML5 Semántico**: Estructura limpia y optimizada para SEO.
- **CSS3 Moderno**: Uso de Variables CSS (`:root`), Flexbox, Grid y Media Queries para responsividad total.
- **JavaScript (ES6)**: Lógica ligera para el renderizado del menú y efectos.

## 📂 Estructura de Archivos
```
/
├── index.html       # Estructura principal y contenido
├── styles.css       # Estilos visuales, tema oscuro y responsividad
├── script.js        # Lógica del menú y datos de los productos
├── README.md        # Documentación del proyecto
└── img/
    ├── logo_new.png # Nuevo logo oficial (Fuego y Olla)
    ├── logo.png     # (Backup) Logo anterior
    └── ...
```

## 🚀 Cómo Usar
No se requiere instalación de servidores ni dependencias complejas (Node, React, etc.).
1.  **Clona o descarga** este repositorio.
2.  Haz doble clic en **`index.html`**.
3.  ¡Listo! El sitio cargará instantáneamente en tu navegador.

## ⚙️ Personalización

### Cambiar Productos/Precios
Abre `script.js` y busca las listas `platos` o `bebidas`:
```javascript
const platos = [
  { nombre: "Nuevo Plato", precio: "$8.50", descripcion: "Descripción aquí..." },
  // ...
];
```

### Modificar Colores del Tema
Abre `styles.css` y edita las variables en la raíz:
```css
:root {
  --main-color: #000000;    /* Fondo */
  --accent-color: #E85D04;  /* Color de énfasis (Naranja) */
  --highlight-color: #F5E6CA; /* Color de texto suave */
}
```

---
**© 2026 Acordes Fire & Clay Kitchen.**
*Fuego Real, Sabor Auténtico.*
