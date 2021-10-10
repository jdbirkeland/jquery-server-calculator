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

let calcs = [
    {numOne:"23", operator:"+", numTwo:"42"},
    // {numOne:"32", numTwo:"24"}
];

let totals = []
// let quotes = [
//   {text: "Nothing gold can stay", speaker: "Robert Frost"},
//   {text: "This is taco", speaker: "Dane Smith"},
//   {text: "Your mom goes to college", speaker: "Kip Dynamite"}
// ];

app.get('/calcs', (req, res) => {
  // sending "calcs" to "respond" in server.js
  res.send(calcs);
})

app.post('/calcs', (req, res) => {
  console.log('This is req.body', req.body);
  
  // grab new quote from request body
  let calc = req.body;

  calcs.push(calc);
  console.log('This is calcs array', calcs);

  // need this otherwise it will keep searching and waiting
  res.sendStatus(201);
})

// function calculator(){
//     if (operator === +)
    
// }


function addNumbers() {
    let numOne = $("#numOneInput").val();
    // let operator = $(`#operator`).val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) + Number(numTwo);  
    addTotal.push(total);
    console.log(addTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

function minusNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) - Number(numTwo);  
    minusTotal.push(total);
    console.log(minusTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

function timesNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) * Number(numTwo);  
    timesTotal.push(total);
    console.log(timesTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }
    
function divideNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) / Number(numTwo);  
    divideTotal.push(total);
    console.log(divideTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

// function addEquals() {


//     // $('#addBtn').on(`click`, addNumbers);
//     // $('#equalsBtn').on(`click`, addTotal)
//     console.log(addTotal);
// }
app.get('/total', (req, res) => {
    res.send({type: 'test'})
})

app.post('/.total', (req, res) => {
    res.send({type: 'test'})
})