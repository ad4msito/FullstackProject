//Aca manejo los mensajes de error
exports.success = function (req,res,mensaje,status){
    //status por default
    const statusCode = status || 200;
    //mensaje por default
    const mensajeOK = mensaje || '';
    res.status(statusCode).send({
        error:false,
        status:statusCode,
        body:mensajeOK
    });
}
exports.error = function (req,res,mensaje,status){
    const statusCode = status || 200;
    const mensajeError = mensaje || '';
    res.status(statusCode).send({
        error:true,
        status:status,
        body:mensajeError
    });
}