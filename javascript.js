function validarCampos(event) {
  var membresiaSelect = document.getElementById("membresia");
  var membresia = membresiaSelect.value;

  if (membresia === "") {
    alert("Por favor, seleccione una membresía.");
    event.preventDefault(); // Detener el envío del formulario
    return false;
  }

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre === "" || apellido === "" || email === "") {
    alert("Por favor, complete todos los campos.");
    event.preventDefault(); // Detener el envío del formulario
    return false;
  }

  return true; // Permitir el envío del formulario
}

function calcularTotal() {
  const membresiaSelect = document.getElementById("membresia");
  const totalPagarInput = document.getElementById("totalPagar");
  const membresia = membresiaSelect.value;
  let precioBase = 2000; // Precio base de la membresía Classic

  if (membresia === "Gold") {
    precioBase *= 1.2; // Aumento del 20% para la membresía Gold
  } else if (membresia === "Platinum") {
    precioBase *= 1.5; // Aumento del 50% para la membresía Platinum
  } else if (membresia === "Black") {
    precioBase *= 1.8; // Aumento del 80% para la membresía Black
  }

  totalPagarInput.value = precioBase.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
  // Calcular el total al cargar la página
  calcularTotal();

  // Agregar un event listener al botón de confirmación
  document.getElementById("confirmarcompra").addEventListener("click", function(event) {
    if (!validarCampos(event)) {
      event.preventDefault();
    } else {
      alert("¡Compra confirmada!");
    }
  });
});

