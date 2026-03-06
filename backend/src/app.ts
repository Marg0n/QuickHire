import type { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";

const app: Application = express();

//* Parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
})

export default app;