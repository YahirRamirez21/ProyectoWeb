var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());

// Configurar la conexion
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "controlescolar",
});

// Probar conexion
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conectado a la base de datos");
  }
});

const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen("3000", (req, res) => {
  console.log("Servidor en puerto 3000");
});

app.get("/", function (req, res) {
  res.send("<h1>Ruta de inicio</h1>");
});
//get para consultas 
app.get("/api/maestros", function (req, res) {
  conexion.query("SELECT * FROM maestros", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.get("/api/alumnos", function (req, res) {
  conexion.query("SELECT * FROM alumnos", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.get("/api/materia", function (req, res) {
  conexion.query("SELECT * FROM materia", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.get("/api/grupos", function (req, res) {
  conexion.query("SELECT * FROM grupos", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.get("/api/carga", function (req, res) {
  conexion.query("SELECT * FROM carga", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

//insertar datos
app.post("/api/maestros", (req, res) => {
  let data = {};
});
