const express = require('express');
const router = express();

router.get('/', (req, res) => {
  res.send("Inicio de servidor");
});

module.exports = router;
