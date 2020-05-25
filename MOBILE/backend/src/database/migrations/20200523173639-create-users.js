'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', {
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        name:{
          type:Sequelize.STRING,
          allowNull:false
        },
        cpf:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true
        },
        dor:{
          type:Sequelize.BOOLEAN,
          allowNull:false,

        },
        dor_intensidade:{
          type:Sequelize.INTEGER,
          allowNull:true,

        },
        desconforto:{
          type:Sequelize.BOOLEAN,
          allowNull:false,

        },
        desconforto_corpo:{
          type:Sequelize.STRING,
          allowNull:true,

        },
        cirurgia:{
          type:Sequelize.BOOLEAN,
          allowNull:false,

        },
        cirurgia_tempo:{
          type:Sequelize.INTEGER,
          allowNull:true,

        },
        cirurgia_tipo:{
          type:Sequelize.STRING,
          allowNull:true,

        },
        cirurgia_dor:{
          type:Sequelize.STRING,
          allowNull:true,

        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }

       });

  },

  down: (queryInterface) => {

      return queryInterface.dropTable('users');

  }
};
