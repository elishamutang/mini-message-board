import { Router } from "express";
import * as messageController from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/messages/:messageId", messageController.getSingleMessage);
indexRouter.get("/new", messageController.createNewMessage);
indexRouter.post("/new", messageController.submitNewMessage);
indexRouter.all("*", messageController.error);

export default indexRouter;
