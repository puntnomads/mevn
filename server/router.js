const express = require("express");
const Book = require("./models/Book.js");

module.exports = function(app) {
  const apiRoutes = express.Router();
  app.use("/api", apiRoutes);

  /* GET ALL BOOKS */
  apiRoutes.get("/book", function(req, res, next) {
    Book.find(function(err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

  /* GET SINGLE BOOK BY ID */
  apiRoutes.get("/book/:id", function(req, res, next) {
    Book.findById(req.params.id, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE BOOK */
  apiRoutes.post("/book", function(req, res, next) {
    Book.create(req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* UPDATE BOOK */
  apiRoutes.put("/book/:id", function(req, res, next) {
    console.log(req.body);
    Book.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* DELETE BOOK */
  apiRoutes.delete("/book/:id", function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  app.get("*", function(req, res) {
    res.send("Route doesn't exist.");
  });
};
