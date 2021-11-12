const { response } = require('express');
const Diagnostico = require ('../models/diagnostico');
//getTodo

const getTodo = async ( req, res = response ) => {

const busqueda = req.params.busqueda;
const regex = new RegExp (busqueda, 'i');

const diagnosticos = await Diagnostico.find({nombreEmpresa: regex});

    res.json({
        ok:true,
        msg:'getTodo',
        busqueda,
        diagnosticos
    })

}

module.exports = {
    getTodo
}