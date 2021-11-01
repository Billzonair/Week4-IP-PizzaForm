function Pizza(size, crust,  topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}



$(document).ready(function(){
    $("form#selection").submit(function(event){
        event.preventDefault();

        function fn1(){

        var inputtedSize =    for (var i=0; i < document.selection.size.length; i++){
                if(document.form.group1[i].checked){
                    found_it = document.form.group1[i].value;
                    console.log(found_it);
                }
                
            }

        var inputtedCrust =    for (var i=0; i < document.selection.crust.length; i++){
                if(document.form.crust[i].checked){
                    found_it = document.form.crust[i].value;
                    console.log(found_it);
                }
                
            }
            
        var inputtedPepproni =   for (var i=0; i < document.selection.pepproni.length; i++){
                if(document.form.pepproni[i].checked){
                    found_it = document.form.pepproni[i].value;
                    console.log(found_it);
                }
                
            }

        var inputtedHam =    for (var i=0; i < document.selection.ham.length; i++){
                if(document.form.ham[i].checked){
                    found_it = document.form.ham[i].value;
                    console.log(found_it);
                }
                
            }

        var inputtedChicken =    for (var i=0; i < document.selection.chicken.length; i++){
                if(document.form.chicken[i].checked){
                    found_it = document.form.chicken[i].value;
                    console.log(found_it);
                }
                
            }

        var inputtedBeef =    for (var i=0; i < document.selection.beef.length; i++){
                if(document.form.beef[i].checked){
                    found_it = document.form.beef[i].value;
                    console.log(found_it);
                }
                
            }
        
        }

    })
}) 

//var newPizza = new Pizza(, inputtedLastName);



    