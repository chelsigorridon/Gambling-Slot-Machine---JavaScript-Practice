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

    while (true) {  /* While creates an infinite loop meaning the user will be prompted to enter a deposit amount until they enter a valid amount 
        and true is the condition in this case we want it to be true cause if the 
        user keeps putting in an invalid input the same message will keep appearing */ 

    const Despositamount = prompt  ("Enter a deposit amount : ");
    const NumberDepositamount = parseFloat (Despositamount); 
    /* Parse converts the string input from the user into a number. parseFloat 
    ensures it can be used in calculations later on and it ensure decimals are added */

    /* If statements are used to do checks on the user input to ensure it is valid
    isNaN checks if the input is not a number || this means OR if what the user input it is < less than 0
    if we console log it the user will get a message saying invalid */
  
    if (isNaN (NumberDepositamount) || NumberDepositamount < 0) {
    
        console.log ("Invalid deposit amount, try again. ");

     } else { /* if the user input is valid the function will return the number deposit amount */
        return NumberDepositamount;    
    }
}
};

const Despositamount = Deposit();
console.log ( "You have deposited: R " + Despositamount); // This will show the amount that was deposited by the user// 
// if you dont call the function it wont run // 



