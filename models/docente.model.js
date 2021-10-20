const {Schema, model} = require('mongoose');

const DocenteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direc: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},{ collection: 'docentes'});

DocenteSchema.method('toJSON', function(){
    const { __v, ...object} = this.toObject();
    return object;
})

module.exports = model('Docente', DocenteSchema);