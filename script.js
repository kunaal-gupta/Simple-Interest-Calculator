function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    console.log(principal)
    if (!principal>0 || principal<0) {
        alert('Enter a positive number')
    }

    else {
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var current_year = new Date().getFullYear();
    var interest = principal * years * rate /100;
    var total_year = current_year + years;
    document.getElementById("result").innerText="If you deposit $" +  principal.toString() + "  at an interest rate of " + rate + "% you will receive an interest of " + interest + ", in the year " + total_year;   
    }
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    console.log(rateval)
    document.getElementById("rate_val").innerText=rateval+'%';
}

        