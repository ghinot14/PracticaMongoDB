const mongoose = require('mongoose');

const dbConection = async() =>{
    try{
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la DB');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
module.exports = {
    dbConection
} 