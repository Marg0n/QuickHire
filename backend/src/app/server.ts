import type { Server } from "http";
import app from "./app.js";

const port = process.env.PORT || 5000;

let server: Server;

async function startServer() {
  server = app.listen(port, () => {
    console.log(`Server is listening in ${port}`);
  });
}

startServer();