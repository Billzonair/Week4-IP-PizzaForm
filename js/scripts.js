
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
  console.log("Your order has been received for a" + this.size + "pizza with" + this.pepproni + this.ham + this.chicken + this.beef + "and a" + this.crust + "crust")
}

$(document).ready(function() {

  $('#orderAnotherButton').hide();

  $('#orderButton').click(function() {
    var sizeOfPizza = $('#pizzaSize option:selected').val();
    var crustOfPizza = $('#pizzaCrust option:selected').val();
    var pepproniOfPizza = $('#pizzaPepproni option:selected').val();
    var hamOfPizza = $('#pizzaHam option:selected').val();
    var chickenOfPizza = $('#pizzaChicken option:selected').val();
    var beefOfPizza = $('#pizzaBeef option:selected').val();

    var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(pepproniOfPizza) + parseInt(hamOfPizza) + parseInt(chickenOfPizza) + parseInt(beefOfPizza);
    var order = 1;
    var grandTotal = parseInt(0);

    $('#orderNo').html(order);
    $('#Size').html($('#pizzaSize option:selected').text());
    $('#Crust').html($('#pizzaCrust option:selected').text());
    $('#Pepproni').html($('#pizzaPepproni option:selected').text());
    $('#Ham').html($('#pizzaHam option:selected').text());
    $('#Chicken').html($('#pizzaChicken option:selected').text());
    $('#Beef').html($('#pizzaBeef option:selected').text());
    $('#Total').html(total);

    $('#GrandTotal').html(grandTotal + total);

    $('#orderAnotherButton').show();
    $('#orderButton').hide();
  })
});