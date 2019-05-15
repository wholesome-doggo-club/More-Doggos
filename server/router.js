const router = require('express').Router();
const path = require('path');

router
  .route('/NexaRegular.woff', (req, res) => {
    const filepath = path.join(__dirname + '/fonts/NexaRegular.woff');
    res.sendFile(filepath);
  })
  
module.exports = router;