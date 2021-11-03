function Pizza(size, crust, pepproni, ham, chicken, beef) {
    this.size = size;
    this.crust = crust;
    this.pepproni = pepproni;
    this.ham = ham;
    this.chicken = chicken;
    this.beef = beef;
}

Pizza.prototype.fullOrder = function() {
  return this.size + " " + this.crust;
}

$(document).ready(function(){
  $("form#selection").submit(function(event) {
    event.preventDefault();
  

    let InputtedSize = $(".name option:selected").val();

    var InputtedCrust = document.getElementById("crust").value;
    console.log(InputtedCrust);

    var InputtedPepproni = document.getElementById("pepproni").value;
    console.log(InputtedPepproni);

    var InputtedHam = document.getElementById("ham").value;
    console.log(InputtedHam);

    var InputtedChicken = document.getElementById("chicken").value;
    console.log(InputtedChicken);

    var InputtedBeef = document.getElementById("beef").value;
    console.log(InputtedBeef);
    
    var newOrder = new Pizza(InputtedSize, InputtedCrust, InputtedPepproni, InputtedHam, InputtedChicken, InputtedBeef);

    $("ul#Orders").append("<li><span class='order'>" + newOrder. +  "</span></li>");
    

  })
})

    


    