'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('tbCategorias', {
      idCategoria:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nome:{
        type:Sequelize.TEXT
      }
    }),
    await queryInterface.createTable('tbTipoProduto', {
      idTipoProduto:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nome:{
        type:Sequelize.TEXT
      }
    }),
    await queryInterface.createTable('tbFabricantes', {
      idFabricante:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nome:{
        type:Sequelize.TEXT
      }
    }),

    await queryInterface.createTable('tbProdutos', {
      idProduto: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      codigo:{
        type:Sequelize.TEXT
      },
      nome: {
        type:Sequelize.TEXT
      },
      idFabricante:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'tbFabricantes',
          key: 'idFabricante'
        }
      },
      estoque:{
        type:Sequelize.INTEGER
      },
      prVenda:{
        type:Sequelize.DECIMAL
      },
      prCompra:{
        type:Sequelize.DECIMAL
      },
      idCategoria:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'tbCategorias',
          key: 'idCategoria'
        }
      },
      idTipoProduto:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'tbTipoProduto',
          key: 'idTipoProduto'
        }
      },
      dtCadastro:{
        type:Sequelize.DATE
      },
      dtModificacao:{
        type:Sequelize.DATE
      },
    }, )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tbProdutos'),
    await queryInterface.dropTable('tbTipoProduto'),
    await queryInterface.dropTable('tbFabricantes')
  }
};
