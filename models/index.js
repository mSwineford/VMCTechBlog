const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post,{
    foreignKey: "user_db"
});
Post.belongsToMany(User, {
    foreignKey: "user_db"
});
Comment.belongsToMany(User, Post, {
    foreignKey: "user_db"
});