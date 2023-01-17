const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const teamData =[];

const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');


`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
  <header class="p-5 mb-4 header bg-light">
  <div class="container">
    <h1 class="display-4"> TEAM </h1>

  </body>`


const userPrompts = async () => {
const userAnswers = await inquirer
    .prompt([
        {
            type:'input',
            message:'What is your name?',
            name:'name',
        },
        {
            type: 'input',
            message:'What is your ID number',
            name:'Id',
        },
        {
            type:'input',
            message:'What is your email?',
            name:'email',
        },
        {
            type:'list',
            message:'What is your role?',
            name:'role',
            choices: ['Engineer','Intern','Manager'],
        },
    ])


    if(userAnswers.role === "Intern") {
        const internAw = await inquirer
        .prmpt([
            {
                type: 'input',
                message:'What school do you go to?',
                name:'school',
            },
        ]);
        const userIntern = new Intern(
            userAnswers.name,
            userAnswers.Id,
            userAnswers.email,
            internAw.school
        );
        teamData.push(userIntern);

    } else if (userAnswers.role === 'Engineer') {
        
    }
}