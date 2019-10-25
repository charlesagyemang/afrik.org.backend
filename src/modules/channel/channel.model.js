import Sequelize from 'sequelize';
import sequelize from '../../db';
import Course from '../course/course.model';
import Coupon from '../coupon/coupon.model';


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

const fk = { foreignKey: 'channelId' };

Channel.hasMany(Course, fk);
Course.belongsTo(Channel, fk);

Channel.hasMany(Coupon, fk);
Coupon.belongsTo(Channel, fk);


Channel.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Channel;
