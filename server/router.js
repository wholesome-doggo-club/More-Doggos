const router = require('express').Router();
const path = require('path');
const controller = require('./controller.js')

router.route('/')
  .get(controller.get)  
  
module.exports = router;