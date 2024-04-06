import express, { Request, Response, Express } from "express";
const app: Express = express();

const port = 3000;

app.listen(port, () => {
  console.log(`app is listining on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Type script + NODE js");
});
