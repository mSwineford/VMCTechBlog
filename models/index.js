const User = require("./User");
const Post = require("./Post");
const Comments = require("./Comments");

User.hasMany(Post, Comments, {
    foreignKey: "user_id"
});
Post.hasMany(Comments, {
    foreignKey: "post_id"
});

Post.belongsTo(User, {
    foreignKey: "post_id"
});
Comments.belongsTo(User, Post, {
    foreignKey: "post_id"
});