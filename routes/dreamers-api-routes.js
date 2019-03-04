const db = require("../models");

module.exports = function(app) {
  app.get("/api/test", (rep, res) => {
    res.redirect("/dreams")
  })

  app.get("/api/dreamers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Dreamer.findAll({
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbDreamer);
    });
  });

  app.get("/api/dreamers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Dreamer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbDreamer) {
      res.json(dbDreamer);
    });
  });

  app.post("/api/dreamers", function(req, res) {
    db.Dreamer.create(req.body).then(function(dbDreamer) {
      res.json(dbDreamer);
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
