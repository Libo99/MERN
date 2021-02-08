const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.get('/', UserController.GetUser);

router.get('/:id', UserController.GetbyId);

router.post('/', UserController.CreateUser);
router.delete("/:id", UserController.DeleteUser);




module.exports = router;