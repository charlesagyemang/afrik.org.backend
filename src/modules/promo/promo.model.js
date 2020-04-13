import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Promo = sequelize.define('promo', {
  id: { type: Sequelize.STRING, primaryKey: true },

  label: { type: Sequelize.STRING, allowNull: false },
  value: { type: Sequelize.STRING, allowNull: false },
  question: { type: Sequelize.STRING, allowNull: false },
  wheelId: { type: Sequelize.STRING, allowNull: false },
  other: { type: Sequelize.JSONB, allowNull: true },


  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Promo.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Promo;
