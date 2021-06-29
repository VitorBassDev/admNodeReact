const Sequelize = require('sequelize');
const db = require('../db.js')

const Usuario = db.define('usuarios', {

  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: true
  }
})

Usuario.sync();

module.exports = Usuario
