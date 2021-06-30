const express = require('express')
const app = express()
require('dotenv/config')
app.use(express.json())
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
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

app.get('/usuarios', eAdmin, async (req, res) => {
  await Usuario.findAll({order: [['id', 'DESC']]}).then(function(usuarios){
    return res.json({    
      erro: false,
      message: "Usuarios Encontrados",
      usuarios
    })  
  }).catch(function(){
    return res.json({    
      erro: true,
      message: "Nenhum Usuário encontrado"
    })  
  })
})

app.get('/usuario/:id', eAdmin, async (req, res) =>{
  // BUSCA O USUÁRIO PELA CHAVE PRIMÁRIA PASSADA POR PARAMETRO PELA URL 
  await Usuario.findByPk(req.params.id).
  then(usuario => {
    return res.json({    
      erro: false,
      usuario
    })
  }).catch(function() {
    return res.json({    
      erro: true,
      message: "Nenhum Usuário encontrado"
    })
  })

})

app.post('/usuario', async (req, res) => {
  var dados = req.body
  dados.password =  await bcrypt.hash(dados.password, 8)

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

app.post('/login', async (req, res) => {

  const usuario = await Usuario.findOne({where: { email: req.body.email}})

  if(usuario === null){
    return res.json({
      erro: true,
      message: "Usuário ou Senha Incorreta",
    })  
  }

  if(!(await bcrypt.compare(req.body.password, usuario.password))){
    return res.json({
      erro: true,
      message: "Usuário ou Senha Incorreta",
    })  
  }

    // GERAR O TOKEN DO USUÁRIO
    var token = jwt.sign({id: usuario.id}, process.env.SECRET,{
      expiresIn: '3d' //10min
    })   

    return res.json({
      erro: false,
      message: "Login Realizado com sucesso",
      token
    }) 
})

app.listen(process.env.BACKEND_PORT, () =>{
  console.log(`Server is Run on PORT`, process.env.BACKEND_PORT)
})