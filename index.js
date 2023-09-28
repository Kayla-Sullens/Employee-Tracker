const db = require("./db/db.js");
const {prompt} = require("inquirer");
const questions = require('./lib/questions.js');

// Got help from AskBCS who shared how to correctly use a switch statement here.
// I was using if/then before and functions.

const init = () => {
    prompt(questions).then((ans) => {
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



//Export array into a file