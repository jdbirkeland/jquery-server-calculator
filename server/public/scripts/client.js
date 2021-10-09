$(onReady);
// same as
// $(document).ready(onReady);

function onReady() {
    // GET ON LOAD
    getCalcs();
    // renderToDOM();
    // $(`#addBtn`).on(`click`, calcOnDOM);
    $('#addBtn').on(`click`, addNumbers);
}

let numOne = $("#numOneInput").val();
        console.log(numOne);
let numTwo = $("#numTwoInput").val();
    console.log(numTwo);
    

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
                one: $(`#numOneInput`).val(),
                two: $(`#numTwoInput`).val()
            }
        }).then(function(response) {
            console.log('Successful POST!', response);
            getQuotes();
            $(`#numOneInput`).val(``);
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
                TEST
            </p>
            `)
        }
    };

function addNumbers() {
    let numOne = $("#numOneInput").val();
        console.log(numOne);
    let numTwo = $("#numTwoInput").val();
        console.log(numTwo);
    let addTotal = numOne + numTwo;  
    console.log(numOne);
    console.log(numTwo);  
    console.log(addTotal);      
        
    }


