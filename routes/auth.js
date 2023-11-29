const router = require("express").Router();
const { registerView, register, loginView, login, logout } = require("../controllers/auth");


router.get("/register", registerView);
router.post("/register", register);
router.get("/login", loginView);
router.post("/login", login);
router.get("/logout", logout);


module.exports = router;