require("dotenv").config();
const express = require("express");
const host = "localhost";
const port = 5000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const checkToken = require("./middleware/checkToken");
app.use(cors());
app.use((req, res, next) => {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      return res.send({ statusCode: 2, type: 200 }); // Bad request
    }
    next();
  });
});

app.use("/user", require("./routes/user"));
app.use("/sport", checkToken, require("./routes/sport"));
app.use("/tasks", checkToken, require("./routes/tasks"));
app.use("/images", checkToken,  require("./routes/images"));

app.listen(port, () => {
  console.log(chalk.cyan("The app is running"));
});
