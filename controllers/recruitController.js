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
        description,
        creator: req.user.id
    });
    recruit.save();
    res.redirect(routes.recruit);
};

export const recruitDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const post = await Post.findById(id)
            .populate("posts")
            .populate("volunteer");
        console.log(post);
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
        res.render("editRecruit", { post });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditRecruit = async (req, res) => {
    const {
        body: { title, playTime, location, recruitNum, description },
        params: { id }
    } = req;
    try {
        await Post.findByIdAndUpdate(id, {
            title,
            playTime,
            location,
            recruitNum,
            description
        });
        res.redirect(routes.recruitDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteRecruit = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Post.findOneAndRemove({ _id: id });
        res.redirect(routes.home);
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const volunteer = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Post.findByIdAndUpdate(id, {
            volunteers: req.user.id
        });
        res.redirect(routes.recruitDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const cancelVolunteer = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Post.findByIdAndUpdate(
            id,
            {
                $pull: { volunteers: req.user.id }
            },
            { safe: true, upsert: true }
        );
        res.redirect(routes.recruitDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
