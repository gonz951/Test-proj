const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name:'name',
            message: "What's your name?",
            type: 'input'
        }
    ])
    .then(function(answer){
        console.log(answer)
    })