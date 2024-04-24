const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name:'name',
            message: "What's your name?",
            type: 'input'
        },
        {
            name: 'hobby',
            message: "What's your favorite hobby?",
            type: 'input'
        }
    ])
    .then(function(answer){
        console.log(answer)
    })