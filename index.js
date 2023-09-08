const { response, request } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos


app.get('/', (request, response)=>{
  return response.render('home')
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})


app.get = ('/',(request, response) => {
  return response.render('cadastro')
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post('/cadastro', (request, response)=>{
  const sql = 'SELECT * FROM cadastro '

pool.query(sql, function(err){
  if(err){
  console.log(err)
  return
} response.redirect('')


return response.render('cadastro', {cadastro})
})
});

return response.redirect('/cadastro')











