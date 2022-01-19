$(document).ready(function() {
  $("#order").submit(function(event) {

//collecting user inputs
    function size() {
      let orderSize = document.getElementById("size").value;
      return parseInt(orderSize);
    }
    function crust() {
      let pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    }
    function topping() {
      let pizzaToppings = document.getElementById("toppings").value;
      return parseInt(pizzaToppings);
    }
    function number() {
      let pizzaQuantity = document.getElementById("quantity").value;
      return parseInt(pizzaQuantity);
    }

    function orderedPizza(size, crust, topping, quantity) {
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newQuantity = quantity;
    }

    let userInput = new orderedPizza(size(), crust(), topping(), number());

    let totalCost = userInput.newSize + userInput.newCrust + userInput.newTopping *  userInput.newQuantity;

    alert("Thank you for ordering pizza from us. Your totalcost is: " + totalCost);
    prompt("Kindly enter the location for the delivery of the pizza");
    prompt("Enter your preferred phone number");
    alert("Order well received! Your pizza will be delivered within 2 hours from now");

    $("#text-center").reset();

    event.preventDefault();
  });
});
