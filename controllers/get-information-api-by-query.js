"use strict";

const Joi = require("joi");
const jwt = require("jsonwebtoken");

const apiRepository = require("../repositories/api-repository");
const createJsonError = require("../errors/create-json-errors");

async function getCharacters(req, res) {
  try {
    const { id } = req.auth;
    const { gender, culture } = req.query;

    let query = "";

    if (gender !== undefined && culture !== undefined) {
      query = `?gender=${gender}&culture=${culture}`;
    }

    const charactes = await apiRepository.getCharactersByQuery(query);

    if (!characters) {
      const error = new Error("Error de conexion con la api");
      error.status = 403;
      throw error;
    }

    res.send(user);
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = getCharacters;
