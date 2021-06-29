const express = require('express')
const app = express()
require('dotenv/config')
app.use(express.json())
const jwt = require('jsonwebtoken')
const cors = require('cors')
const { eAdmin } = require('./middlewares/auth') 
const Usuario = require('./database/models/Usuario')
// const db = require('../backend/database/models/db.js')

app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers" , "X-PINGOTHER, Content-Type', 'Authorization"),
  app.use(cors())
  next()
              
})

app.get('/usuarios', eAdmin, (req, res) => {
  return res.json({    
    erro: false,
    message: "Listar Usuários"
  })  
})

app.post('/usuario', async (req, res) => {
  var dados = req.body

  await Usuario.create(dados).then(function(){
    return res.json({       
      erro: false,
      message: "Usuário cadastrado com Sucesso!"
    })
  }).catch(function(){
    return res.json({    
      erro: true,
      message: "Error: Usuário não cadastrado com Sucesso!"
    })
  }) 

})

// app.get('/listaUser', async(req, res ) =>{
//   await Usuario.findAll().then(function(){
//     return res.json({    
//       erro: false,
//       message: "Lista de Usuários"
//     })
//   }).catch((err), function(){
//     console.log(err)
//     return res.json({    
//       erro: true,
//       message: "Error ao Buscar Listas!"
//     })
//   }) 
// })

// app.post('/login', (req, res) => {

//   if(req.body.usuario === 'vitor@teste.com' && req.body.senha === '123456'){

//     const {id} = 1
//     var privateKey = process.env.SECRET
//     var token = jwt.sign({id}, privateKey,{
//       expiresIn: '3d' //10min
//     })   

//     return res.json({
//       erro: false,
//       message: "Login Válido",
//       dados: req.body,
//       token
//     }) 
//   }
//   return res.json({
//     erro: true,
//     message: "Login Inválido",
//   })  
// })

app.listen(process.env.BACKEND_PORT, () =>{
  console.log(`Server is Run on PORT`, process.env.BACKEND_PORT)
})