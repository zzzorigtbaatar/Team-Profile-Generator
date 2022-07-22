const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");

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
    });
}

function init() {
    managerQuestions();
}

init();