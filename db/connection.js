const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'sqlbooTcamp2022Gabi*',
      database: 'employer_tracker'
    });
    
    connection.connect();

    module.exports = connection;