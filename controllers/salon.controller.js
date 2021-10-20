const { response } = require('express');
const Salon = require('../models/salon.model');

const getSalon = async(req, res = response) => {

    const salon = await Salon.find().populate('usuario', 'nombre');

    res.json({
        ok: true,
        salon
    });
}
const crearSalon = async(req, res = response) => {
    const uid = req.uid;

    const salon = new Salon({
        usuario: uid,
        ...req.body
    });

    try {

        const salonDB = await salon.save();
        res.json({
            ok: true,
            salon: salonDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado'
        });
    }


}
const actualizarSalon = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const salon = await Salon.findById(id);
        if (!salon) {
            return res.status(404).json({
                ok: true,
                msg: 'Aula no existe'

            });
        }

        const cambioSalon = {
            ...req.body,
            usuario: uid
        }

        const salonActualizado = await Salon.findByIdAndUpdate(id, cambioSalon, { new: true });

        return res.json({
            ok: true,
            salon: salonActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado comunicarse con el administrador'
        });
    }


}
const eliminarSalon = async(req, res = response) => {
    const id = req.params.id;

    try {

        const salon = await Salon.findById(id);
        if (!salon) {
            return res.status(404).json({
                ok: true,
                msg: 'Salon no existe'

            });
        }

        await Salon.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Salon Eliminado'

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado comunicarse con el administrador'
        });
    }
}
module.exports = {
    getSalon,
    crearSalon,
    actualizarSalon,
    eliminarSalon
}