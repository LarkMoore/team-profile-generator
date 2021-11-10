// Include packages needed for this application
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const pageTemp = require('./src/pageTemp');


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
        switch (response.teamRole) {
            case "Manager":
                createManager()
                break;
            case "Engineer":
                createEngineer()
                break;
            case "Intern":
                createIntern()
                break;
            case "I am done building my team.":
                buildMyTeam()
                break;
            default:
                break;
        }



        
        
    })
}


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "Please type your manager's employee id."
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please type your manager's office number.",
        },

    ]).then(res => {
        let employee = new Manager(res.name, res.id, res.email, res.officeNumber)
        teamMembers.push(employee)
        init();
    })

}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Engineer's name?",
        },
        {
            type: "input",
            name: "id",
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
        let employee = new Engineer(res.name, res.id, res.email, res.github)
        teamMembers.push(employee)
        init();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Intern's name?",
        },
        {
            type: "input",
            name: "id",
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
        let employee = new Intern(res.name, res.id, res.email, res.school)
        teamMembers.push(employee)
        init();
    })
}

function buildMyTeam() {
    //console.log(teamMembers)
    fs.writeFileSync(path.join(path.resolve(__dirname,"dist"), "index.html"), pageTemp(teamMembers), "utf-8")
}
// Function call to initialize app
init();

