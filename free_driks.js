/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let barGer = 240;
let payMent;
if (barGer> 500){
    
    console.log("Here your free drink and the barger you order!!");
    payMent = barGer;
    console.log("here is you payment :", payMent);
}
    else{
        console.log("Here your berger but you have to pay for the drinks which is 30tK");
        payMent = barGer + 30;
        console.log ("here is your payment : ", payMent);
    }


