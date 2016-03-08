var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/s/:cid/:sid', function (req, res, next) {
  var data = {
    cid: req.params.cid,
    sid: req.params.sid,
    title: 'Loops Video'
  };
  res.render('video', data);
  next();
});

module.exports = router;