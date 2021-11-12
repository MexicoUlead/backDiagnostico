// ruta: api/upload/


const { Router } = require('express');
const expressfileUpload = require('express-fileupload');

const { fileUpload, retornarFile } = require('../controllers/uploads');

const router = Router();


router.use(expressfileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));



router.put('/:id', fileUpload);

router.get('/:file', retornarFile);

module.exports = router;