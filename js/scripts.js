function Pizza() {
    size = document.getElementById("size-L");
    size = document.getElementById("size-M");
    size = document.getElementById("size-S");
    crust = document.getElementById("crisp");
    crust = document.getElementById("stuffed");
    crust = document.getElementById("glutten-free");

    if (size-L.checked==true) {
      var sizeprice = 1000
      }
    else if (size-M.checked==true) {
        var sizeprice = 800
        }
    else if (size-S.checked==true) {
          var sizeprice = 500
          }

    if (crisp.checked==true) {
        var crustprice = 100
         }
    else if (stuffed.checked==true) {
        var crustprice = 150
         }
    else if (glutten-free.checked==true) {
        var crustprice = 100
         }

         document.write("total is " sizeprice + crustprice) 

         Pizza()
         
  }