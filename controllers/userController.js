import passport from "passport";
import routes from "../routes";

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
    console.log(name, email, password1, password2, location);
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
    res.render("logout");
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
