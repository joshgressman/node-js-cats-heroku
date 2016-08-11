var express = require('express');

var cats = [{name: 'Luna', trait: 'Fiesty'}];

module.export = router;

router.get('/', function(req, res) {
  res.send(cats);
});



router.post('/', function(req, res) {
  console.log('request: ', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});
