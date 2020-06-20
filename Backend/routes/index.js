const permisos = require('./permisos.route')

module.exports = app => {
    app.use("/api/permiso", permisos)
}