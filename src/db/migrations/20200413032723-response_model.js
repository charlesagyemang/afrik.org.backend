'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('response', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    customerName: { type: Sequelize.STRING, allowNull: false },
    customerPhone: { type: Sequelize.NUMBER, allowNull: false },
    customerEmail: { type: Sequelize.STRING, allowNull: false },
    wheelId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'wheel', key: 'id' } },
    promoId: { type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'promo', key: 'id' } },
    other: { type: Sequelize.JSONB, allowNull: true },


    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('response'),
};
