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

const recruitRouter = express.Router();

recruitRouter.get(routes.home, recruit);
recruitRouter.get(routes.uploadRecruit, uploadRecruit);
recruitRouter.get(routes.editRecruit, editRecruit);
recruitRouter.get(routes.deleteRecruit, deleteRecruit);
recruitRouter.get(routes.recruitDetail, recruitDetail);

recruitRouter.post(routes.uploadRecruit, postRecruit);

export default recruitRouter;
