const express = require('express');
const router = express();

const database = require('../config/database');

database.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + database.threadId);
});

// router.get('/', (req, res) => {
//   console.log(process.env.NODE_ENV);
//   // res.send("Inicio de servidor");
// });

router.post('/create', (req, res) => {

  if( req.body ){
    database.query('INSERT INTO clientes SET ?', req.body, (error, results, fields) => {
        if(error){
            // throw error;
            res.status(404).json({
                status: 'error',
                mesagge: error
            });
        }
        
        res.status(201).json({
            status: 'success'
        });            
    });
  }else{
      res.status(400).json({ 
          status: 'error',
          message: "Faltan parametros"
      });
  } 
});

module.exports = router;
