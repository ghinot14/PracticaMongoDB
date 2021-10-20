const {Schema, model} = require('mongoose');

const AlumnoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apelidos: {
        type: String,
        required: true
    },
    codAlumno: {
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
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

AlumnoSchema.method('toJSON', function() {
    const {__v, ...object} = this.toObject();
    return object;
})

module.exports = model('Alumno', AlumnoSchema);