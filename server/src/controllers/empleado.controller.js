const empleadocontroller ={}
const empleado = require ('../models/empleado')

empleadocontroller.getempleados=async(req,res)=> {
    const empleados=  await empleado.find()
    res.json(empleados)
}
empleadocontroller.createempleado=async(req,res)=> {
    const nuevoempleado= new empleado (req.body)
    await nuevoempleado.save()
    res.send({message:'empleado creado'})
}
empleadocontroller.getempleado=async(req,res)=> {
    const unempleado = await empleado.findById(req.params.id)
    res.send (unempleado)    
}

empleadocontroller.editempleado=async(req,res)=> {
    await empleado.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'empleado actualizado'})
}

empleadocontroller.deleteempleados=async(req,res)=> {
    await empleado.findByIdAndDelete(req.params.id)
    res.json({status:'empleado delete'})
};

module.exports = empleadocontroller;