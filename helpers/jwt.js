const jwt = require ('jsonwebtoken');

// Genera un JWT
const generarJWT = (uid) =>{
    return new Promise((resolve,reject) =>{
        const payload = {
            uid,
        };  
// JWT_SECRET firma que utilizará el servidor
        jwt.sign(payload,process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token ) => { //Calback

            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}