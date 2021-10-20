const {Schema, model} = require('mongoose');

const SalonSchema = Schema({
    codSalon: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

SalonSchema.method('toJSON', function(){
    const{__v, ...Object} = this.toObject();
    return Object; 
})

module.exports = model('Salon',SalonSchema);