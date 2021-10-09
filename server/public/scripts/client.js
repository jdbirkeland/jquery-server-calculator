$(onReady);
// same as
// $(document).ready(onReady);

function onReady() {
    // GET ON LOAD
    getCalcs();
    // renderToDOM();
    // $(`#eq/ualsBtn`).on(`click`, );
    addCalcs();
    // $(`#addBtn`).on(`click`, renderToDOM);

    $('#addBtn').on(`click`, addNumbers);
    $('#minusBtn').on(`click`, minusNumbers);
    $('#timesBtn').on(`click`, timesNumbers);
    $('#divideBtn').on(`click`, divideNumbers);
}

// let numOne = $("#numOneInput").val();
//         console.log(numOne);
// let numTwo = $("#numTwoInput").val();
//     console.log(numTwo);
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
                numTwo: $(`#numTwoInput`).val(),
                // operation:operation
            }
        }).then(function(response) {
            console.log('Successful POST!', response);
            getCalcs();
            $(`#numOneInput`).val(``);
            $(`#numTwoInput`).val(``);
        }).catch(function(response){
          alert('POST failed', response)  
        })
    };

    function renderToDOM(calcs) {
        $(`#calcOnDOM`).empty();
    
        // for(let data of calcs) {
            $(`#calcOnDOM`).append(`
            <p>
             ${addTotal}
            </p>
            `)
        // }
    };


// function calculator() {}
function addNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    addTotal = Number(numOne) + Number(numTwo);  
    console.log(addTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

function minusNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    minusTotal = Number(numOne) - Number(numTwo);  
    console.log(minusTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

function timesNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    timesTotal = Number(numOne) * Number(numTwo);  
    console.log(timesTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }
    
function divideNumbers() {
    let numOne = $("#numOneInput").val();
    let numTwo = $("#numTwoInput").val();
    divideTotal = Number(numOne) / Number(numTwo);  
    console.log(divideTotal);      
    // take addTotal and add to DOM when "= btn" is hit
    }

function addEquals() {


    // $('#addBtn').on(`click`, addNumbers);
    // $('#equalsBtn').on(`click`, addTotal)
    console.log(addTotal);
}
