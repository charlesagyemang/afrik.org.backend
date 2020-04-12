import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Test = sequelize.define('test', {
  id: { type: Sequelize.STRING, primaryKey: true },
  other: { type: Sequelize.JSONB, allowNull: true },
  //other model attributes go here
});

Test.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Test;
