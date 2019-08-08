import Post from "../models/Post";

export const search = (req, res) => {
    res.render("search");
};

export const recruit = (req, res) => {
    res.render("recruit");
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
