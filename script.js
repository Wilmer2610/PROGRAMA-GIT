document.getElementById("formReserva").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre && fecha && hora) {
        const response = await fetch("http://localhost:3000/reservas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, fecha, hora })
        });

        const result = await response.json();
        mensaje.textContent = result.mensaje;
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    }
});

