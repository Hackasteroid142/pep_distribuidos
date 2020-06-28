const permisos = require('./permisos.route')
const info = require('./info.route')

module.exports = app => {
    app.use("/api/permiso", permisos);
    app.use('/api/info', info)
}