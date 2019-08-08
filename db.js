import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/players", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Database is online 💽");
const handleError = error => console.log(`Error on Database ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
