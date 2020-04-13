'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('wheel', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    header: { type: Sequelize.STRING, allowNull: false },
    subHeader: { type: Sequelize.STRING, allowNull: false },
    dateToBegin: { type: Sequelize.DATE, allowNull: false },
    dateToEnd: { type: Sequelize.DATE, allowNull: false },
    other: { type: Sequelize.JSONB, allowNull: true },
    ownerId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'owner', key: 'id' } },


    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('wheel'),
};
