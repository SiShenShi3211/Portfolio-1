"using strict;"

//create array to store data
var products = 
    [
        {item: "Burger -", price:3.50},
        {item: "Fries -", price:1.25},
        {item: "Drink -", price:1.00},
        {item: "Condiments -", price: 0.25},
        {item: "Salad -", price:2.00}
    ];

//create variable for html code
var tableHTML = "<table>" + "<caption>MENU</caption>" + "<tr><th>Item</th><th>Price</th></tr>";

for (var i = 0; i < products.length; i++)
    {
        // add rows for each product
        tableHTML += "<tr><td>" + products[i].item + "</td><td>"+ "$" + products[i].price + "</td></tr>";
    }

// add text to close table
tableHTML += "</table>";

//display table
document.getElementById("menu").innerHTML = tableHTML;




//create code for order






function add(){
    if(feet.value == "" ||
      inches.value == "" || 
       weight.value == ""){
        window.alert("missing data");
    }
       else{
           var num1 = parseInt(feet.value);
            console.log("feet is " + num1);
    
           var num2 = parseInt(inches.value);
           console.log("inches is " + num2);
           
           var height = num1 * 12 + num2;
           
           var num3 = parseInt(weight.value);
           console.log("weight is " + num3);
           
           var BMI = num3 * 703 /  (height * height);
           console.log("BMI is " + BMI);
           
    
            document.getElementById("sum").innerHTML = "BMI: " + BMI;
    
            
       }
    
}

function reset(){
    feet.value = "";
    inches.value = "";
    weight.value = "";
    
    
}
