// 1. Deposit Money 
//2. determine Number of Lines to bet on 
// 3. Collect a bet amount
// 4. Spin the slot machine 
// 5. check if the user won 
// 6. give the user their winnings 
// 7. play again


// This function is used so that the user can deposit money into the slot machine 
/* it works by creating a function called deposit that will return / show on the screen or console log 
a message stating for the user to deposit an amount */
/* the function is then called and the returned message is stored in a variable called amount
    which is then console logged to show the user the message */

/*function deposit() {
    return ("Enter a deposit amount: ");
};

const amount = deposit();
console.log(amount);*/


const prompt = require("prompt-sync")(); // this is used to allow the user to input data into the console and shows in the node terminal 

/* This is a shorthand way of writing the same function as above using an arrow function */
const Deposit =() => {
    const Despositamount = prompt  ("Enter a deposit amount : ");
    const NumberDepositamount = parseFloat (Despositamount); 
    /* Parse converts the string input from the user into a number. parseFloat 
    ensures it can be used in calculations later on and it ensure decimals are added */
  
};

Deposit();
// if you dont call the function it wont run// 



