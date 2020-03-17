// Módulos
let express = require('express');
let app = express();

// Variables
app.set('port', 8081);

// Rutas / Controladores por lógica
require("./routes/rusuarios.js")(app);
require("./routes/rcanciones.js")(app);

// Lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});
