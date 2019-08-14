import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

export const localMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    res.locals.MAP_API = process.env.MAP_API;
    next();
};

export const onlyPublic = (req, res, next) => {
    if (res.locals.loggedUser) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (!res.locals.loggedUser) {
        res.redirect(routes.join);
    } else {
        next();
    }
};
