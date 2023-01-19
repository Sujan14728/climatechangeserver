const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;
const objectRouter = require("./routes/object.routes");

const mongoDB = "mongodb://admin:admin123@95.216.141.221:12345/admin";

mongoose.set("strictQuery", true);
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json({
    status: "okay",
  });
});

app.use("/api", objectRouter);

app.listen(PORT, () => {
  console.log(`server listening at port: http://localhost:${PORT}`);
});
