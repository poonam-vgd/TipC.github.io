
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //-----input validation checking-----------
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }

    //-----Checking if input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //-----tip calculation--------
    var total = (billAmt * serviceQual) / numOfPeople;

    //-----round to two decimal places----------
    total = Math.round(total * 100) / 100;

    //-----two digits after decimal point
    total = total.toFixed(2);

    //-----Displaying tip amount---------------
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };