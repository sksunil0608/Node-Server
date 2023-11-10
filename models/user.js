const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        unique: true
    },
    phone:{
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    time:{
        type:Sequelize.STRING
    },
    date:{
        type:Sequelize.DATEONLY,
        default: new Date()
    },

})

module.exports = User;