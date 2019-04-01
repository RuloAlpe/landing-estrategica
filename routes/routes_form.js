const express = require('express');
const router = express();

const database = require('../config/database');
const transporter = require('../config/email');

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

        var mailOptions = {
            from: 'youremail@gmail.com',
            to: req.body.txt_email,
            subject: 'Gracias por registrarse en Marketing trail - webinar pro',
            html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"'
            +'"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
            +'<html xmlns="http://www.w3.org/1999/xhtml">'
            +'<head>'
            +'<title>Marketing trail - webinar pro </title>'
            +'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
            +'</head>'
                
                
            +'<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"  style="text-align:left;">'
            
                +`Hola ${req.body.txt_name} gracias por registrarte`
            +'</body>'
            +'</html>'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
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
