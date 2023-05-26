const router = require("express").Router();
const Lic = require("../models/lic");

router.post("/api/lic", (req, res) => {
  console.log('API LIC POST ' + req.body);
  // console.log(req.body.make);
  Lic.create(req.body)
    .then(dbLic => {
      res.json(dbLic);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/lic", (req, res) => {
  Lic.find(req.body)
    .then(dbLic => {
      res.json(dbLic);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/lic/:id", (req, res) => {
  Lic.remove(
    {
      _id: (req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;