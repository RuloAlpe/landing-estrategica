const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/routes_form');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
