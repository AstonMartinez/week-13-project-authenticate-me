'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(
        models.User,
        { foreignKey: 'ownerId' }
      )

      Spot.hasMany(
        models.Booking,
        { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      )

      Spot.hasMany(
        models.Review,
        { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      )

      Spot.hasMany(
        models.SpotImage,
        { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      )
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DECIMAL
    },
    lng: {
      type: DataTypes.DECIMAL
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [4,50]
      }
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    },
    tags: {
      type: DataTypes.STRING
    },
    // previewImage: {
    //   allowNull: false,
    //   type: DataTypes.STRING
    // }
  }, {
    sequelize,
    modelName: 'Spot',
    scopes: {
      getCurrentUserReviews(id) {
        return {
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'description']
          }
        }
      }
    }
  });
  return Spot;
};
