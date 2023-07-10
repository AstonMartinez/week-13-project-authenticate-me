'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const { User, Spot } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews'

    const user = await User.findOne({
      where: {
        firstName: 'Demo'
      }
    })

    const spot = await Spot.findOne({
      where: {
        address: "123 Disney Lane"
      }
    })

    await queryInterface.bulkInsert(options, [
      {
        spotId: spot.id,
        userId: user.id,
        review: "Best place ever!",
        stars: 5
      }
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      review: { [Op.in]: ['Best place ever!'] }
    }, {});
  }
};
