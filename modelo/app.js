const mongoose = require('mongoose');
const AppSchema = mongoose.Schema(
    { nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    imagen: {
        type:String
    },
    categoria: {
        type:String,
        required: [true,'La categoria es obligatoria']
    },
    precio: {
        type:Number
    }
}
)
//sobreescribimos un método del Schema para modificar el objeto que exporta
AppSchema.methods.toJSON = function() {
    const { _id,...app} = this.toObject() ;
    app.id=_id;
    return app;
}

let App = mongoose.model('App',AppSchema);
module.exports = App;