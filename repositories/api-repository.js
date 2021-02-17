"use strict";

const axios = require("axios");

const { URL_API } = process.env;

async function getCharactersByQuery(query) {
  try {
    const url = `${URL_API}/api/characters${query}`;
    const response = await axios.request({
      method: "get",
      url,
    });

    return response.data;
  } catch (err) {
    throw new Error("Error conexion con la api");
  }
}

module.exports = {
  getCharactersByQuery,
};
