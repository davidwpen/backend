"use strict";

require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());

const usersRouter = require("./routes/routes-user");

const port = process.env.SERVER_PORT;

app.use("/api/v1/users/", usersRouter);

app.listen(port, () => console.log(`Listening ${port}...`));
