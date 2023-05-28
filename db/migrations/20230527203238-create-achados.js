'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Achados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_item: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      quem_achou: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      hora_aproximada: {
        type: Sequelize.STRING
      },
      dono_encontrado: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Achados');
  }
};