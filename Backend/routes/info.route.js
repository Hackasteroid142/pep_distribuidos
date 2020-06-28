const Router = require("express-promise-router");
const infoController = require("../controller/info.controller");
const router = new Router();

router.get("/", infoController.GetInfoPermiso);

module.exports = router;