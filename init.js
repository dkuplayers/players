import app from "./app";
import dotenv from "dotenv";
import "./db";

dotenv.config();

import "./models/User";
import "./models/Post";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
