const inquirer = require("inquirer");

const connection = require("./db/connection"); // need to create a conection file

const MainMenu = function () {
  // creating function that shows the main Menu
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select one of the options ",
        name: "team",
        choices: [
          "View All Roles",
          "View All Employees",
          "Add a department",
          "Add a role",
          "Add an Employee",
          "Update Employee role",
          "Exit",
        ],
      },
    ])

    .then(function (answer) {
      // redirecting the answer for each submenu
      switch (answer.team) {
        case "View All Roles":
          viewAllroles();
          break;
        case "View All Employees":
          viewAllemployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addrole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update Employee role":
          UpdateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
};

function viewAllroles() {
  const query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    console.table(res);
    MainMenu();
  });
}

function viewAlldpts() {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    console.table(res);
    MainMenu();
  });
}

function viewAllemployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    console.table(res);
    MainMenu();
  });
}

const addDepartment = function () {
  //connection.query('SELECT * FROM department',  (err, results) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Write here the Department you want to add",
        name: "dpt", // put as placehorlder
      },
    ])
    .then(function (answer) {
      const query = "INSERT INTO  department (name) VALUE (?);";
      connection.query(query, [answer.dpt], (err, results) => {
        if (err) {
          return err;
        } else {
          viewAlldpts();
        }
      });
    });
};

const addrole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Write here the role you want to add",
        name: "rl", // put as placehorlder
      },
      {
        type: "input",
        message: "Write here the salary for this role ",
        name: "sl", // put as placehorlder
      },
      {
        type: "input",
        message: "Write here the departmt id regarding this role ",
        name: "did", // put as placehorlder
      },
    ])

    .then(function (answer) {
      console.log("ots working, ", answer);
      const query =
        "INSERT INTO  role (title,salary,department_id) VALUES (?,?,?);";
      connection.query(
        query,
        [answer.rl, answer.sl, answer.did],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            viewAllroles();
          }
        }
      );
    });
};

const UpdateEmployeeRole = function () {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    console.table(res);
  }),
    inquirer
      .prompt([
        {
          type: "input",
          message: "select the Id of the employee you want to update the role ",
          name: "eId", // put as placehorlder
        },
        {
          type: "input",
          message: "What is the new emplyee role id? ",
          name: "NRole", // put as placehorlder
        },
      ])
      .then(function (answer) {
        const query = `UPDATE employee SET role_id = ${answer.NRole} WHERE id = ${answer.eId}`;
        connection.query(query, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            viewAllemployees();
          }
        });
      });
};

const addEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Write here the employee first name",
        name: "fn", // put as placehorlder
      },
      {
        type: "input",
        message: "Write here employee second name ",
        name: "sn", // put as placehorlder
      },
      {
        type: "input",
        message: "Write here employee role ID ",
        name: "rId", // put as placehorlder
      },
      {
        type: "input",
        message: "Write here employee's manager ID  ",
        name: "mId", // put as placehorlder
      },
    ])

    .then(function (answer) {
      const query =
        "INSERT INTO  employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);";
      connection.query(
        query,
        [answer.fn, answer.sn, answer.rId, answer.mId],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            viewAllemployees();
          }
        }
      );
    });
};

MainMenu(); // Calling function MainMenu
