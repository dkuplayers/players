import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Database is online 💽");
const handleError = error => console.log(`Error on Database ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
