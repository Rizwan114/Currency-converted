#! /usr/bin/env node

import inquirer from "inquirer"

const currency :any ={
    PKR : 1,
    Australian : 183.29,
    Azerbaijan :163.27,
    Canadian :204.46,
    Euro :301.38,
    Indian : 3.33,
    Israeli : 75.35,
    Iranian : 0.0066,
    Iraqi : 0.21,
    Nigerian : 0.22,
    Omani :722.22,
    Qatar : 76035,
    Saudi  : 74.11,
    US : 277.98,
}

let userEnterCurrency = await inquirer.prompt([
    {
        name : "user",
        message : "Select Your Country",
        type : 'list',
    choices : ["PKR" , "Australian" , "Azerbaijan" , "Canadian" , "Euro" , "Indian" , "Israeli" , "Iraqi" , "Nigerian" , "Omani" , "Qatar" , "Saudi" , "US" ]
    },
     
    {
        name : "Amount",
        message : "Please Enter Your Amount",
        type : "number"
    },

    {
        name : "user1",
        message : "Convert Your Currancy",
        type : "list",
        choices : ["PKR" , "Australian" , "Azerbaijan" , "Canadian" , "Euro" , "Indian" , "Israeli" , "Iraqi" , "Nigerian" , "Omani" , "Qatar" , "Saudi" , "US" ]
    },

])



let person = currency[userEnterCurrency.user]
let person1 = userEnterCurrency.Amount
let person2 = currency[userEnterCurrency.user1]

let personUser = person / person2
let baseAmount = personUser * person1
console.log(baseAmount);


