import express from "express";
import routes from "../routes";
import {
    userDetail,
    editProfile,
    changePassword,
    updateProfile
} from "../controllers/userController";
import { onlyPrivate } from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.editProfile(), onlyPrivate, editProfile);
userRouter.post(routes.editProfile(), onlyPrivate, updateProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

userRouter.get(routes.userDetail, onlyPrivate, userDetail);

export default userRouter;
