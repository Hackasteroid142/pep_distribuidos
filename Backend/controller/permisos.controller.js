var permisosService = require("../services/permisos.service");
const db = require("../db");
const { DateTime } = require("luxon");
const data = require("../db/permisos_data");

class PermisosController{
    
    async GetAllPermisos(req, res, next){
        const {rows} = await permisosService.GetAllPermisos();
        res.send(rows)
    }

    async GetPermisoById(req, res, next){
        const { id } = req.params
        const { rows } = await permisosService.GetPermisoById(id);
        res.send(rows[0]) 
    }
    
    async AddPermiso(req, res){
        const { body } = req;
        const values = [
            body.rut,
            body.nombre,
            body.edad,
            body.region,
            body.comuna,
            body.direccion,
            data[body.motivo].motivo,
            body.origen,
            body.destino,
            DateTime.local().setZone('America/Santiago').toFormat('yyyy-LL-dd HH:mm'),
            DateTime.local().setZone('America/Santiago').plus({ minutes: data[body.motivo].duracion}).toFormat('yyyy-LL-dd HH:mm')
        ];
        const { row } = await permisosService.AddPermiso(values);
        res.send("Listo");
    }
}

module.exports = new PermisosController();