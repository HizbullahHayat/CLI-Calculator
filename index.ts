#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';


const turnOff = ()=>{                 // declared a promise to stop colorization
    return new Promise((res)=>{
        setTimeout(res, 4000);
    })
}


async function welcome(){
    let karaoke = chalkAnimation.karaoke(`Let's Start Calculation`);  //From here the coloring starts
    await turnOff();
    karaoke.stop();
    console.log(` _____________________
|  _________________  |
| | HH           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);

console.log(chalk.green(`
___   ___   _   _  ___   _      ____   ____   ___   ___     ___   _  _    
\   \ ) __( \ ( ) /) __( ) |    / __ \ )  _)\ ) __( \   \   \  _) ) () (   
| ) ( | _)   )\_/( | _)  | (__  ))__(( | '__/ | _)  | ) (   |  (  '.  /    
/___/ )___(   \_/  )___( )____( \____/ )_(    )___( /___/   /__o)  /_(     
                                                                           
     _  _    ___   ____   ___   _  _   _      _        _    _  _           
    ) () (  )_ _( )___ ( \  _) ) () ( ) |    ) |      )_\  ) () (          
    | -- |  _| |_   / /_ |  (  | \/ | | (__  | (__   /( )\ | -- |          
    )_()_( )_____( )____(/__o) )____( )____( )____( )_/ \_()_()_(          
                                                                           `));
};

await welcome();

async function question(){
    const answers = await inquirer
    .prompt([
    {
        type:"list",
        name:"operator",
        message:"Select your Operation: \n \n",
        choices: ["Addition: +", "Subtraction: -", "Multiplication: *", "Division: /","Exponintial Power: **", "Modulo: %"]
    },
    {
        type:"number",
        name:"Number1",
        message:"Enter your First Number: ",
      
    },
    {
        type:"number",
        name:"Number2",
        message:"Enter your Second Number: ",
        
    }
    ]);
        if
        (answers.operator == "Addition: +"){
            console.log(chalk.red.bold(`${answers.Number1} + ${answers.Number2} =${answers.Number1  +  answers.Number2}`));
        }
        else if
        (answers.operator == "Subtraction: -"){
            console.log(chalk.red.bold(`${answers.Number1} - ${answers.Number2} =${answers.Number1  -  answers.Number2}`));
        }
        else if
        (answers.operator == "Multiplication: *"){
            console.log(chalk.red.bold(`${answers.Number1} * ${answers.Number2} =${answers.Number1  *  answers.Number2}`));
        }
        else if
        (answers.operator == "Division: /"){
            console.log(chalk.red.bold(`${answers.Number1} / ${answers.Number2} =${answers.Number1  /  answers.Number2}`));
        }
        else if
        (answers.operator == "Exponintial Power: **"){
            console.log(chalk.red.bold(`${answers.Number1} ** ${answers.Number2} =${answers.Number1  **  answers.Number2}`));
        }
        else if
        (answers.operator == "Modulo: %"){
            console.log(chalk.red.bold(`${answers.Number1} % ${answers.Number2} =${answers.Number1  %  answers.Number2}`));
        }; 
};

async function startAgain(){
    do{
        await question();
        var again= await inquirer.prompt({
            type:"input",
            name: "restart",
            message:"Do you want to restart? yes(y) or no(n): "
        })
    }while(again.restart == 'y'|| again.restart == 'yes'||again.restart == 'Y'|| again.restart == 'YES');
}

startAgain();





