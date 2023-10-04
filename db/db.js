const connection = require("../config/connection");
const cTable = require("console.table");

class DB {
    constructor(connection) {
        this.db = connection;
    }

    getDepts = () =>
        this.db.promise().query("SELECT * FROM department")
            .then(([data]) => console.table(data));

    listDepts = () =>
        this.db.promise().query("SELECT name, id AS value FROM department")
            .then(([data]) => data);


    getRoles = () =>
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
            .then(([data]) => console.table(data));

    listRoles = () =>
        this.db.promise().query("SELECT title name, id value FROM role")
            .then(([data]) => data);


    getEmployees = () =>
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
            LEFT JOIN employee AS e2
            ON e.manager_id = e2.id;
            `)
            .then(([data]) => console.table(data));

    listEmps = () =>
        this.db.promise().query('SELECT CONCAT(first_name, " ", last_name) name, id value FROM employee').then(([data]) => data);

    addDept = ({ name }) =>
        this.db.promise().query(`INSERT INTO department SET ?`, { name });

    addRole = ({ title, salary, department_id }) =>
        this.db.promise().query(`INSERT INTO role SET ?`, { title, salary, department_id });

    addEmployee = ({ first_name,last_name,role_id,manager_id }) =>
        this.db.promise().query(`INSERT INTO employee SET ?`, { first_name,last_name,role_id,manager_id });
        
    updateRole = ({ id, role_id, manager_id }) =>
        this.db.promise().query(`UPDATE employee SET ? WHERE ?`, [{ id, role_id, manager_id }, {id}]);

}

module.exports = new DB(connection);