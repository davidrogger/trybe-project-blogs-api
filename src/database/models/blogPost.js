module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  },
  {
    timestamps:true,
    createdAt: 'published',
    updatedAt: 'updated'
  });

  BlogPost.associate = (models) => {
    BlogPost.beLongsTo(models.User,
      { foreignKey: 'userId', as: 'users' },
      );
      
  }
  return BlogPost;
};