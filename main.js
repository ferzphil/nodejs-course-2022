const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index");
app.set("view engine", "pug");
const connectDB = require("./database/db");
const PORT = 3001;

app.use(bodyParser.json());
app.use(routes);

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
