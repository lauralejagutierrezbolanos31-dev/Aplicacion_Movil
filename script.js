// 1. Seleccionar elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonReset = document.getElementById("btn-reset");
const tbody = document.getElementById("tabla-registros");

// 2. Variable de estado (let, NO const, porque va a cambiar)
let likes = 0;

// 3. Escuchar el evento click
boton.addEventListener("click", () => {
  // Incrementar y actualizar el DOM
  likes++;
  textoContador.textContent = likes;

  // Reto 2: rojo si pasa de 10
  textoContador.style.color = likes > 10 ? "#e74c3c" : "#3498db";

  // Obtener la hora y formatearla HH:MM:SS
  const ahora = new Date();
  const horaFormateada = ahora.toLocaleTimeString("es-CO", { hour12: true });

  // Crear fila y celdas
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");

  celdaNumero.textContent = likes;
  celdaHora.textContent = horaFormateada;

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  // Insertar AL INICIO del tbody (lo más reciente arriba)
  tbody.prepend(fila);
});

// 4. Reto 1: reiniciar
botonReset.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  textoContador.style.color = "#3498db"; // vuelve al azul
  tbody.innerHTML = "";                  // vacía la tabla
});