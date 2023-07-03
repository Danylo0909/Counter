function addUsers() {
  var userInput = document.getElementById("userInput").value;
  if (!isNaN(userInput) && userInput !== "") {
    var userCount = parseInt(document.getElementById("users-count").innerHTML);
    var price = parseInt(document.getElementById("price").innerHTML);

    userCount += parseInt(userInput);
    price += parseInt(userInput) * 170;

    document.getElementById("users-count").innerHTML = userCount;
    document.getElementById("price").innerHTML = price;
  }
}
