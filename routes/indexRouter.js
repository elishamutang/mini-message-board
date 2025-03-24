import { Router } from "express";
import { format } from "date-fns";

const title = "Mini Message Board";

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "PPPPpppp"),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "PPPPpppp"),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: title, messages: messages });
});

indexRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  const requestedMsg = messages.find((message) => message.id === Number(messageId));

  res.render("message", { title: title, message: requestedMsg });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.name,
    added: format(new Date(), "PPPPpppp"),
  });

  setTimeout(() => {
    res.redirect("/");
  }, 1000);
});

indexRouter.all("*", (req, res) => {
  res.render("error", { errorMsg: "ERROR, INVALID URL :/" });
});

export default indexRouter;
