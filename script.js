function compute()
{
    //set form values to local variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //validate form input
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus(); 
        return false;
    }

    // do some arithmetic on form values
    var interest = parseFloat(principal * years * rate / 100);
    var year = new Date().getFullYear() + parseInt(years);
    var finalValue = parseFloat(principal) + interest;

    //create natural language text
    var resultText = "If you deposit <mark>" + principal + 
    "</mark>, at an interest rate of <mark>" + rate + "%</mark>." +
    "<br>You will receive an amount of <mark>" + interest +
    "</mark>, in the year <mark>" + year + "</mark>" +
    "<br>You will get a total value of <mark>" + finalValue + "</mark>";

    //show the interest calculated
    var result = document.getElementById("result");
    result.innerHTML = resultText;

    //modify the html with new text
     //var naturalTextResult = document.getElementById("naturalTextResult");
    //naturalTextResult.innerHTML = resultText;

}

function updateRate() 
{
    //Visualize the rate value when slider changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
