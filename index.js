const inquirer = require('inquirer');
const fs = require('fs');
require('dotenv').config()
const dbConfig = require('./config/dbConfig');

const dbConnection = dbConfig();

console.log(dbConnection);

async function main() {
    console.info(chalk.blue('connection to database'));
    const dbConnection = await dbConfig();
    console.log(dbConnection);
};


inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            choices: [
                {
                    name: 'View all departments',
                    value: 'VIEW_ALL_DEPARTMENTS'
                },
                {
                    name: 'View all roles',
                    value: 'VIEW_ALL_ROLES'
                },
                {
                    name: 'View all employees',
                    value: 'VIEW_ALL_EMPLOYEES'
                },
                {
                    name: 'Add a department',
                    value: 'ADD_DEPARTMENT'
                },
                {
                    name: 'Add a role',
                    value: 'ADD_ROLE'
                },
                {
                    name: 'Add an employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Update and employee role',
                    value: 'UPDATE_EMPLOYEE_ROLE'
                }
            ]
        }
    ]);

