module.exports = function(app, swig) {
    app.get('/autores/agregar', function(req, res) {
        let respuesta = swig.renderFile("views/autores-agregar.html", {});
        res.send(respuesta);
    })
    app.get("/autores", function(req, res) {
        let autores = [ {
            "nombre" : "Tom Morello",
            "grupo" : "Rage Against the Machine",
            "rol" : "guitarrista"
        }, {
            "nombre" : "Steve Hogarth",
            "grupo" : "Marillion",
            "rol" : "cantante"
        }, {
            "nombre" : "Kashikura Takashi",
            "grupo" : "Toe",
            "rol" : "batería"
        } ];

        let respuesta = swig.renderFile("views/autores.html", {
            autores : autores
        });
        res.send(respuesta);
    });
    app.post("/autores/agregar", function(req, res) {
        if (req.body.nombre == null || req.body.nombre == "") {
            res.send("Nombre no enviado en la petición");
        } 
        if (req.body.grupo == null || req.body.grupo == "") {
            res.send("Grupo  no enviado en la petición");
        } 
        if (req.body.rol == null || req.body.rol == "") {
            res.send("Rol no enviado en la petición");
        } 

        res.send("Autor agregado: " + req.body.nombre + "<br>" + " grupo: " + req.body.grupo + "<br>" + " rol: " + req.body.rol);
    });
    app.get('/autores/*', function(req, res) {
        res.redirect("/autores");
    })
};
