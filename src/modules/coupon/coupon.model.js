import Sequelize from 'sequelize';
import sequelize from '../../db';


const Coupon = sequelize.define('coupon', {
  id: { type: Sequelize.STRING, primaryKey: true },

  pin: { type: Sequelize.STRING, allowNull: false },
  ownerDetails: { type: Sequelize.JSONB, allowNull: false },
  price: { type: Sequelize.STRING, allowNull: false },
  courses: { type: Sequelize.JSONB, default: [], allowNull: false },
  newFields: { type: Sequelize.JSONB, default: [], allowNull: true },
  status: { type: Sequelize.STRING, default: 'INACTIVE', allowNull: false },
  expirationDate: { allowNull: false, type: Sequelize.DATE },
  channelId: { type: Sequelize.STRING, allowNull: true },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Coupon.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Coupon;
