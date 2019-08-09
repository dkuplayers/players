import express from "express";
import routes from "../routes";
import {
    recruit,
    uploadRecruit,
    editRecruit,
    deleteRecruit,
    recruitDetail,
    postRecruit
} from "../controllers/recruitController";
import { onlyPrivate } from "../middleware";

const recruitRouter = express.Router();

recruitRouter.get(routes.recruit, onlyPrivate, recruit);
recruitRouter.get(routes.uploadRecruit, onlyPrivate, uploadRecruit);
recruitRouter.get(routes.editRecruit, onlyPrivate, editRecruit);
recruitRouter.get(routes.deleteRecruit, onlyPrivate, deleteRecruit);
recruitRouter.get(routes.recruitDetail, onlyPrivate, recruitDetail);

recruitRouter.post(routes.uploadRecruit, postRecruit);

export default recruitRouter;
