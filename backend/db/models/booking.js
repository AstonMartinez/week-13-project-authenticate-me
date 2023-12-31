'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      )

      Booking.belongsTo(
        models.Spot,
        { foreignKey: 'spotId'}
      )
    }
  }
  Booking.init({
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allownull: false,
      type: DataTypes.INTEGER
    },
    numGuests: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    stayLength: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hasTravelIns: {
      allowNull: false,
      type: DataTypes.STRING
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Booking',
    scopes: {
      notOwner(id) {
        return {
          attributes: {
            exclude: ['userId', 'createdAt', 'updatedAt']
          }
        }
      }
    }
  });
  return Booking;
};
