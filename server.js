// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// require("./controllers/controller.js")(app);

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// // route to landing/home page
// app.get("/", (req, res) => {
//   res.render("index", { title: "Home Page"});
// });
// //route to sign-in page
// app.get("/sign-in", (req, res) => {
//   res.render("sign-in",  { title: "Sign-in Page"});
// });
// //route to dreams page
// app.get("/dreams", (req, res) => {
//   res.render("dreams",  { title: "Dreams Page"});
// });
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

require("./routes/html-routes.js")(app);
require("./routes/dreamers-api-routes.js")(app);

// require("./routes/user.js")(app);
// require("./routes/post-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, function() {
  console.log("App listening on PORT hello " + PORT);
});
