import type { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route.js";

const app: Application = express();

//* Parsers
app.use(express.json());
app.use(cors());

//* Routes
app.use("api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
})

export default app;