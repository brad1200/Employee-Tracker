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

function startPrompt() {
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
        ]),

        function viewAllDepartments() {
            db.query('SELECT * FROM department', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
        },

        function viewAllRoles() {
            db.query('SELECT * FROM role', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
        },

        function viewAllEmployees() {
            db.query('SELECT * FROM employee', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
        },

        function addDepartments() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "newDepartment",
                        message: "What is the name of the department?",
                    },
                ]),
        },

        function addRole() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "newName",
                        message: "What is the new employee name?",
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is the salary of this job?",
                    },
                    {
                        type: "input",
                        name: "department",
                        message: "What department will this employee be in?",
                    },
                ]),
        },

        function addEmployee() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "firstName",
                        message: "What is the employee's first name?",
                    },
                    {
                        type: "input",
                        name: "slastName",
                        message: "What is the employee's last name?",
                    },
                    {
                        type: "input",
                        name: "role",
                        message: "What is the employee's role?",
                    },
                    {
                        type: "input",
                        name: "manager",
                        message: "Who is the employee's manager?",
                    },
                ]),

                startPrompt();