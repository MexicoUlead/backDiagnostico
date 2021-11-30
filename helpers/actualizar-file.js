const Diagnostico = require('../models/diagnostico');
const fs = require('fs');

const actualizarFile =  async(id,nombreArchivo) => {

    const diagnostico = await Diagnostico.findById(id);

    if(!diagnostico) {
        console.log('No es un diagnostico por id');
        return false;
    }

if(!diagnostico.file1){
    diagnostico.file1 = nombreArchivo;
    
}else{
    diagnostico.file2 = nombreArchivo;
}

    await diagnostico.save();
    return true;
}


module.exports = {
    actualizarFile
}