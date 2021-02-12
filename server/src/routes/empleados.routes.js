const  Routes = require ('express')
const router =Routes()

const empleadocontroller=  require('../controllers/empleado.controller')

//crud 
// cread-read-update-delete 

router.get('/',empleadocontroller.getempleados);

router.post('/',empleadocontroller.createempleado);

router.get('/:id',empleadocontroller.getempleado);

router.put('/:id',empleadocontroller.editempleado);

router.delete('/:id',empleadocontroller.deleteempleados);

module.exports= router