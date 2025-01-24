// script.js

const skills = document.querySelectorAll('.skill');
const quadrants = document.querySelectorAll('.quadrant');

// Agregar eventos de arrastrar y soltar
skills.forEach(skill => {
  skill.addEventListener('dragstart', dragStart);
});

quadrants.forEach(quadrant => {
  quadrant.addEventListener('dragover', dragOver);
  quadrant.addEventListener('drop', drop);
});

// Función al iniciar el arrastre
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hidden'); // Oculta temporalmente el elemento mientras se arrastra
  }, 0);
}

// Función cuando el elemento está sobre el cuadrante
function dragOver(e) {
  e.preventDefault(); // Necesario para permitir el "drop"
}

// Función al soltar el elemento
function drop(e) {
  e.preventDefault();
  const skill = document.querySelector('.hidden'); // Elemento arrastrado
  this.appendChild(skill); // Añade el elemento al cuadrante
  skill.classList.remove('hidden'); // Muestra el elemento de nuevo
}
