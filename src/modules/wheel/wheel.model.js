import Sequelize from 'sequelize';
import sequelize from '../../db';
import Promo from '../promo/promo.model';
import Response from '../response/response.model';


// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Wheel = sequelize.define('wheel', {
  id: { type: Sequelize.STRING, primaryKey: true },

  header: { type: Sequelize.STRING, allowNull: false },
  subHeader: { type: Sequelize.STRING, allowNull: false },
  dateToBegin: { type: Sequelize.DATE, allowNull: false },
  dateToEnd: { type: Sequelize.DATE, allowNull: false },
  ownerId: { type: Sequelize.STRING, allowNull: false },
  other: { type: Sequelize.JSONB, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});


const fk = { foreignKey: 'wheelId' };

Wheel.hasMany(Promo, fk);
Promo.belongsTo(Wheel, fk);

Wheel.hasMany(Response, fk);
Response.belongsTo(Wheel, fk);

Wheel.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Wheel;
