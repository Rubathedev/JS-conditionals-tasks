/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let numBer = 80;
if(numBer >= 90 && numBer <= 100){
    console.log("you got A and you are good ");

}
else if(numBer >= 80 && numBer <= 89){
    console.log("you are also good you got B");
}
else if(numBer >= 70 && numBer <= 79){
          console.log("you con do better just study more you have potancial you got C");
} 
else if (numBer >= 60 && numBer <= 69) {
    console.log("your grades are bad try to improve or you will fail in your next exam");
}
else if  (numBer > 0 && numBer <= 59){
      console.log("you are fail very disapointed in you ");
}
