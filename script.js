// Cuando hago click en el botón calcular
document.getElementById("calcular").addEventListener("click", function () {
  var cantidad = parseInt(document.getElementById("cantidad").value); // Guardamos el número de entradas

  if (cantidad < 1 || cantidad > 20) // Comprueba que la cantidad esté entre 1 y 20
    return alert("Onde vas comprando tantas, nun hay sitio, el límite es 20");

  var precios = { general: 7.5, reducida: 5, vip: 12.5 }; // Precios de cada tipo de entrada
  var subtotal = precios[document.getElementById("tipo").value] * cantidad; // Calculamos subtotal e IVA
  var iva = subtotal * 0.21;

  // Mostramos los resultados en pantalla
  document.getElementById("textoSubtotal").textContent = "Subtotal: " + subtotal.toFixed(2) + " €";
  document.getElementById("textoIva").textContent = "IVA: " + iva.toFixed(2) + " €";
  document.getElementById("textoTotal").textContent = "TOTAL: " + (subtotal + iva).toFixed(2) + " €";
  document.getElementById("resultado").classList.remove("oculto"); // Hace visible la caja del resultado
});

// Cuando se envía el formulario
document.getElementById("contacto").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que la página se recargue
  document.getElementById("mensajeAgradecimiento").classList.remove("oculto"); // Muestra el mensaje de agradecimiento
});

var imagenes = ["logo.png", "teatro.jpg", "teatroViejo.jpg"]; // Lista de imágenes de la galería
var i = 0; // Imagen actual

// Función para cambiar imagen
function cambiar(d) {
  i = (i + d + imagenes.length) % imagenes.length; // Cambia a la siguiente o anterior imagen
  document.getElementById("galeria").src = imagenes[i]; // Cambia el src de la imagen
}