const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/routes_form');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

// Handle production
// if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
