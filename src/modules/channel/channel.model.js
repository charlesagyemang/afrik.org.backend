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
const oD = { onDelete: 'CASCADE' };
const oU = { onUpdate: 'CASCADE' };

Channel.hasMany(Course, fk, oD, oU);
Course.belongsTo(Channel, fk, oD, oU);

Channel.hasMany(Coupon, fk, oD, oU);
Coupon.belongsTo(Channel, fk, oD, oU);


Channel.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Channel;
