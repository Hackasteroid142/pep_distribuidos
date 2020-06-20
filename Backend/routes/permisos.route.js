const Router = require("express-promise-router");
const permisoController = require("../controller/permisos.controller");
const router = new Router();

router.get("/", permisoController.GetAllPermisos);
router.get("/:id", permisoController.GetPermisoById);
router.post("/",permisoController.AddPermiso);

module.exports = router;