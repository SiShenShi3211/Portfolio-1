window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
    
    var endpoint = "https://wp.zybooks.com/quotes.php";
    
    
    var queryString = "topic=" + topic + "&count=" + count  ;
    
    var url = endpoint + "?" + queryString;
    
    //create object
    var xhr = new XMLHttpRequest();
    
    //set up action response
    xhr.addEventListener("load", responseReceivedHandler);
   
    // Data interpretation
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
    
}

// TODO: Add responseReceivedHandler() here

function responseReceivedHandler(count){
    
     var info = document.getElementById("quotes");
     
    if (this.status == 200){
        
        
        
        
        
        let html = "<ol>";
        for (let c = 0; c <= this.response.length - 1; c++) {
            
            html += "<li>" + this.response[c].quote + " - " + this.response[c].source +  "</li>";
            
            
           
        }
        
        html += "</ol>"; 
    
    
    document.querySelector("#quotes").innerHTML = html;
        
    }
    else {
        info.innerHTML = "Topic 'friendship' not found";
    }
}

