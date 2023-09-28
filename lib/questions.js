const db = require("../db/db.js");

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
        // {
        //     name: "dept",
        //     type: "input",
        //     message: "Please enter the department you would like to add:"
        // },
        // {
        //     name: "role",
        //     type: "input",
        //     message: "Please enter the role you would like to add:"
        // },

        // {
        //     name: "dept",
        //     type: "list",
        //     message: "Which department would you like to add this role to?",
        //     choices: ['fill']
        // },

        // {
        //     name: "salary",
        //     type: "number",
        //     message: "Please enter the salary for this role:"
        // },
        // {
        //     name: "firstname",
        //     type: "input",
        //     message: "What is the employee's first name?"
        // },

        // {
        //     name: "lastname",
        //     type: "input",
        //     message: "What is the employee's last name?"
        // },

        // {
        //     name: "role",
        //     type: "list",
        //     message: "What is the employee's role?",
        //     choices: ['fill']
        // },

        // {
        //     name: "reportingTo",
        //     type: "list",
        //     message: "Who is the employee's manager?",
        //     choices: ['fill']
        // }

    ]

module.exports = questions;