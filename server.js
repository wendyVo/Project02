const express = require("express");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./routes/routes");
const ingredientRoutes = require("./routes/ingredient-routes.js");
const managerRoutes = require("./routes/manager-routes");

ingredientRoutes(app);
managerRoutes(app);
routes(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
