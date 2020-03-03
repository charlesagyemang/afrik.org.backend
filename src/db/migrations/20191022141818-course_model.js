'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('courses', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    title: { type: Sequelize.STRING, allowNull: false },
    desc: { type: Sequelize.STRING, allowNull: true },
    trailerLink: { type: Sequelize.STRING, allowNull: true },

    channelId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'channels', key: 'id' } },

    payload: { type: Sequelize.JSONB, allowNull: false },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('courses'),
};
