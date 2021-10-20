/*
    Proyectos
    ruta: /api/alumno
*/

const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getAlumno, actualizarAlumno, eliminarAlumno, crearAlumno } = require('../controllers/alumno.controller');


const router = Router();

router.get('/',getAlumno);


router.post('/', [
        validarJWT,
        validarCampos
    ],
    crearAlumno);

router.put('/:id', [
        validarJWT,
        validarCampos
    ],
    actualizarAlumno);

router.delete('/:id',
    validarJWT,
    eliminarAlumno);



module.exports = router;