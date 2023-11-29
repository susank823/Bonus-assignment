const router = require("express").Router();
const { home, addView, add, editView, edit, remove } = require("../controllers/workout");
const isAuthenticated = require('../isAuthenticated');


router.get("/", home);
router.get("/add", isAuthenticated, addView);
router.post("/add", isAuthenticated, add);
router.get("/edit/:id", isAuthenticated, editView);
router.post("/edit", isAuthenticated, edit);
router.get("/remove/:id", isAuthenticated, remove);


module.exports = router;