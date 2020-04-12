import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Lesson = sequelize.define('lessons', {
  id: { type: Sequelize.STRING, primaryKey: true },

  // other model attributes go here

  title: { type: Sequelize.STRING, allowNull: false },
  desc: { type: Sequelize.STRING, allowNull: true },
  youtubeLink: { type: Sequelize.STRING, allowNull: true },

  courseId: { type: Sequelize.STRING,
    allowNull: false },
  payload: { type: Sequelize.JSONB, allowNull: false },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

Lesson.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Lesson;
