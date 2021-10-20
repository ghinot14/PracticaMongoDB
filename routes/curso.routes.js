/*
    Proyectos
    ruta: /api/curso
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getCurso,
    crearCurso,
    actualizarCurso,
    eliminarCurso
} = require('../controllers/curso.controller');


const router = Router();

router.get('/', getCurso);


router.post('/', [
        validarJWT,
        validarCampos
    ],
    crearCurso);

router.put('/:id', [
        validarJWT,
        validarCampos
    ],
    actualizarCurso);


router.delete('/:id',
    validarJWT,
    eliminarCurso);



module.exports = router; 