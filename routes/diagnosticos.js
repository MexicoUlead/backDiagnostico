// ruta: /api/diagnosticos

const {Router} = require('express');
const {getDiagnosticos, creaDiagnostico, borrarDiagnostico} = require('../controllers/diagnosticos');

const router = Router();

router.get('/', getDiagnosticos);

router.post('/', creaDiagnostico);

router.delete('/:id' , borrarDiagnostico);



module.exports = router;