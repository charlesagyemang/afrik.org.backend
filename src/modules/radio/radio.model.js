import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Radio = sequelize.define('radio', {
  id: { type: Sequelize.STRING, primaryKey: true },

  name: { type: Sequelize.STRING, allowNull: false },
  streamingLink: { type: Sequelize.STRING, allowNull: false },
  other: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Radio.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Radio;
