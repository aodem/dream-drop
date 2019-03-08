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

    db.Dreamer.findAll({}).then(function(dreamersData){
        console.log(JSON.stringify(dreamersData, null, 3));
        
        db.Dreams.findAll({}).then(function(dreamsData){
          console.log(JSON.stringify(dreamsData, null, 3));

          const data = {
            dreamers: dreamersData,
            dreams: dreamsData
          };

          console.log(data);
          

          res.render("dreams", {
            title: "Dreams Page",
            dreams: data
          })
        })
        // res.render("dreams", {
          //   title: "Dreams Page",
          //   dreams: data
          // });
      }); 
      
    // db.Dreams.findAll({}).then(function(data) {
    //   console.log(`\nall dreams captured: \n${data}`);
    //   console.log(JSON.stringify(data, null, 3));
    //   console.log(dreamsData);
      
    //   dreamsData.dreams = data;
    //   console.log(dreamsData.dreamers[0].dataValues);
    // });  

    // console.log(JSON.stringify(dreamsData, null, 3));

    // res.render("dreams", {
    //     title: "Dreams Page",
    //     dreams: dreamsData
    //   });

  })
  
  //route to alarm page
  app.get("/clock", (req, res) => {
    res.render("clock",  { title: "Alarm Page"});
  });

}

