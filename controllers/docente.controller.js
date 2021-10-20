const { response } = require('express');
const Docente = require('../models/docente.model');

const getDocente = async(req, res = response) => {

    const docente = await Docente.find().populate('usuario', 'nombre apellido');

    res.json({
        ok: true,
        docente
    });
}
const crearDocente = async(req, res = response) => {
    const uid = req.uid;

    const docente = new Docente({
        usuario: uid,
        ...req.body
    });

    try {

        const docenteDB = await docente.save();
        res.json({
            ok: true,
            docente: docenteDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado'
        });
    }


}
const actualizarDocente = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const docente = await Docente.findById(id);
        if (!docente) {
            return res.status(404).json({
                ok: true,
                msg: 'Docente no existe'

            });
        }

        const cambiosDocente = {
            ...req.body,
            usuario: uid
        }

        const DocenteActualizado = await Profesor.findByIdAndUpdate(id, cambiosProfesor, { new: true });

        return res.json({
            ok: true,
            docente: docenteActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados comunicarse con el administrador'
        });
    }


}
const eliminarDocente = async(req, res = response) => {
    const id = req.params.id;

    try {

        const docente = await Docente.findById(id);
        if (!profesor) {
            return res.status(404).json({
                ok: true,
                msg: 'Docente no existe'

            });
        }

        await Docente.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Docente Eliminado'

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados comunicarse con el administrador'
        });
    }
}


module.exports = {
    getDocente,
    crearDocente,
    actualizarDocente,
    eliminarDocente
}