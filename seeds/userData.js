const sequelize = require("../config/connection");
const {User, Post} = require("../models");

const userdata = [
    {
        username: "Billy",
        email: "billy@bob.email.com",
        password: "supersecret12345"
    },
    {
        username: "CoolGuy2004",
        email: "cool@cool.email.com",
        password: "password12345"
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;