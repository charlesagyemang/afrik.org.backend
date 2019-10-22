import Sequelize from 'sequelize';
import sequelize from '../../db';
import Lesson from '../lesson/lesson.model';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Course = sequelize.define('courses', {
  id: { type: Sequelize.STRING, primaryKey: true },

  title: { type: Sequelize.STRING, allowNull: false },
  desc: { type: Sequelize.STRING, allowNull: true },
  trailerLink: { type: Sequelize.STRING, allowNull: true },

  channelId: { type: Sequelize.STRING,
    allowNull: false },

  payload: { type: Sequelize.JSONB, allowNull: false },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

const fk = { foreignKey: 'courseId' };

Course.hasMany(Lesson, fk);
Lesson.belongsTo(Course, fk);

Course.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Course;
