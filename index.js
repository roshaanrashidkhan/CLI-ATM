#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Your current balance is:", myBalance);
let pinAnswer = await inquirer.prompt([
    {
        name: "askPin",
        message: "Enter your Pin Number:",
        type: "number"
    }
]);
if (pinAnswer.askPin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select the operation that you want to perform:",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountWithdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the Amount:",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 20000] // 20000 option is added to check if our myBalance<0 condition is working. 
            }
        ]);
        myBalance -= amountWithdraw.amount;
        if (myBalance < 0) {
            console.log("Sorry! Insufficient Balance");
        }
        else if (myBalance === 0) {
            console.log(`Your Remaining Amount is: ${0}`);
        }
        else {
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
