const inquirer = require("inquirer");

const connection = require("./db/connection"); // need to create a conection file 

const MainMenu = function () { // creating function that shows the main Menu 
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select one of the options ",
                name: "team",
                choices: ["View All Roles", "View All Employees", "Add a department ", "Add a role", "Add an Employee", "Update Employee role", "Exit"],
            },
        ]);

        then((answer) => { // redirecting the answer for each submenu 
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
                addrole()
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


MainMenu(); // Calling function MainMenu

function viewAllroles() {
    const query = "SELECT * FROM role";
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

  function viewAllemployees() {
    const query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
      console.table(res);
      MainMenu();
    });
  }

  //async function addDepartment(){
 // connection.query('SELECT * FROM department', async (err, results) {
//const department = await inquirer.prompt ([{
 //   name: "dpt", // put as placehorlder 
   // message: "Write here the Department you want to add ",
//}])
// const populateSeed = await connection.query(
//     "INSERT INTO  department (name) VALUE ('?') "
// )
//  });

//   }