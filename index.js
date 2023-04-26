const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json({"msg": "hello from the api"}))
app.listen(3004);