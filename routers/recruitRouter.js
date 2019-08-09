import express from "express";
import routes from "../routes";
import {
    recruit,
    uploadRecruit,
    deleteRecruit,
    recruitDetail,
    postRecruit,
    postEditRecruit,
    getEditRecruit
} from "../controllers/recruitController";
import { onlyPrivate } from "../middleware";

const recruitRouter = express.Router();

recruitRouter.get(routes.home, onlyPrivate, recruit);

recruitRouter.get(routes.uploadRecruit, onlyPrivate, uploadRecruit);
recruitRouter.post(routes.uploadRecruit, postRecruit);

recruitRouter.get(routes.editRecruit, onlyPrivate, getEditRecruit);
recruitRouter.post(routes.editRecruit, onlyPrivate, postEditRecruit);

recruitRouter.get(routes.deleteRecruit, onlyPrivate, deleteRecruit);

recruitRouter.get(routes.recruitDetail(), onlyPrivate, recruitDetail);

export default recruitRouter;
