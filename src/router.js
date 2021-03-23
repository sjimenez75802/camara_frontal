const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'First Web Node' });
  });
  router.get('/ver', (req, res) => {
    res.render('ver', { title: 'First Web Node' });
  });
  module.exports = router;