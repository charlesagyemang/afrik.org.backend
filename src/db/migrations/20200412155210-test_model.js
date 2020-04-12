'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('test', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },

    // refer to http://docs.sequelizejs.com/manual/migrations.html#migration-skeleton
      // on how to define a migration
    other: { type: Sequelize.JSONB, allowNull: true },

    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('test'),
};
