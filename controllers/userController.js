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
        body: { name, email, password, password2, location }
    } = req;
    if (password !== password2) {
        req.flash("error", "Password doesn't match");
        res.render("join");
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
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
export const userDetail = (req, res) => {
    res.render("userDetail");
};
export const editProfile = (req, res) => {
    res.render("editProfile");
};
export const changePassword = (req, res) => {
    res.render("changePassword");
};
