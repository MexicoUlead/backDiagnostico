const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const { actualizarFile } = require('../helpers/actualizar-file');

const fileUpload = (req, res = response) => {

    const id = req.params.id;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay archivo para subir'
        });
    }

//procesamiento de archivo

const file = req.files.file;

const cutName = file.name.split('.');
const extArchivo = cutName[cutName.length - 1];

const extValidas = ['pdf','word'];
if(!extValidas.includes(extArchivo)){
    return res.status(400).json({
            ok: false,
            msg: 'Este tipo de documento no es valido, debe ser pdf o word'
        });
}

// generar guardado

const nombreArchivo = `${uuidv4()}.${extArchivo}`;
//ruta de guardado
const path = `./uploads/${nombreArchivo}`;
//mover archivo
file.mv(path,(err) => {
    if (err) {
        return res.status(500).json({
            err,
            msg:'imagen no se guarda en la ruta'
        });
    }
    //actualiza o ingresa archivo 
    actualizarFile(id, nombreArchivo);


    res.json({
        ok:true,
        msg:'fileuploaded',
        nombreArchivo
    });
});



}

const retornarFile = (req , res = response) =>{
    const file = req.params.file;

    const pathImg = path.join( __dirname, `../uploads/${file}`);

    res.sendFile(pathImg);

}

module.exports = {
    fileUpload,
    retornarFile
}