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

const ROWS = 3; //Used define the number of rows and columns in the slot machine
const COLS = 3; // Snake case is used here to define constants

const SYMBOLS_COUNT = {  // This is used to define the number of symbols that will appear in the slot machine
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOLS_VALUES = {  // This is used to define the value of each symbol in the slot machine
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};



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

const NumberOfLines = () =>  {

    while (true) {  

    const lines = prompt  ("Enter Amount Of Lines To Bet On (1-3) : ");
    const AmountOfLines = parseFloat (lines); 
   
  
    if (isNaN (AmountOfLines) || AmountOfLines < 0 || AmountOfLines > 3) {
    
        console.log ("Invalid amount of Lines, try again. ");

     } else { 
        return AmountOfLines;    
    }
}
};

const getBet = (balance, lines) =>  {  /* The Balance has been passed as a parameter to the function so that we can
     use it inside the function it has also been changed to let so the amount is allowed to change */

    while (true) {  

    const bet = prompt  ("Enter Total Bet Per Line : ");
    const numberBet = parseFloat (bet); 
   
  
    if (isNaN (numberBet) || numberBet < 0 || numberBet < balance / lines) { /* here we are checking if the bet is a number and if its less than 0 
    we are also checking if the bet is more than the balance divided by the number of lines the user is betting on */
    
        console.log ("Invalid bet, try again. ");

     } else { 
        return numberBet;    
    }
}
};

const spinSlot = () => {  
const symbols = [];
for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
        symbols.push(symbol);
        console.log (symbols);
    }
         /* This code creates an array of symbols based on the SYMBOLS_COUNT object.
            It iterates over each symbol and its count, adding the symbol to the symbols array the specified number of times.
            i is the name of a new variable we're giving in order to create a formula
            i = zero , i is smaller than count which is the value from the object and i++ means it will keep adding on */
 }
}


 spinSlot(); /* this is used to call the function so that it runs and shows the symbols and their count in the console log */


let balance = Deposit();
console.log ( "You have deposited: R " + balance); // This will show the amount that was deposited by the user// 
// if you dont call the function it wont run // 

const lines = NumberOfLines();
console.log ( "You have bet on " + lines + " lines");

const bet = getBet(balance, lines);
console.log ( "You have bet: R " + bet);



