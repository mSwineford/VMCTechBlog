const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./comment-seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedPost();
    await seedComments();

    process.exit(0);
}

seedAll();