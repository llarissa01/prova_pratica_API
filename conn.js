const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: '',
  port: '', // É opcional.
  user: 'root',
  password: 'Sen@iDev77!.',
  database: '',
})

// É necessário exporta esse modulo