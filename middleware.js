import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
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
