const Router = require("express");
const usesController = require("../Controllers/userController.cjs");
const router = Router.Router();

router.post("/api/users/register", usesController.register);
router.post("/api/users/login", usesController.login);

module.exports = router;
