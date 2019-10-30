// Adapted from https://appdividend.com/2018/08/25/how-to-connect-nodejs-application-to-mysql-database/
// server.js

const mysql = require('mysql');

const connector = mysql.createConnection({

    host: "localhost",
    user: "reactjs",
    password: "R34ctJS!!@"
});

connector.connect(function(error) {

    if (error) throw error;

    console.log("Connected!");

    let sql = `CREATE DATABASE reactjs_user`;

    connector.query(sql, function (error, result) {

        if (error) throw error;

        console.log("The Database is created!!");
    });
});
