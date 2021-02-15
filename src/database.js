const mongoose= require("mongoose");
//se cambia el localhost por mongo que es el servicio que se ha establecido en compose para mongo
mongoose.connect("mongodb://mongo/prueba")
    .then(db=>{console.log("db connected to ", db.connection.host)})
    .catch(err=>{console.log(err)})