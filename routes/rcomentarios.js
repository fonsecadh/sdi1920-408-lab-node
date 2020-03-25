module.exports = function(app, swig, gestorBD) {
    app.post('/comentarios/:cancion_id', function(req, res) {
        let id = req.params.cancion_id;
        let cancionId = gestorBD.mongo.ObjectID(id);
        let comentario = {
            autor : req.session.usuario,
            texto : req.body.texto,
            cancion_id : cancionId
        };
        gestorBD.insertarComentario(comentario, function(id) {
            if (id == null) {
                res.send("Error al añadir comentario");
            } else {
                res.redirect("/cancion/" + req.params.cancion_id);
            }
        });
    });
};
