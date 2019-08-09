import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import routes from "./routes";
import dotenv from "dotenv";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import recruitRouter from "./routers/recruitRouter";
import { localMiddleware } from "./middleware";

const app = express();

dotenv.config();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.recruit, recruitRouter);
app.use(routes.users, userRouter);

export default app;
