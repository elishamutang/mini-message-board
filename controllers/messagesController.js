import * as db from "../db/queries.js";

const title = "Mini Message Board";

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: title,
    messages: messages,
  });
}

async function getSingleMessage(req, res) {
  const { messageId } = req.params;
  const [requestedMsg] = await db.getMessage(messageId);

  res.render("message", {
    title: title,
    message: requestedMsg,
  });
}

async function createNewMessage(req, res) {
  res.render("form");
}

async function submitNewMessage(req, res) {
  const newMessage = {
    username: req.body.name,
    message: req.body.message,
  };

  await db.postMessage(newMessage);
  res.redirect("/");
}

async function error(req, res) {
  res.render("error", {
    errorMsg: "ERROR, INVALID URL :/",
  });
}

export { getMessages, getSingleMessage, createNewMessage, submitNewMessage, error };
