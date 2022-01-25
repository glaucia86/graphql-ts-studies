var express = require('express');
var router = express.Router();
var speakers = require('../data/speakers')
var _ = require('lodash');

router.use('/:id', (req, res, next) => {
  let speaker = _.filter(speakers, {id:req.params.id})[0]
    if (speaker) {
      req.speaker = speaker;
      return next();
    }
    return res.sendStatus(404);
  });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(speakers);
});

router.post('/', function(req, res, next){
  res.json({'message': 'not implemented'})
});

router.patch('/:id', function(req, res, next){
  
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    req.speaker[key] = value;
    console.log(req.speaker);
  });
  
  res.json(req.speaker);
  
});

router.get('/:id', function(req, res, next) {
    res.json(_.filter(speakers, {id:req.params.id})[0]);
});


module.exports = router;
