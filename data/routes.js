const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');
 //puxa o index

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user=models.User;
let role=models.Role;
let section=models.Section;

app.post('/login', async (req, res) => {
  let response = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });
  if(response === null)   res.send(JSON.stringify('error'));
  else res.send(response);
});

let port = process.env.port || 3000;

app.listen(port, (req, res) => {
  console.log('Servidor rodando');
});
