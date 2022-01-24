//this function updates the rate number live as the slider is moved
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}

//this function is the main logic of the calculator
function compute() {
  //first we retrieve all of the user input
  var principal = document.getElementById("prin").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  //this converts the number of years provided by the user into actual calendar years
  var year = new Date().getFullYear() + parseInt(years);

  //then we apply the calculation
  var interest = (principal * years * rate) / 100;

  //these if statements determine whether the principal amount given is valid
  if (principal == "") {
    alert("Please provide a principal amount");
    prin.focus();
  } else if (principal < 1) {
    alert("Please Provide a valid principal amount");
    prin.focus();
  }

  //if it's determined that the amount is valid, then the block below replaces maindiv's contents with the results of the calculation,
  //as well as adding a reset button
  else {
    document.getElementById("maindiv").innerHTML =
      "If you Invest $" +
      principal +
      "<br><br>With an interest rate of " +
      rate +
      "% <br><br> You will receive $" +
      interest +
      "<br><br> in the year " +
      year +
      "<br><br><button onClick='window.location.reload();'>Reset</button> <br><br><footer>This calculator is the intellectual property of Everyone Can Get Rich NGO © 2022</footer>";
  }
}
