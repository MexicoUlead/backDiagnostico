const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config();
const { actualizarFile } = require('../helpers/actualizar-file');
const { google } = require('googleapis');
const fs = require('fs');

//google auth

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI

);

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

const drive = google.drive({
    version:'v3',
    auth: oauth2Client
});



const fileUpload =  async (req, res = response) => {

    const tipo = req.params.tipo;
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

//drive
const response = await drive.files.create({
    requestBody:{
        name: nombreArchivo,
        mimeType: `file/${extArchivo}`
    },
    media:{
        mimeType: `file/${extArchivo}`,
        body: fs.createReadStream(file.tempFilePath)    
    }
});


    actualizarFile(id, nombreArchivo, tipo );

    res.json({
        ok:true,
        msg:'fileuploaded',
        nombreArchivo
    });

}

const retornarFile = async (req , res = response) =>{
    try {
        const file = req.params.file;
        await drive.permissions.create({
        fileId:file.id,
        requestBody:{
            role: 'reader',
            type: 'anyone'
        }
    })
    const result = await drive.files.get({
        fileId:file.id,
        fields:'webViewLink, webContentLink',
    })
    res = result.data
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    fileUpload,
    retornarFile,
}