import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const home = (req, res) => {
    res.render("home");
};
export const getJoin = (req, res) => {
    res.render("join");
};
export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password1, password2, location }
    } = req;
    if (password1 !== password2) {
        req.flash("error", "Password doesn't match");
        res.render("join");
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password1);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};
export const getLogin = (req, res) => {
    res.render("login");
};
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
    successFlash: "Welcome",
    failureFlash: "Can't log in. Check email and/or password"
});
export const logout = (req, res) => {
    req.flash("info", "Log out");
    req.logout();
    res.redirect(routes.home);
};
export const userDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    const current_user = await User.findById(id);
    res.render("userDetail", { current_user });
};
export const editProfile = async (req, res) => {
    const {
        params: { id }
    } = req;
    const current_user = await User.findById(id);
    console.log(current_user);
    res.render("editProfile", { current_user });
};
export const updateProfile = async (req, res) => {
    const {
        params: { id }
    } = req;
    const {
        body: { name, email, password1, password2 }
    } = req;
    if (password1 !== password2) {
        req.flash("error", "Password doesn't match");
        res.render("editProfile");
    } else {
        try {
            await User.findByIdAndUpdate(id, {
                name,
                email
            });
            const newPass = await User.findById(id);
            newPass.setPassword(password1, () => {
                newPass.save();
            });
            redirect(routes.home);
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};
export const changePassword = (req, res) => {
    res.render("changePassword");
};
