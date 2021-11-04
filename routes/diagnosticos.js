// ruta: /api/diagnosticos

const {Router} = require('express');
const {getDiagnosticos, creaDiagnostico, borrarUsuario} = require('../controllers/diagnosticos');

const router = Router();

router.get('/', getDiagnosticos);

router.post('/', creaDiagnostico);

router.delete('/' , borrarUsuario);



module.exports = router;