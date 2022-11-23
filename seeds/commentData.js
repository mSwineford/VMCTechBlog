const { Comment } = require("../models");

const commentdata = [
    {
        text: "lorem",
        user_id: 1,
        post_id: 1,
    },
    {
        text: "sample text",
        user_id: 2,
        post_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;