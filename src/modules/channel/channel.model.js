import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Channel = sequelize.define('channels', {
  id: { type: Sequelize.STRING, primaryKey: true },

  name: { type: Sequelize.STRING, allowNull: false },

  userId: { type: Sequelize.STRING, allowNull: false },

  link: { type: Sequelize.STRING, allowNull: false },
  payload: { type: Sequelize.JSONB, allowNull: false },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Channel.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Channel;
