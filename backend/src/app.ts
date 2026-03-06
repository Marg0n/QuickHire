import type { Application, Request, Response } from "express";
import express from "express";

const app: Application = express();

//* Parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
})

export default app;