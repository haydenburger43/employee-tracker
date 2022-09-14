const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./develop/connection");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log(`
 employee manager`);
  // runs the app
  firstPrompt();
});

function prompt() {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        "End",
      ],
    })
    .then(function ({ task }) {
      switch (task) {
        case "View Employees":
          viewEmployee();
          break;

        case "View Employees by Department":
          viewEmployeeByDepartment();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employees":
          removeEmployees();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Add Role":
          addRole();
          break;

        case "End":
          connection.end();
          break;
      }
    });
}
