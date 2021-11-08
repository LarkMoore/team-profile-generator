// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateIndex = require('./utils/index.js');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const teamMembers = [];

// Function that initializes app
function init() {

    inquirer.prompt([
        {
            type: "list",
            name: "teamRole",
            message: "What what member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "I am done building my team."]

        },

    ]).then(function (response) {
        switch (response) {
            case "Manager":
                createManager() {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "name",
                            message: "What is your manager's name?",
                        },
                        {
                            type: "input",
                            name: "employee id",
                            message: "Please type your manager's employee id."
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "What is your manager's email?"
                        },
                        {
                            type: "input",
                            name: "employer phone",
                            message: "Please type your manager's office number.",
                        },

                    ]).then(res => {
                        let employee = new Manager(res.name, res.id, res.getEmail, res.phone)
                        teamMembers.push(employee)
                        init();
                    })

                }

}
break;
            case "Engineer":
createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Engineer's name?",
        },
        {
            type: "input",
            name: "employee id",
            message: "Please type your Engineer's employee id."
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's Github username?",
        },

    ]).then(res => {
        let employee = new Engineer(res.name, res.id, res.getEmail, res.github)
        teamMembers.push(employee)
        init();
    })

    break;
            case "Intern":
    createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your Intern's name?",
            },
            {
                type: "input",
                name: "employee id",
                message: "Please type your Intern employee id."
            },
            {
                type: "input",
                name: "email",
                message: "What is your Intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What school did your Intern attend?",
            },
        ]).then(res => {
            let employee = new Intern(res.name, res.id, res.getEmail, res.github)
            teamMembers.push(employee)
            init();
        })
        break; 
            case "Exit":

        break;
            default:
        break;
    }

    // console.log(response)
    // fs.writeFileSync(requireOfPageTEmp(teamMembers), "utf-8"))
})
}




// Function call to initialize app
init();

