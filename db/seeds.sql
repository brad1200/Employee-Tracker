INSERT INTO department (id, name)
VALUES (1, 'Salesman'),
        (2, 'Main building'),
        (3, 'Out of building');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Lead Salesman', 100000, 1),
        (2, 'Greeter', 50000, 2),
        (3, 'Porter', 45000,3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Brad', 'Carlson', 1, 1),
        (2, 'Nick', 'Goner', 2, 4),
        (3, 'Deion', 'Lucky', 3, 2);