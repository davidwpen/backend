"use strict";

const express = require("express");
const validateAuth = require("../middlewares/validate-auth");
const registerUser = require("../controllers/user-register");
const loginUser = require("../controllers/login-user");
const getCharactersByQuery = require("../controllers/get-information-api-by-query");

const router = express.Router();

//Publicas
router.route("/register").post((req, res) => registerUser(req, res));
router.route("/login").post((req, res) => loginUser(req, res));
// //Privadas
router
  .route("/got/characters")
  .all(validateAuth)
  .get((req, res) => getCharactersByQuery(req, res));

module.exports = router;
