import express, { Application, Request, Response } from "express";
import cors from "cors";
import { SendEmail } from "./app/utils/sendEmail";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to test the Rest API works with typescript");
});

app.post("/email", (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const result = SendEmail(name, email, message);
  return result;
});

export default app;
