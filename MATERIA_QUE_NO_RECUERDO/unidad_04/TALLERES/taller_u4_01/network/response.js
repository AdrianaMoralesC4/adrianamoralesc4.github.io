// const views = require('../views')7
const path = require('path');

// exports.success = function(req, res, data, num_status) {
//     res.status( num_status ).send( { error:'', body:data })
// }

exports.success = function(req, res, data, num_status) {
   res.status(num_status).sendFile(path.join(__dirname, '../views', 'index_user.html'));
}

exports.error = function(req, res, message, num_status) {
    res.status( num_status ).send( { error:message, body:'' } )
}