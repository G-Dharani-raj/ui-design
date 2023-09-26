const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRouter = require("./routes/user.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res) => res.send("Hello"));

app.listen(8080, () => {
	connectDB();
	console.log("Connected");
});
