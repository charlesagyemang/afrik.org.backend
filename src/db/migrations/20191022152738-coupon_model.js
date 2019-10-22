'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('coupon', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    pin: { type: Sequelize.STRING, allowNull: false },
    ownerDetails: { type: Sequelize.JSONB, allowNull: false },
    price: { type: Sequelize.STRING, allowNull: false },
    courses: { type: Sequelize.JSONB, default: [], allowNull: false },
    newFields: { type: Sequelize.JSONB, default: [], allowNull: true },
    status: { type: Sequelize.STRING, default: 'INACTIVE', allowNull: false },
    expirationDate: { allowNull: false, type: Sequelize.DATE },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('coupon'),
};
