const db = require("../db/db.js");

//console.log(db.listDepts());

const questions =
    [
        {
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
            ],
        },
        {
            name: "name",
            type: "input",
            message: "Please enter the department you would like to add:",
            when: ({task}) => task == 'add a department'
        },
        {
            name: "title",
            type: "input",
            message: "Please enter the role you would like to add:",
            when: ({task}) => task == 'add a role'
        },
        
        {
            name: "salary",
            type: "number",
            message: "Please enter the salary for this role:",
            when: ({task}) => task == 'add a role'
        },
        
        {
            name: "department_id",
            type: "list",
            message: "Which department would you like to add this role to?",
            choices: [
                "Human Resources",
                "Sales",
                "Engineering",
            ],
            when: ({task}) => task == 'add a role'
        },

        {
            name: "firstname",
            type: "input",
            message: "What is the employee's first name?",
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "lastname",
            type: "input",
            message: "What is the employee's last name?",
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: ['fill'],
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "reportingTo",
            type: "list",
            message: "Who is the employee's manager?",
            choices: ['fill'],
            when: ({task}) => task == 'add an employee'
        }

    ]

module.exports = questions;