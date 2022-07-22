const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

function managerQuestions() {
    const questions = [
        {
            name: "managerName",
            message: "What is the team manager's first and last name?",
        },
        {
            name: "managerID",
            message: "What is the team manager's id?",
        },
        {
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            name: "managerOfficeNum",
            message: "What is the team manager's office number?",
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        const managerData = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNum
        );
        employeeArray.push(managerData);
        addEmployee();
    });
}

function engineerQuestions() {
    const questions = [
        {
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            name: "engineerID",
            message: "What is the engineer's id?",
        },
        {
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            name: "engineerGitHubUsername",
            message: "What is the engineer's GitHub username?",
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGitHubUsername
        );
        employeeArray.push(engineer);
        addEmployee();
    });
}

function internQuestions() {
    const questions = [
        {
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            name: "internID",
            message: "What is the team intern's id?",
        },
        {
            name: "internEmail",
            message: "What is the team intern's email?"
        },
        {
            name: "internSchool",
            message: "What is the team intern's school?",
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool
        );
        employeeArray.push(intern);
        addEmployee();
    });
}

function addEmployee() {
    const employeeTypeQuestions = [
        {
            name: "employeeType",
            message: "Which type of team member would you like to add?",
            type: "list",
            choices: [
                "Engineer",
                "Intern",
                "Cancel adding team member",
            ],
        },
    ];
    inquirer.prompt(employeeTypeQuestions).then((answers) => {
        if (answers.employeeType === "Engineer") {
            engineerQuestions();
        } else if (answers.employeeType === "Intern") {
            internQuestions();
        } else {
            //create HTML
        }
    });
}

function init() {
    managerQuestions();
}

init();