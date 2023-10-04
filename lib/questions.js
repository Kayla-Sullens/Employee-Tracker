const db = require("../db/db.js");

const departments = db.listDepts
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
            choices: db.listDepts,
            when: ({task}) => task == 'add a role'
        },

        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?",
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "role_id",
            type: "list",
            message: "What is the employee's role?",
            choices: db.listRoles,
            when: ({task}) => task == 'add an employee'
        },

        {
            name: "manager_id",
            type: "list",
            message: "Who is the employee's manager?",
            choices: db.listEmps,
            when: ({task}) => task == 'add an employee'
        }

    ]

module.exports = questions;