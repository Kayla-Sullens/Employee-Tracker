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

        if (task=="add a department") 
        if (task=="add a role") 
        if (task=="add an employee") 
        if (task=="update an employee role") 
    })
};

init();

//Export array into a file