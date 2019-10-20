'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING },

    role: { type: Sequelize.STRING, allowNull: true },
    firstName: { type: Sequelize.STRING, allowNull: true },
    status: { type: Sequelize.STRING, allowNull: true },
    phoneNumber: { type: Sequelize.STRING, allowNull: true },
    lastName: { type: Sequelize.STRING, allowNull: true },
    sessionToken: { type: Sequelize.STRING, allowNull: true },
    rememberTOken: { type: Sequelize.STRING, allowNull: true },
    age: { type: Sequelize.STRING, allowNull: true },

    changePasswordToken: { type: Sequelize.STRING, unique: true },
    changePasswordTokenDate: { type: Sequelize.BIGINT },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },
  })
  .then(() => queryInterface.addIndex('users', ['email'])),


  down: queryInterface => queryInterface.dropTable('users'),
};
