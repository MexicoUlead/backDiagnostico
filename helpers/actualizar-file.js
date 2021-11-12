const Diagnostico = require('../models/diagnostico');
const fs = require('fs');

const actualizarFile =  async(id,nombreArchivo) => {

    const diagnostico = await Diagnostico.findById(id);

    if(!diagnostico) {
        console.log('No es un medico por id');
        return false;
    }

    const pathViejo = `./uploads/${diagnostico.file1}`;
    if(fs.existsSync(pathViejo)){
    //borrar el archivo
    fs.unlinkSync(pathViejo);
    }

    diagnostico.file1 = nombreArchivo;
    await diagnostico.save();
    return true;
}


module.exports = {
    actualizarFile
}