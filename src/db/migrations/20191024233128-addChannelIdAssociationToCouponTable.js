'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
     'coupon',
     'channelId',
    {
      type: Sequelize.STRING,
      references: {
        model: 'channels',
        key: 'id',
      },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
   ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('coupon', 'channelId'),
};
