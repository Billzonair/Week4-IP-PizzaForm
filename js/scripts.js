
function Pizza(order_no, size, crust, pepproni, ham, chicken, beef, total) {
  this.order_no = order_no
  this.size = size;
  this.crust = crust;
  this.pepproni = pepproni;
  this.ham = ham;
  this.chicken = chicken;
  this.beef = beef;
  this.total = total
}


Pizza.prototype.myOrderDetails = function() {
  console.log("Your order has been received for a" + this.size "pizza with" + this.pepproni + this.ham + this.chicken + this.beef + "and a" + this.crust + "crust")
}

$(document).ready(function() {
  $('#orderButton').click(function() {
    
  })
})