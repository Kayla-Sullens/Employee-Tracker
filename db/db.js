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
        this.db.promise().query(`
            SELECT 
                 r.id,
                 r.title,
                 d.name AS department,
                 r.salary
            FROM role AS r
            JOIN department AS d
            ON r.department_id = d.id;
        `)
            .then(([data])=> console.table(data));
            

    getEmployees = () => 
     // Do a join here
        this.db.promise().query(`
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                r.title,
                d.name AS department,
                r.salary,
                concat(e2.first_name, " ", e2.last_name) AS manager
            FROM employee AS e
            JOIN role AS r
            ON e.role_id = r.id
            JOIN department AS d
            ON r.department_id = d.id
            JOIN employee AS e2
            ON e.manager_id = e2.id;
            `)
            .then(([data])=> console.table(data));
            
}

module.exports = new DB(connection);