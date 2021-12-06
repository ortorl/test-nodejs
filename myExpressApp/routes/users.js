var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.send("id: " + req.query.id);
  res.json({id: req.query.id});
});

module.exports = router;
