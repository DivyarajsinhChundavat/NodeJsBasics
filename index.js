const express = require("express");
const userRouter = require("./routes/index");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");
const PORT = 8000;
const app = express();

//connections

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("Server started!"));

//Middleware - plug-ins

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/users", userRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log("Server has started!");
});