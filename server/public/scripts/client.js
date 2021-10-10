$(onReady);
// same as
// $(document).ready(onReady);
// let operator = '';

// function addOp(){
// operator = '+';
// console.log('Operator is Add');
// }
// function minusOp(){
// operator = '-';
// console.log('Operator is Minus');
// }
// function timesOp(){
// operator = '*';
// console.log('Operator is Times');
// }
// function divideOp(){
// operator = '/';
// console.log('Operator is Divide');
// }

function onReady() {
    // GET ON LOAD
    getCalcs();
    // renderToDOM();
    // $(`#eq/ualsBtn`).on(`click`, );
    // addCalcs();
    // $(`#addBtn`).on(`click`, renderToDOM);

    $('#addBtn').on(`click`, addNumbers);
    $('#minusBtn').on(`click`, minusNumbers);
    $('#timesBtn').on(`click`, timesNumbers);
    $('#divideBtn').on(`click`, divideNumbers);
    $('#clearBtn').on(`click`, clear);
}

let numOne = $("#numOneInput").val();
        console.log(numOne);
// let operator = $(`#operator`).val();
//         console.log(operation);
let numTwo = $("#numTwoInput").val();
    console.log(numTwo);

let addTotal = [];
let minusTotal = [];
let timesTotal = [];   
let divideTotal = [];

    function getCalcs(){
        //  where we get our calcs from the server
        // AJAX!!!
        $.ajax({
            method:'GET',
            url: '/calcs'
            // "response" is response from server. could be taco.
        }).then(function(response) {
            console.log('SUCCESS', response);
            renderToDOM(response);
        }).catch(function(response) {
            alert('Request failed, sorry friend!')
        })
    };

    function addCalcs() {
        $.ajax({
            // using POST to add data to server
            method: 'POST',
            url: '/calcs',
            // Best practice - data should be an object
            // req.body on the server
            data: {
                numOne: $(`#numOneInput`).val(),
                operation:$(`#operator`).val(),
                numTwo: $(`#numTwoInput`).val()
            }
        }).then(function(response) {
            console.log('Successful POST!', response);
            getCalcs();
            $(`#numOneInput`).val(``);
            $(`#operator`).val(``);
            $(`#numTwoInput`).val(``);
        }).catch(function(response){
          alert('POST failed', response)  
        })
    };

    function renderToDOM(calcs) {
        $(`#calcOnDOM`).empty();
    
        for(let calc of calcs) {
            $(`#calcOnDOM`).append(`
            <p>
                ${(addTotal)}
             </p>
            `)
        }
    };

    
    function clear() {
        // This function clears the input fields once operation is completed
        // I also tied this to the clearBtn click instruction
        $(`#numOneInput`).val(``);
        $(`#numTwoInput`).val(``);
    }


// function calculator() {}
function addNumbers() {
    let numOne = $("#numOneInput").val();
    // let operator = $(`#operator`).val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) + Number(numTwo);  
    addTotal.push(total);
    console.log(addTotal);
    clear();      
    // take addTotal and add to DOM when "= btn" is hit
    }

function minusNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) - Number(numTwo);  
    minusTotal.push(total);
    console.log(minusTotal);  
    clear();    
    // take addTotal and add to DOM when "= btn" is hit
    }

function timesNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) * Number(numTwo);  
    timesTotal.push(total);
    console.log(timesTotal); 
    clear();     
    // take addTotal and add to DOM when "= btn" is hit
    }
    
function divideNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    let total = Number(numOne) / Number(numTwo);  
    divideTotal.push(total);
    console.log(divideTotal);  
    clear();    
    // take addTotal and add to DOM when "= btn" is hit
    }

// function addEquals() {


//     // $('#addBtn').on(`click`, addNumbers);
//     // $('#equalsBtn').on(`click`, addTotal)
//     console.log(addTotal);
// }
