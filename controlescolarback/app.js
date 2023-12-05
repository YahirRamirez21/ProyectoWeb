var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.json);


// Configurar la conexion
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "controlescolar"
});


// Probar conexion
conexion.connect(function(error) {
    if(error) {
        throw error;
    }else {
        console.log("Conectado a la base de datos");
    }
});