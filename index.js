const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();
require('./db');
const PORT = 9000;


app.use(bodyParser.json());


app.get('/', (req, res) =>{
    res.json({
        message: 'Task Manager api is all good'
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




