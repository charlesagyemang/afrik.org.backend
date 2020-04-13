'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('owner', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phoneNumber: { type: Sequelize.STRING, allowNull: false },
    other: { type: Sequelize.JSONB, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('owner'),
};
