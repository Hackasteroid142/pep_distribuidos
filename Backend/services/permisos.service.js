const permisoData = require("../db/index");

class PermisosService{

    GetAllPermisos(){
        return permisoData.query('SELECT * FROM permiso');
    }

    GetPermisoById(id){
        return permisoData.query('SELECT * FROM permiso WHERE user_id = $1',[id])
    }

    AddPermiso(req){
        return permisoData.query('INSERT INTO permiso(rut, nombre, edad, region, comuna, direccion, motivo, origen, destino, emision, vence) VALUES' +
                                ' ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING nombre'
                                , req)
    }
}

module.exports = new PermisosService();
