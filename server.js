"use strict";

require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());
app.use(express.static("public"));
app.use(express.json());

const usersRoutes = require("./routes/routes-user");

app.use("/api/v1/users", usersRoutes);

module.exports = app;
