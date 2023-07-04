import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";

const app = express();

app.use(cors()); //cross-origin request 
app.use('/',router);

DBConnection();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})
