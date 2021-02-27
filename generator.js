const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const Employees = [];

function init() {
    beginHTML();
    addTeammate();
}

function addTeammate() {
    inquirer.prompt([
        {
            message: "Hello! What's the name of the team member you wish to add?",
            name: "name"
        },
        {
            type: "list",
            name: "role",
            message: "What is their role?",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
        },
        {
            message: "Please enter member id number.",
            name: "id"
        },
        {
            message: "Please enter their email address",
            name: "email"
        }
    ]).then(function ({ name, role, id, email }) {
        let extraInfo = "";
        if (role === "Engineer") {
            extraInfo = "Github username";
        } else if (role === "Intern") {
            extraInfo = "college name";
        } else {
            extraInfo = "office phone number";
        }
        inquirer.prompt([
            {
                message: `Please enter your team member's ${extraInfo}`,
                name: "extraInfo"
            },
            {
                type: "list",
                name: "otherMembers",
                message: "Would you like to add more members?",
                choices: [
                    "Sure",
                    "Not right now"
                ]
            }
        ]).then(function ({ extraInfo, otherMembers }) {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, extraInfo);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, extraInfo);
            } else {
                newEmployee = new Manager(name, id, email, extraInfo);
            }
            Employees.push(newEmployee);
            createHTML(newEmployee)
                .then(function () {
                    if (otherMembers === "Sure") {
                        addTeammate();
                    } else {
                        endHTML();
                    }
                });
        });
    });
}


function beginHTML() {
    const html =` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="h1 w-100 text-center navbar-brand">Team Profile</span>
                </div>
            </nav>
        </div>
    
        <div class="container">
            <div class="row">`;
            
}






init();