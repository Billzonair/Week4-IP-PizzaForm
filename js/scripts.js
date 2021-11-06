

function Pizza(size, crust, pepproni, ham, chicken, beef, total) {
    this.size = size;
    this.crust = crust;
    this.pepproni = pepproni;
    this.ham = ham;
    this.chicken = chicken;
    this.beef = beef;
    this.total = total
}


Pizza.prototype.fullOrder = function() {
  var size , crust, pepproni, ham, chicken, beef, total;
    PizzaSize = parseInt(this.size.val());
    Pizzacrust = parseInt(this.crust.val());
    Pizzapepproni = parseInt(this.pepproni.val());
    Pizzaham = parseInt(this.ham.val());
    Pizzachicken = parseInt(this.chicken.val());
    Pizzabeef = parseInt(this.beef.val());
    var order = (size, crust, pepproni, ham, chicken, beef, total)
    return order
};


$(document).ready(function(){
  $("form#selection").submit(function(event) {
     var size, crust, pepproni, ham, chicken, beef;
     size = $("#size: selected");
     crust = $("#crust: selected");
     pepproni = $("#pepproni: selected");
     ham = $("#ham: selected");
     chicken = $("#chicken: selected");
     beef = $("#beef: selected");
     
     var PizzaOrder = new PizzaOrder(size, crust, pepproni, ham, chicken, beef);
       addCart(PizzaOrder);
       event.preventDefault(); 
  

    
  })
});


    function addCart(order){
      var size = order.size
        .map(function(){
          return this.id
        })
        .get()
        .join();
        
        $("#cart tbody").append(
        `<tr>
          <td>${order.size.html()}</td>
          <td>${order.crust.html()}</td>
          <td>${order.pepproni.html()}</td>
          <td>${order.ham.html()}</td>
          <td>${order.chicken.html()}</td>
          <td>${order.beef.html()}</td>
          <td>${}
        </tr>`);
      
          };
    
    
    

 
    


    