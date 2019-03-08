const db = require("../models");

module.exports = function(app) {

  app.get("/api/dreams"), function(req, res) {
    db.Dreams.findAll({}).then(function(dreams){
      console.log(`\nall dreams captured: \n${dreams}`)
      res.json(dreams)
    })
  }

  app.get("/api/dreamers", function(req, res) {
    // gather all the dreamers from the database. 
    db.Dreamer.findAll({}).then(function(dreamer) {
      console.log("works");
      
      res.json(dreamer[0].dreamer_name);
    });
  });

  app.post("/api/dreams/post", function(req, res) {
    // db.Dreams.create(req.body).then(function(dbDreamer) {
    //   res.json(dbDreamer);

    // });
    db.Dreams.create(req.body).then((insertedRow) => {
      res.json(insertedRow);
    });
  });

  app.post("/api/dreamers/add", function(req, res) {
    // creating new user in the database
    db.Dreamer.create(req.body).then((insertedRow) => {
      res.status(200).send(insertedRow);
    });
  });

  app.delete("/api/dreamers/:id", function(req, res) {
    db.Dreamer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDreamer) {
      res.json(dbDreamer);
    });
  });
  // app.put("/api/dreamers/:id", function(req, res) {
  //   db.Dreamer.update({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbDreamer) {
  //     res.json(dbDreamer);
  //   });
  // });
};
