import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Response = sequelize.define('response', {
  id: { type: Sequelize.STRING, primaryKey: true },

  customerName: { type: Sequelize.STRING, allowNull: false },
  customerPhone: { type: Sequelize.NUMBER, allowNull: false },
  customerEmail: { type: Sequelize.STRING, allowNull: false },
  wheelId: { type: Sequelize.STRING, allowNull: false },
  promoId: { type: Sequelize.STRING, allowNull: false },
  other: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Response.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Response;
