const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');



const app = express();

const router = express.Router();


router.get('/', (req, res) => {
    res.json({"message": "Hello from the api"});
});

router.get('/message', (req, res) => {
    res.json({"message": "here is another message"});
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
