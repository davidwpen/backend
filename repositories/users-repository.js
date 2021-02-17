"use strict";
const fs = require("fs");
const users = [
  {
    id: 1,
    name: "David",
    email: "Penny@yopmail.com",
    password: "abc123",
  },
  {
    id: 2,
    name: "Jose",
    email: "Perez@yopmail.com",
    password: "abc123",
  },
  {
    id: 3,
    name: "Miguel",
    email: "Visentini@yopmail.com",
    password: "abc123",
  },
];

function registerUser(name, email, passwordHash) {
  const id =
    users.reduce((acc, user) => (user.id > acc ? user.id : user), 0) + 1;

  const newUser = {
    id,
    name,
    email,
    passwordHash,
  };
  // const content = JSON.parse(fs.readFile('users.json'));
  // fs.appendFile("users.json", JSON.stringify(newUser), function (err) {
  //   if (err) throw err;
  //   console.log("guardado");
  // });
  users.push(newUser);

  return newUser;
}

function findAll() {
  return users;
}

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function removeById(id) {
  const user = findById(id);
  const index = users.indexOf(user);

  return users.splice(index, 1);
}

module.exports = {
  findUserByEmail,
  registerUser,
  findAll,
  removeById,
};
