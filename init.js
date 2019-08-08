import app from "./app";
import "./db";

const PORT = 3000;

const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
