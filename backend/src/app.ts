import type { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import router from "./app/routes/index.js";

const app: Application = express();

//* Parsers
app.use(express.json());
app.use(cors());

//* Routes
app.use("api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
})

export default app;