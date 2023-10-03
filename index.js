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
          db.addDept(ans).then(init);
          break;
        case "add a role":
          const role = {title: ans.title, salary: ans.salary, department_id: null}
          db.addRole(role).then(init);
          break;
        case "add an employee":
          const employee = {first_name: ans.first_name, last_name: ans.last_name, role_id: null, department_id: null}
          db.addEmployee(employee).then(init);
          break;
        case "update an employee role":
          const update = {title: ans.title, salary: ans.salary, department_id: null}
          db.updateRole(update).then(init);
          break;
        default:
          console.log("Invalid task selected");
          break;
      }
    });
  };

init();



//Export array into a file