const diagnostico = require('../models/diagnostico');
const Diagnostico = require ('../models/diagnostico');

const getDiagnosticos = async (req, res) => {

    const desde = Number(req.query.desde) || 0;

    const [diagnosticos, total] = await Promise.all([
        Diagnostico.find()
        .skip(desde)
        .limit(5),

        Diagnostico.countDocuments()
    ]);


    res.json({
        ok:true,
        diagnosticos,
        total
    });

};

const creaDiagnostico = async (req, res) => {

const diagnostico = new Diagnostico (req.body);

await diagnostico.save();

    res.json({
        ok:true,
        diagnostico
    });

}

const borrarDiagnostico = async (req, res = response) =>{

    const uid = req.params.id;

    try {
        
        const diagnosticoDb = await Diagnostico.findById(uid);

        if( !diagnosticoDb){
            return res.status(404).json({
                ok:false,
                msg: 'esta formulario no esta en la base de datos.'
            });
        }
        await diagnostico.findByIdAndDelete(uid);

        res.json({
            ok:true,
            uid
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });

    }

}


module.exports = {
    getDiagnosticos,
    creaDiagnostico,
    borrarDiagnostico
    
}