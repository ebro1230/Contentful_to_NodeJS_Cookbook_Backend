const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const recipes = require("./routers/recipes");
const cors = require("cors");

app.use(cors("*"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use(recipes);

app.listen(PORT, () => {
  console.log(`Hello.  Listening on port ${PORT}`);
});
