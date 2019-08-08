import express from "express";
import routes from "../routes";
import {
    recruit,
    uploadRecruit,
    editRecruit,
    deleteRecruit,
    recruitDetail
} from "../controllers/recruitController";

const recruitRouter = express.Router();

recruitRouter.get(routes.recruit, recruit);
recruitRouter.get(routes.uploadRecruit, uploadRecruit);
recruitRouter.get(routes.editRecruit, editRecruit);
recruitRouter.get(routes.deleteRecruit, deleteRecruit);
recruitRouter.get(routes.recruitDetail, recruitDetail);

export default recruitRouter;
