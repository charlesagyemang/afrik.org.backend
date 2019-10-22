'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('lesson', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    title: { type: Sequelize.STRING, allowNull: false },
    desc: { type: Sequelize.STRING, allowNull: true },
    youtubeLink: { type: Sequelize.STRING, allowNull: true },

    courseId: { type: Sequelize.STRING,
      allowNull: false,
      references: { model: 'courses', key: 'id' } },
    payload: { type: Sequelize.JSONB, allowNull: false },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('lesson'),
};
