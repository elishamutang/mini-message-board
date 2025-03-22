import express from "express";
import path from "node:path";
import url from "node:url";
import indexRouter from "./routes/indexRouter.js";

const PORT = 3000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
