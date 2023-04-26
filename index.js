const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json({message: "hello"}));

app.post('/authenticate', (req, res) => {
    const { username } = req.body;

    const data = { username: username, secret: username, first_name: username };
    const headers = { 'Content-Type': 'application/json', 'private-key': 'a6971764-0888-4c04-b7db-c14f47f7b7da' };
  
    axios({
        method: 'PUT',
        url: 'https://api.chatengine.io/users/',
        data: data,
        headers: headers
      })
        .then(response => {
          console.log(response.data);
          res.json(response.data);
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
})

app.listen(3004);