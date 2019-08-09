import express from "express";
import routes from "../routes";
import { search } from "../controllers/recruitController";
import {
    home,
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout
} from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middleware";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, onlyPrivate, search);

export default globalRouter;
