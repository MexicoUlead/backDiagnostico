const Diagnostico = require('../models/diagnostico');

const actualizarFile =  async(id,nombreArchivo,tipo) => {

    const diagnostico = await Diagnostico.findById(id);

    if(!diagnostico) {
        console.log('No es un diagnostico por id');
        return false;
    }

    if(tipo == 'file1'){
    diagnostico.file1 = nombreArchivo;
    
    } if (tipo == 'file2'){
     diagnostico.file2 = nombreArchivo;
    }
    await diagnostico.save();
    return true;
}


module.exports = {
    actualizarFile
}