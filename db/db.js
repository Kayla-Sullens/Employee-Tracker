const connection = require("../config/connection");
const cTable = require("console.table");

class DB {
    constructor (connection){
        this.db = connection;
    }

    getDepts = () => 
        this.db.promise().query("SELECT * FROM department")
            .then(([data])=> console.table(data));
            

    getRoles = () => 
    // Do a join here
        this.db.promise().query("SELECT * FROM role")
            .then(([data])=> console.table(data));
            

    getEmployees = () => 
     // Do a join here
        this.db.promise().query("SELECT * FROM employee")
            .then(([data])=> console.table(data));
            
}

module.exports = new DB(connection);