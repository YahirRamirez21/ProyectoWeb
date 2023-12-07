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
  origin: "*",
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

app.get("/api/alumnos/:id", function (req, res) {
  conexion.query("SELECT * FROM alumnos WHERE ncontrol = ? LIMIT 1", [req.params.id], (error, filas) => {
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
  let data = {
    clavemaestro: req.body.cla,
    nombre: req.body.nom,
    departamento: req.body.dep,
    estatus: req.body.est
  };
  let sql = "INSERT INTO maestros SET ?";
  conexion.query(sql, data, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});


app.post("/api/alumnos", (req, res) => {
  let data = {
    ncontrol: req.body.ncon,
    nombre: req.body.nom,
    carrera: req.body.car,
    estatus: req.body.est,
  };
  let sql = "INSERT INTO alumnos SET ?";
  conexion.query(sql, data, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.post("/api/materias", (req, res) => {
  let data = {
    clavemateria: req.body.cla,
    nombre: req.body.nom,
    credito: req.body.cre,
  };
  let sql = "INSERT INTO materia SET ?";
  conexion.query(sql, data, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.post("/api/grupos", (req, res) => {
  let data = {
    clavegrupo: req.body.clg,
    clavemateria: req.body.claMat,
    clavemaestro: req.body.claMto,
    limitealumnos: req.body.lim,
    inscripcion: req.body.ins,
    horariolunes: req.body.horL,
    horariomartes: req.body.horM,
    horariomiercoles: req.body.horMi,
    horariojueves: req.body.horJ,
    horarioViernes: req.body.horV,
  };
  let sql = "INSERT INTO grupos SET ?";
  conexion.query(sql, data, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

//actualizar
app.put("/api/maestros/:id", (req, res) => {
  let clave = req.params.id;
  let nombre = req.body.nom;
  let departamento = req.body.dep;
  let estatus = req.body.est;
  let sql =
    "UPDATE maestros SET nombre = ?, departamento =?, estatus=? WHERE clavemaestros=?";
  conexion.query(sql, [nombre, departamento, estatus, clave], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.put("/api/alumnos/:id", (req, res) => {
  let ncontrol = req.params.id;
  let nombre = req.body.nom;
  let carrera = req.body.car;
  let estatus = req.body.est;
  let sql =
    "UPDATE alumnos SET nombre = ?, carrera =?, estatus=? WHERE ncontrol=?";
  conexion.query(sql, [nombre, carrera, estatus, ncontrol], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.put("/api/materias/:id", (req, res) => {
  let clavemateria = req.params.id;
  let nombre = req.body.nom;
  let creditos = req.body.cre;
  let sql =
    "UPDATE materia SET nombre = ?, creditos =? WHERE clavemateria=?";
  conexion.query(sql, [nombre, creditos, clavemateria], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.put("/api/grupos/:id", (req, res) => {
  let clavegrupo = req.params.id;
  let clavemateria = req.body.claMat;
  let clavemaestro = req.body.claMaes;
  let limitealumnos = req.body.lim;
  let  inscripcion = req.body.ins;
  let  horariolunes = req.body.horL;
  let  horariomartes = req.body.horM;
  let  horariomiercoles = req.body.horMi;
  let  horariojueves = req.body.horJ;
  let  horarioviernes = req.body.horV;
  let sql =
    "UPDATE grupos SET clavemateria = ?, clavemaestro =?, limitealumnos =?, inscripcion =?, horariolunes =?, horariomartes =?, horariomiercoles =?, horariojueves =?, horarioviernes =? WHERE clavegrupo=?";
  conexion.query(sql, [clavemateria, clavemaestro, limitealumnos, inscripcion, horariolunes, horariomartes, horariomiercoles, horariojueves, horarioviernes, clavegrupo], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

//Delete
app.delete('/api/maestros/:id', (req, res)=>{
  conexion.query("DELETE FROM maestros WHERE clavemaestro=?", [req.params.id], function(error, filas){
    if(error){
      throw error;
    }else{
      res.send(filas);
    }
  })
});

app.delete('/api/alumnos/:id', (req, res)=>{
  conexion.query("DELETE FROM alumnos WHERE ncontrol=?", [req.params.id], function(error, filas){
    if(error){
      throw error;
    }else{
      res.send(filas);
    }
  })
});

app.delete('/api/materias/:id', (req, res)=>{
  conexion.query("DELETE FROM materia WHERE clavemateria=?", [req.params.id], function(error, filas){
    if(error){
      throw error;
    }else{
      res.send(filas);
    }
  })
});

app.delete('/api/grupos/:id', (req, res)=>{
  conexion.query("DELETE FROM grupos WHERE clavegrupo=?", [req.params.id], function(error, filas){
    if(error){
      throw error;
    }else{
      res.send(filas);
    }
  })
});