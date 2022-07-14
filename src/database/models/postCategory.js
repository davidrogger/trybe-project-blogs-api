module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true
      }
  }, {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      other: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'categoryId',
      other: 'postId'
    });
  }
  return PostCategory;
};