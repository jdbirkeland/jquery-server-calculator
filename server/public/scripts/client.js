console.log('hello from js');
let ChosenOperator = '';

$(onReady);
// same as
// $(document).ready(onReady);


// Realized WAY TOO LATE I was supposed to be using "operator" as an object.  
// If I had more time, I would prolly start this all over and just try it again.

function onReady() {
    console.log('hello from jquery');
    // GET ON LOAD
    // getCalcs();
    // renderToDOM();
    // addCalcs();

    // call to do math on server
    $('#equalsBtn').on(`click`, submitMath);
    // operator selectors
    $('#addBtn').on(`click`, addOp);
    // Original -$('#addBtn').on(`click`, addNumbers); //works except for operator
    $('#minusBtn').on(`click`, minusOp);
    // Original - $('#minusBtn').on(`click`, minusNumbers, addCalcs);//works except for operator
    $('#timesBtn').on(`click`, timesOp);
    // Original - $('#timesBtn').on(`click`, timesNumbers, addCalcs);//works except for operator
    $('#divideBtn').on(`click`, divideOp);
    // Original - $('#divideBtn').on(`click`, divideNumbers, addCalcs);//works except for operator
    // clear inputs
    $('#clearBtn').on(`click`, clear);//THIS WORKS!

    // perform GET request to server to get all history
}// end onReady

// let numOne = $("#numOneInput").val();
//         console.log(numOne);
// // let operator = $(`#operator`).val();
// //         console.log(operation);
// let numTwo = $("#numTwoInput").val();
//     console.log(numTwo);

// let total = [];//I was trying to send my results for operator functions here to grab and put on DOM.
// let addTotals
// I believe this works properly.
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

    // I believe this works properly - Tested with Postman and that works Great!
    function addCalcs() {
        $.ajax({
            // using POST to add data to server
            method: 'POST',
            url: '/calcs',
            // Best practice - data should be an object
            // req.body on the server
            data: {
                numOne: $(`#numOneInput`).val(),
                operator:$(`#operator`).val(),
                numTwo: $(`#numTwoInput`).val(),
                total: $(`#totals`).val()
            }
        }).then(function(response) {
            console.log('Successful POST!', response);
            getCalcs();
            $(`#numOneInput`).val(``);
            $(`#operator`).val(``);
            $(`#numTwoInput`).val(``);
            $(`#totals`).val(``);
        }).catch(function(response){
          alert('POST failed', response)  
        })
    };

    // Got this to Render the input numbers - ran into issues with operator and total.
    function renderToDOM(calcs) {
        $(`#calcOnDOM`).empty();
    
        for(let calc of calcs) {
            $(`#calcOnDOM`).append(`
            <p>
            ${calc.numOne}${calc.operator}${calc.numTwo}=${total}
             </p>
            `)
        }
    };
    
function clear() {
    // This function clears the input fields once operation is completed
    // I also tied this to the clearBtn click instruction
    console.log('in clear inputs');
    $(`#numOneInput`).val(``);
    $(`#numTwoInput`).val(``);
    chosenOperator = '';
}//end clear

function addOp(){
    chosenOperator = '+';
    console.log('Operator is Add +');
    } //end addOp

function minusOp(){
chosenOperator = '-';
console.log('Operator is Minus -');
}//end minusOp

function timesOp(){
chosenOperator = '*';
console.log('Operator is Times *');
}//end timesOp

function divideOp(){
chosenOperator = '/';
console.log('Operator is Divide /');
}//end divideOp



function submitMath() {
    console.log('clicked');
    // grab input values from DOM
    // grab math operator

    // Originally used these:
    // let numOne = $("#numOneInput").val();
    // let operator = $(`#operator`).val();
    // let numTwo = $("#numTwoInput").val();

    let mathObject = {
        numOne: $("#numOneInput").val(),
        numTwo: $("#numTwoInput").val(),
        operator: chosenOperator
    }
    console.log("sending via POST: ", mathObject);

    // create an AJAX POST request to server
    $.ajax({
        method: 'POST',
            url: '/calcs',
            // Best practice - data should be an object
            // req.body on the server
            // send mathObject for calculation
            data: mathObject
    }).then(function(response) {
        console.log('Successful POST!', response);
        // getCalcs();
    }).catch(function(err){
        console.log(err);
      alert('POST failed', response)  
    }) //end AJAX
    

    // let addTotal = Number(numOne) + Number(numTwo); 
    // // let addTotal = Number(numOne) opAdd() Number(numTwo); 
    // total.push(addTotal);
    // console.log(total);
    // clear();      
    // take addTotal and add to DOM when "= btn" is hit
    }//end submit math

// function minusNumbers() {
//     console.log('clicked');
//     let numOne = $("#numOneInput").val();
//     let numTwo = $("#numTwoInput").val();
//     let minusTotal = Number(numOne) - Number(numTwo);  
//     // let minusTotal = Number(numOne) opMinus() Number(numTwo); 
//     total.push(minusTotal);
//     console.log(total);  
//     clear();    
//     // take minusTotal and add to DOM when "= btn" is hit
//     }

// function timesNumbers() {
//     let numOne = $("#numOneInput").val();
//     let numTwo = $("#numTwoInput").val();
//     let timesTotal = Number(numOne) * Number(numTwo);
//     // let timesTotal = Number(numOne) opTimes() Number(numTwo);   
//     total.push(timesTotal);
//     console.log(total); 
//     clear();     
//     // take timesTotal and add to DOM when "= btn" is hit
//     }
    
// function divideNumbers() {
//     let numOne = $("#numOneInput").val();
//     let numTwo = $("#numTwoInput").val();
//     let divideTotal = Number(numOne) / Number(numTwo); 
//     // let divideTotal = Number(numOne) opDivide() Number(numTwo);  
//     total.push(divideTotal);
//     console.log(total);  
//     clear();    
//     // take divideTotal and add to DOM when "= btn" is hit
//     }

