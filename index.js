const {prompt} = require("inquirer");
const db = require("./db/db.js");

// Got help from AskBCS who shared how to correctly use a switch statement here.
// I was using if/then before and functions.
const init = () => {
    prompt([
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
    ]).then((ans) => {
      let { task } = ans;
      switch (task) {
        case "view all departments":
          db.getDepts().then(init);
          break;
        case "view all roles":
          db.getRoles().then(init);
          break;
        case "view all employees":
          db.getEmployees().then(init);
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateRole();
          break;
        default:
          console.log("Invalid task selected");
          break;
      }
    });
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