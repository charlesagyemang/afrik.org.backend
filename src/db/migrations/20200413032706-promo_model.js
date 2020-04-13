'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('promo', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    label: { type: Sequelize.STRING, allowNull: false },
    value: { type: Sequelize.NUMBER, allowNull: false },
    question: { type: Sequelize.STRING, allowNull: false },
    wheelId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'wheel', key: 'id' } },
    other: { type: Sequelize.JSONB, allowNull: true },


    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('promo'),
};
