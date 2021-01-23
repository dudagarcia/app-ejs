const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');
 //puxa o index

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let user=models.User;
let role=models.Role;
let section=models.Section;

app.get('/create', async (req, res) => {
  let create=await user.create({
    name: "maria",
    birthDate: 2002-03-03,
    age: 18,
    email: "maria@gmail.com",
    password: "senha123", //FAZER HASH DISSO
    phoneNumber: '14999999999',
    sectionId: 1,
    roleId: 1,
    photo: "duda.jpeg",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.send('Usuário criado com sucesso');
}); 

app.get('/read', async (req, res) => {
  let read = await user.findAll({
    raw: true,
  });
  console.log(read);
})

let port = process.env.port || 3000;

app.listen(port, (req, res) => {
  console.log('Servidor rodando');
});
