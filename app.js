// Módulos
let express = require('express');
let app = express();

let mongo = require('mongodb');
let swig  = require('swig');
let bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

// Variables
app.set('port', 8081);
app.set('db', 'mongodb://admin:rAgHwOlF79pep@tiendamusica-shard-00-00-mmnxq.mongodb.net:27017,tiendamusica-shard-00-01-mmnxq.mongodb.net:27017,tiendamusica-shard-00-02-mmnxq.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true&w=majority');

// Rutas / Controladores por lógica
require("./routes/rusuarios.js")(app, swig);
require("./routes/rcanciones.js")(app, swig, mongo);
require("./routes/rautores.js")(app, swig);

// Lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});
