function Pizza(size, crust,  topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Pizza.prototype.fullOrder = function() {
  return this.size + " " + this.crust; + " " + this.topping;


function getvalue(){
    var InputtedSize = document.getElementById("size").value;
    //console.log(InputtedSize);

    var InputtedCrust = document.getElementById("crust").value;
    //console.log(InputtedCrust);

    var InputtedPepproni = document.getElementById("pepproni").value;
    //console.log(InputtedPepproni);

    var InputtedHam = document.getElementById("ham").value;
    //console.log(InputtedHam);

    var InputtedChicken = document.getElementById("chicken").value;
    //console.log(InputtedChicken);

    var InputtedBeef = document.getElementById("beef").value;
    //console.log(InputtedBeef);

    switch(InputtedSize){
        case "0":
          size-price = 0;
        break;
        case "large":
           size-price = 1200;
           console.log(price);
         break;
         case "medium":
           size-price = 850;
           console.log(price);
         break;
         case "small":
           size-price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }

       switch(InputtedCrust){
        case "0":
          crust-price = 0;
        break;
        case "crispy":
           crust-price = 100;
           console.log(price);
         break;
         case "stuffed":
           crust-price = 200;
           console.log(price);
         break;
         case "glutter-free":
           crust-price = 100;
           console.log(price);
         default:
           console.log("error"); 
       }

       switch(InputtedPepproni){
        case "0":
          price = 0;
        break;
        case "pepproni-large":
           pepproni-price = 300;
           console.log(price);
         break;
         case "pepproni-medium":
           pepproni-price = 200;
           console.log(price);
         break;
         case "pepproni-small":
           pepproni-price = 100;
           console.log(price);
         default:
           console.log("error"); 
       }

       switch(InputtedHam){
        case "0":
          ham-price = 0;
        break;
        case "ham-large":
           ham-price = 300;
           console.log(price);
         break;
         case "ham-medium":
           ham-price = 200;
           console.log(price);
         break;
         case "ham-small":
           ham-price = 100;
           console.log(price);
         default:
           console.log("error"); 
       }

       switch(InputtedChicken){
        case "0":
          chicken-price = 0;
        break;
        case "chicken-large":
           chicken-price = 250;
           console.log(price);
         break;
         case "chicken-medium":
           chicken-price = 200;
           console.log(price);
         break;
         case "chicken-small":
           chicken-price = 100;
           console.log(price);
         default:
           console.log("error"); 
       }

       switch(InputtedBeef){
        case "0":
          beef-price = 0;
        break;
        case "beef-large":
           beef-price = 200;
           console.log(price);
         break;
         case "beef-medium":
           beef-price = 150;
           console.log(price);
         break;
         case "beef-small":
           beef-price = 100;
           console.log(price);
         default:
           console.log("error"); 
       }

       let total = size-price + crust-price + pepproni-price + ham-price + chicken-price + beef-price
       console.log(total)

       var newOrder = new Pizza(InputtedSize, InputtedCrust, InputtedPepproni, InputtedHam, InputtedChicken, InputtedBeef);

       $("ul#Orders").append("<li><span class='Order'>" + newPizza.size + newPizza.crust + newPizza.pepproni + newPizza.ham + newPizza.chicken + newPizza.beef "</span></li>");
}


    