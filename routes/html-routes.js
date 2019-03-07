// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// dependencies
const db = require("../models");
// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.
module.exports = (app) => {
    // route to landing/home page

  app.get("/", (req, res) => {
    res.render("index", { title: "Home Page"});
  });
  //route to sign-in page
  app.get("/sign-in", (req, res) => {
    res.render("sign-in",  { title: "Sign-in Page"});
  });
  //route to dreams page
  app.get("/dreams", (req, res) => {
    db.Dreams.findAll({}).then(function(data) {
      console.log(`\nall dreams captured: \n${data}`);
      console.log(JSON.stringify(data, null, 3));

      res.render("dreams",  { 
        title: "Dreams Page",
        dreams: data
      });
    });  
  });
  //route to alarm page
  app.get("/clock", (req, res) => {
    res.render("clock",  { title: "Alarm Page"});
  });
}

