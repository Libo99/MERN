const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.GetUser);

router.get("/:id", UserController.GetbyId);
router.post("/login", UserController.Login);
router.post("/signup", UserController.SignUp);
router.put("/:id", UserController.UpdateUser);

router.delete("/:id", UserController.DeleteUser);

module.exports = router;
