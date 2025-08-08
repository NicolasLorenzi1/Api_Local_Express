const router = require("express").Router();

router.get("/", UserController.getAllUser);
