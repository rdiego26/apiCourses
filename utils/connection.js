/**
 * Created by Diego Ramos on 06/02/14.
 */
'use strict';
var mysql = require('mysql');

var Connection = {

    get: mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'courses'})



}

module.exports = Connection
