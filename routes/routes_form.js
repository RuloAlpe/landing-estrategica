const express = require('express');
const router = express();

// router.get('/', (req, res) => {
//   console.log(process.env.NODE_ENV);
//   // res.send("Inicio de servidor");
// });

router.post('/create', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: 'success',
  });  
});

module.exports = router;
