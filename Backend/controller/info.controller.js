const data = require("../db/permisos_data");

class InfoController{
    async GetInfoPermiso(req, res){
        await res.send(data);
    }
}

module.exports = new InfoController();