'use strict';
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.TEXT
      },
      subject: {
        type: Sequelize.STRING
      },
      senderEmail: {
        type: Sequelize.STRING
      },
      recieverEmail: {
        type: Sequelize.TEXT
      },
      readStatus: {
        type: Sequelize.BOOLEAN
      },
      sentStatus: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mails');
  }
};