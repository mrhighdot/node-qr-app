import express, { Express, Request, Response } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import db from "./utils/connection/connect-db.ts";

const app: Express = express();
//Connect to database
console.log(db);

app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.status(200).json("Hello");
});

const port = 5000;

app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
