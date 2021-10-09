const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5000;

// without this no CLIENT SIDE FILES  
app.use(express.static('server/public')); //all the files the client can ask for on the server

// callback function - telling which port to listen at
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

let calcs = [{num:"23"}];
// let quotes = [
//   {text: "Nothing gold can stay", speaker: "Robert Frost"},
//   {text: "This is taco", speaker: "Dane Smith"},
//   {text: "Your mom goes to college", speaker: "Kip Dynamite"}
// ];

app.get('/calcs', (req, res) => {
  // sending "quotes" to "respond" in server.js
  res.send(calcs);
})

app.post('/calcs', (req, res) => {
  console.log('This is req.body', req.body);
  
  // grab new quote from request body
  let calc = req.body;
  // let quote = {text: 'Please clap', speaker:'Edan'}
  
  // puah quote into array
  calcs.push(calc);
  console.log('This is calcs array', calcs);

  // need this otherwise it will keep searching and waiting
  res.sendStatus(201);
})