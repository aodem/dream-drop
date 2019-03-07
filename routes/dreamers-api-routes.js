const db = require("../models");

module.exports = function(app) {

  app.get("/api/dreams"), function(req, res) {
    db.Dreams.findAll({}).then(function(dreams){
      console.log(`\nall dreams captured: \n${dreams}`)
      res.json(dreams)
    })
  }

  app.get("/api/dreamers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Dreamer.findAll({}).then(function(dreamer) {
      console.log("works");
      
      res.json(dreamer[0].dreamer_name);
    });
  });

  // app.get("/api/dreamers/filter/", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   "api/dreamers/filter/?dreamer=shane&mood=happy&category=nightmare"
    
  //   req.query = {
  //     dreamer:shane,
  //     mood: happy,
  //     category: nightmare
  //   }

  //   db.dreamer.findOne({
  //     where: req.query
  //   })
    
  //   db.Dreamer.findOne({
  //     where: {
  //       dreamer: req.params.dreamer,
  //       mood: req.params.mood,
  //       category: req.params.category
  //     },
  //     include: [db.Post]
  //   }).then(function(dbDreamer) {
  //     res.json(dbDreamer);
  //   });
  // });

  app.post("/api/dreams/post", function(req, res) {
    // db.Dreams.create(req.body).then(function(dbDreamer) {
    //   res.json(dbDreamer);

    // });
    db.Dreams.create(req.body).then((insertedRow) => {
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
};
