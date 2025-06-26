const express = require('express');
const os = require('os');
const app = express();

app.get('/hello', (req, res) => res.send("Hello, World!"));
app.get('/status', (req, res) => {
    res.json({ uptime: os.uptime(), status: "OK" });
});

app.listen(80, () => console.log('API escuchando en el puerto 80'));
