/*
    Proyectos
    ruta: /api/salon
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getSalon, crearSalon, actualizarSalon, eliminarSalon } = require('../controllers/salon.controller');


const router = Router();

router.get('/',getSalon);

router.post('/', [
        validarJWT,
        validarCampos
    ],
    crearSalon);


router.put('/:id', [
        validarJWT,
        validarCampos
    ],
    actualizarSalon);

router.delete('/:id',eliminarSalon);



module.exports = router;