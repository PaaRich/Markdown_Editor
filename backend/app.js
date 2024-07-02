const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const router = require("./router/markdownRouter");
const ErrorObj = require("./Utils/ErrorObj");
const globalErrorHandler = require("./Utils/globalErrorHandler");
const cors = require("cors");

app.use(
  cors({
    origin: "https://www.markdowneditor1.netlify.app",
    //origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/markdown", router);
app.all("*", (req, res, next) => {
  const err = new ErrorObj(`This ${req.url} is unknown`, 404);
  next(err);
});
app.use(globalErrorHandler);

module.exports = app;
