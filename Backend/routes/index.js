const permisos = require('./permisos.route')
const info = require('./info.route')

module.exports = app => {
    app.use("/permiso", permisos);
    app.use('/info', info)
}