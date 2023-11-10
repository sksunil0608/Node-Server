const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.post('/user/add-user',userController.postAddUser);

router.get('/user/all-users',userController.getAllUsers);

router.delete('/user/delete-user/:userId',userController.deleteUser);

router.post('/user/edit-user/:userId',userController.postEditUser);

module.exports = router;