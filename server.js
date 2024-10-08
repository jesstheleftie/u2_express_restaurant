const express = require("express");
const app = express();
const cors = require("cors");
const appetizersController = require("./controllers/AppetizersController.js")
const entreesController = require("./controllers/EntreesController.js")
const dessertsController = require("./controllers/DessertsController.js")
const catchErrorController = require("./controllers/CatchErrorController.js")
const PORT = process.env.PORT || 3008;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to my page!");
  });

//Route for Appetizers

app.get("/appetizers", appetizersController.getAppetizers)
app.get("/appetizers/:id", appetizersController.getAppetizer)

//Route for Entrees

app.get("/entrees", entreesController.getEntrees)
app.get("/entrees/:id", entreesController.getEntree)

//Route for Desserts
app.get("/desserts", dessertsController.getDesserts)
app.get("/desserts/:id", dessertsController.getDessert)


//Catch Errors
app.get('/*', catchErrorController.catchError)

