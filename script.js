// Cuando hago click en el botón calcular
document.getElementById("calcular").addEventListener("click", function () {

  // 1. Con esto obtenemos los datos que nos da el usuario
  var tipo = document.getElementById("tipo").value;        // Aquí se busca el tipo de entrada
  var cantidad = parseInt(document.getElementById("cantidad").value); // Y aquí el número de ellas

  // 2. Esta es la definición de la variable precio que uso abajo para hallar más datos
  var precio = 0;

  // 3. Con estos IF y ELSE IF compruebo que tipo de entrada es
  if (tipo === "general") {
    precio = 7.5;
  } 
  else if (tipo === "reducida") {
    precio = 5;
  } 
  else if (tipo === "vip") {
    precio = 12.5;
  }

  // 4. Calculos para hallar el subtotal, IVA (puesto a mano) y total que es la suma de subtotal e IVA
  var subtotal = precio * cantidad;
  var iva = subtotal * 0.21;
  var total = subtotal + iva;

  // 5. Esto muestra los resultados Subtotal (sin iva), el porcentaje de IVA, que es 21% y luego el precio total
  document.getElementById("textoSubtotal").textContent = "Subtotal: " + subtotal.toFixed(2) + " €";
  document.getElementById("textoIva").textContent = "IVA: " + iva.toFixed(2) + " €";
  document.getElementById("textoTotal").textContent = "TOTAL: " + total.toFixed(2) + " €";

  // 6. Mostrar la caja de resultados en donde irá el cargo a pagar
  document.getElementById("resultado").classList.remove("oculto");
});
// Cuando envío el formulario
document.getElementById("contacto").addEventListener("submit", function(e) {

  // Evita que la página se recargue al enviar cosa que queda bastante mal
  e.preventDefault();

  // Mensaje de Agradecimiento
  document.getElementById("mensajeAgradecimiento").classList.remove("oculto");

});

//galeria de fotos, definicion y función de cambio
var imagenes = ["logo.png", "teatro.jpg", "teatroViejo.jpg"];
var i = 0;

function cambiar(d) {
  i = (i + d + imagenes.length) % imagenes.length;
  document.getElementById("galeria").src = imagenes[i];
}