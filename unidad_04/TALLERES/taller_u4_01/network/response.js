exports.success = function(req, res, data, num_status) {
    res.status( num_status ).send( { error:'ESTAS EN USUARIO', body:data })
}

exports.error = function(req, res, message, num_status) {
    res.status( num_status ).send( { error:message, body:'' } )
}