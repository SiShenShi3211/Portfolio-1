"using strict;"

// create variables
var fact = document.getElementById("fact");
var factText = document.getElementById("factText");

var number = document.getElementById("num");

number.addEventListener('input', getData);

function getData()
{
    //clear display
    fact.style.display = "none";
    factText.innerHTML = "";
    
    // get the number
    var myNum = number.value;
    
    if (myNum != "")
        {
            // make request with myNum
            
            // set up url
            var url = "http://numbersapi.com/" + myNum;
            
            //create AJAX object
            var xhr = new XMLHttpRequest();
            
            // set up response handler
            xhr.addEventListener("load", responseReceivedHandler);
            
            // open the connection
            xhr.open("GET", url);
            
            // send data
            xhr.send();
        }// end of if
}// end of getData


function responseReceivedHandler()
{
    // check for success
    if (this.status == 200)
        {
            factText.innerHTML = this.responseText;
            fact.style.display = "block";
        }
}