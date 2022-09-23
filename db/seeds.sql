USE employer_tracker;

INSERT INTO department (name)
VALUES ("Logistics"),
       ("Sales"),
       ("Make");
INSERT INTO role (title, salary, department_id)
VALUES ( "manager", 110000 , 1),
("engineer" , 70000, 2),
("Marketer", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Gabriela ", "albquerque " , 2, NULL);


     
       
