// requires
const express = require('express');
const bodyParser = require('body-parser');
const history = require('./modules/history');

// globals
const app = express();
const PORT = 5000;

// uses - without this no CLIENT SIDE FILES  
app.use(express.static('server/public')); //all the files the client can ask for on the server
app.use(bodyParser.urlencoded({extended: true}));

// callback function - telling which port to listen at
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

let calcs = [
    // {numOne:"23", operator:"+", numTwo:"42"},
    // {numOne:"32", numTwo:"24"}
];

//get history
app.get('/calcs', (req, res) => {
    console.log('/calcs GET hit');
  // sending "calcs" to "respond" in server.js
  res.send(history);
})//end /calcs GET

// post for new equation
app.post('/calcs', (req, res) => {
  console.log('This is req.body, /calcs POST hit', req.body);
  // grab new quote from request body
    let total = 0;
    if(req.body.operator === '+'){
        total = Number(req.body.numOne) + Number(req.body.numTwo);
    }  
    else if(req.body.operator === '-'){
        total = Number(req.body.numOne) - Number(req.body.numTwo);
    }
    else if(req.body.operator === '*'){
        total = Number(req.body.numOne) * Number(req.body.numTwo);
    }  
    else if(req.body.operator === '/'){
        total = Number(req.body.numOne) / Number(req.body.numTwo);
    }
    totalObject = {
        total: total
    } // sending an object instead of a number to avoid status code collision
    // need this otherwise it will keep searching and waiting
    res.send(totalObject);
    // add this calculation to history   
    const historyObject = {
        num1: req.body.numOne,
        operator: req.body.operator,
        num2: req.body.numTwo,
        total: total
    }//end historyObject
    history.push(historyObject);
    console.log('history;', history);
})// end /calcs POST

