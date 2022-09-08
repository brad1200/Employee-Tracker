INSERT INTO department (name)
VALUES ('Salesman'),
        ('Main building'),
        ('Out of building');

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Salesman', 100000, 1),
        ('Greeter', 50000, 2),
        ('Porter', 45000,3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Brad', 'Carlson', 1, NULL),
        ('Nick', 'Goner', 2, 1),
        ('Deion', 'Lucky', 3, NULL);