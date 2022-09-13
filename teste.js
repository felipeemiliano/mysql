const Sequelize = require('sequelize')
const sequelize = new Sequelize('test' , 'root' , '12345', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log(" Conectado com sucesso!")

}).catch(function(erro){
    console.log(" Falha ao se conectar: "+erro)
})
