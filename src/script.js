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




    const reels = []; { //Creates a 2D array. This array represents three columns.

    for (let i =0 ; i <COLS; i++) { 
        
        // This loop iterates through the required number of columns.

        const reelSymbols = [...symbols]; 

        reels.push([])
        
        // The spread operator (...) creates a shallow copy of the symbols array.
         /* this is used to create a copy of the symbols array so that we can manipulate it without changing the original array */ 

        for (let j =0 ; j < ROWS; j++) { 
            
            //  An inner loop runs for the number of rows.
        //  This loop would randomly select a symbol from reelSymbols and add it to the current reel. 
        
        const randomIndex = Math.floor(Math.random() * reelSymbols.length); 
        
        // math.floor rounds down the number to the nearest whole number
        // math.random generates a random number between 0 and 1
        // multiplying it by reelSymbols.length scales it to the length of the reelSymbols array
        // length gives the total number of elements in the array

        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push (selectedSymbol); // push is used to add the selected symbol to the current reel
        reelSymbols.splice (randomIndex, 1); // splice is used to remove the selected symbol from the reelSymbols array to avoid duplicates

        
    }

        }
        return reels; /* this returns the reels array which contains the randomly selected symbols for each column of the slot machine */
    };
    
};

const transpose = (reels) => { // this function is used to transpose the reels array
    const transposedReels = [];     // this variable is used to store the transposed reels
    for (let i = 0; i < ROWS; i++) { // this loop iterates through each row
        transposedReels.push([]); // this adds a new empty array to the transposedReels array
        for (let j = 0; j < COLS; j++) { // this loop iterates through each column
            transposedReels[i].push(reels[j][i]);   // this adds the symbol from the reels array to the transposedReels array
        }
    }   
    return transposedReels;
};

const printRows = (transposedReels) => { // this function is used to print the rows of the slot machine
    for (const row of transposedReels) { // this loop iterates through each row in the rows array
        let rowString = ""; // this variable is used to store the string representation of the row
        for (const [i, symbol] of row.entries()) { // this loop iterates through each symbol in the row
            rowString += symbol; // this adds the symbol to the rowString variable
            if (i != row.length - 1) { // this checks if the current symbol is not the last symbol in the row
                rowString += " | "; // this adds a separator between the symbols
            }
        }
        console.log(rowString);
    }
};
 
let balance = Deposit();
console.log ( "You have deposited: R " + balance); // This will show the amount that was deposited by the user// 
// if you dont call the function it wont run // 

const lines = NumberOfLines();
console.log ( "You have bet on " + lines + " lines");

const bet = getBet(balance, lines);
console.log ( "You have bet: R " + bet);

const reels = spinSlot(); 
console.log(reels); /* this will show the randomly generated reels in the console log so we can see the output of the spinSlot function */
 
const transposedReels = transpose(reels);
console.log(transposedReels); /* this will show the transposed reels in the console log so we can see the output of the transpose function */
console.log (reels);

printRows(transposedReels); /* this will print the rows of the transposed reels in a formatted way so we can see the output of the printrows function */
    