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

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: format(new Date(), "PPPPpppp") });

  setTimeout(() => {
    res.redirect("/");
  }, 1000);
});

export default indexRouter;
