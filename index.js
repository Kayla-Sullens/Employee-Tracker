const {prompt} = require("inquirer");
const db = require("./db/db.js");

const init = ()  => {
    prompt(
        [
            {
                type: "list",
                name: "task",
                message: "What would you like to do?",
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
            }
        ]
    ).then(ans=>{
        let {task} = ans;
        if (task=="view all departments") db.getDepts().then(init);
        if (task=="view all roles") db.getRoles().then(init);
        if (task=="view all employees") db.getEmployees().then(init);

        if (task=="add a department").then(addDepartment());
        if (task=="add a role").then(addRole());
        if (task=="add an employee").then(addEmployee());
        if (task=="update an employee role").then(updateRole());
    })
};

init();

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}

//Export array into a file