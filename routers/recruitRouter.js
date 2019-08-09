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

<<<<<<< HEAD
=======
<<<<<<< HEAD
recruitRouter.get(routes.recruit, onlyPrivate, recruit);
recruitRouter.get(routes.uploadRecruit, onlyPrivate, uploadRecruit);
recruitRouter.get(routes.editRecruit, onlyPrivate, editRecruit);
recruitRouter.get(routes.deleteRecruit, onlyPrivate, deleteRecruit);
recruitRouter.get(routes.recruitDetail, onlyPrivate, recruitDetail);
=======
>>>>>>> master
recruitRouter.get(routes.home, recruit);
recruitRouter.get(routes.uploadRecruit, uploadRecruit);
recruitRouter.get(routes.editRecruit, editRecruit);
recruitRouter.get(routes.deleteRecruit, deleteRecruit);
recruitRouter.get(routes.recruitDetail, recruitDetail);
>>>>>>> Modified-recruit Fixed-router

recruitRouter.post(routes.uploadRecruit, postRecruit);

export default recruitRouter;
