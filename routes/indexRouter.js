import { Router } from "express";
import { format } from "date-fns";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "PPPPpppp"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "PPPPpppp"),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

export default indexRouter;
