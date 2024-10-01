const express = require("express");
const { handleGetAllUsers, handleGetUserById, handleCreateUser } = require("../controllers/user");

const router = express.Router();

//Routes

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router.get("/:id", handleGetUserById);


module.exports = router;