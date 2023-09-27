const express = require('express');

const router = express.Router();

router.use((req,res,) => {
    res.status(404);
    res.render('404')
  })

module.exports = router;