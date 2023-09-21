INSERT INTO department (name)
VALUES  
    ("Human Resources"),
    ("Sales"),
    ("Engineering");
        

INSERT INTO role (title, salary, department_id)
VALUES  
    ("HR Manager", 100000, 1),
    ("Sales Rep", 60000, 2),
    ("Software Engineer", 80000, 3);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ("Kayla", "Sullens",  1, NULL),
    ("John", "Doe",  2, 1),
    ("Jane", "Doe",  3, 1);
     