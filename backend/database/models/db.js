const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../backend/database/db.sqlite'
});

sequelize.authenticate().then(function(){
  console.log("Conectado ao banco de dados com sucesso")
}).catch(function(){
  console.log("Erro de conexão com o banco de dados")
})

module.exports = sequelize