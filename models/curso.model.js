const {Schema, model} = require('mongoose')

const CursoSchema = Schema({
    nombCurso: {
        type: String,
        required: true
    },
    docente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Docente'
    },
    alumnosTotal: {
        type: Number,
        required: true
    },
    salon: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Salon'
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
})
 CursoSchema.method('toJSON', function(){
     const {__v, ...object} = this.toObject();
     return object;
 })

 module.exports = model('Curso',CursoSchema);