import Sequelize from 'sequelize';
import sequelize from '../../db';
import Wheel from '../wheel/wheel.model';


// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Owner = sequelize.define('owner', {

  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.NUMBER, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, allowNull: false },
  other: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
});

const fk = { foreignKey: 'ownerId' };

Owner.hasMany(Wheel, fk);
Wheel.belongsTo(Owner, fk);


Owner.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Owner;
