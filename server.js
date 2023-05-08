const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const recipes = require("./routers/recipes");
const cors = require("cors");

app.use(cors("*"));
app.use(recipes);

app.listen(PORT, () => {
  console.log(`Hello.  Listening on port ${PORT}`);
});
