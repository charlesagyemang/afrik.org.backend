'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('channels', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    name: { type: Sequelize.STRING, allowNull: false },

    userId: { type: Sequelize.STRING,
      allowNull: false,
      references: { model: 'users', key: 'id' } },

    link: { type: Sequelize.STRING, allowNull: false },
    payload: { type: Sequelize.JSONB, allowNull: false },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('channels'),
};
