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

export const editRecruit = (req, res) => {
    res.render("editRecruit");
};

export const deleteRecruit = (req, res) => {
    res.render("deleteRecruit");
};

export const recruitDetail = (req, res) => {
    res.render("recruitDetail");
};
