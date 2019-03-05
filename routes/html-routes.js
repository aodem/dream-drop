// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// const path = require("path");
// const express = require("express");

// const router = express.Router();


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
    res.render("dreams",  { title: "Dreams Page"});
  });
}
