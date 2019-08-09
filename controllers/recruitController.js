import Post from "../models/Post";
import routes from "../routes";

export const search = (req, res) => {
    res.render("search");
};

export const recruit = async (req, res) => {
    const recruits = await Post.find();
    res.render("recruit", { recruits });
};

export const uploadRecruit = (req, res) => {
    res.render("uploadRecruit");
};

export const postRecruit = async (req, res) => {
    console.log(req);
    const {
        body: { title, playTime, location, recruitNum, description }
    } = req;
    const recruit = await Post.create({
        title,
        playTime,
        location,
        recruitNum,
        description
    });
    recruit.save();
    res.redirect(routes.recruit);
};

export const recruitDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const post = await Post.findById(id);
        res.render("recruitDetail", { post });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditRecruit = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const post = await Post.findById(id);
        if (String(post.creator) !== req.user.id) {
            throw Error();
        } else {
            res.render("editRecruit", { post });
        }
    } catch (error) {
        res.redirect(routes.home);
    }

    res.render("editRecruit");
};

export const postEditRecruit = (req, res) => {};

export const deleteRecruit = (req, res) => {
    res.render("deleteRecruit");
};
