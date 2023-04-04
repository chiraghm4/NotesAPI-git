const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json())

app.use((req, res, next) => {
  console.log(`HTTP Method - ${req.method}, URL - ${req.url}`);
  next();
})

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req, res) => {
  res.status(200).send("homepage");
});

mongoose
  .connect(
    "mongodb+srv://chiragmaski4:lA3oe0GRzpaWJICb@cluster0.3sqgv4j.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8000, () => {
      console.log("port running at 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });


