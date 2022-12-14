const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Post, Comment } = require("../models");


router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
});
router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "description", "created_at"],
        include: [
            {
                model: Comments,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
        .then(dbPostData => {
            const post = dbPostData.map(post => post.get({ plain: true }));
            res.render("homepage", {
                post,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "title", "description", "created_at"],
        include: [
            {
                model: Comments,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "Post ID not found."});
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render("single-post", {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;