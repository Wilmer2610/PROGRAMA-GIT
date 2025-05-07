const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const archivoReservas = "server/reservas.json";

// Cargar reservas
app.get("/reservas", (req, res) => {
    if (fs.existsSync(archivoReservas)) {
        const data = fs.readFileSync(archivoReservas);
        res.json(JSON.parse(data));
    } else {
        res.json([]);
    }
});

// Guardar una nueva reserva
app.post("/reservas", (req, res) => {
    const nuevaReserva = req.body;
    let reservas = [];

    if (fs.existsSync(archivoReservas)) {
        const data = fs.readFileSync(archivoReservas);
        reservas = JSON.parse(data);
    }

    reservas.push(nuevaReserva);
    fs.writeFileSync(archivoReservas, JSON.stringify(reservas, null, 2));

    res.json({ mensaje: "Reserva guardada exitosamente." });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
