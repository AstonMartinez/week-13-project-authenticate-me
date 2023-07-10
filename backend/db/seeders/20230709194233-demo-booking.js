'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const { Spot, User, Booking } = require('../models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings'

    const spot = await Spot.findOne({
      where: {
        address: "123 Disney Lane"
      }
    })

    const user = await User.findOne({
      where: {
        firstName: 'Demo'
      }
    })

    await queryInterface.bulkInsert(options, [
      {
        spotId: spot.id,
        userId: user.id,
        startDate: "2023-07-30",
        endDate: '2023-08-06'
      }
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const spot = await Spot.findOne({
      where: {
        address: "123 Disney Lane"
      }
    })

    const user = await User.findOne({
      where: {
        firstName: 'Demo'
      }
    })
    const booking = await Booking.findOne({
      where: {
        userId: user.id,
        spotId: spot.id
      }
    })
    return queryInterface.bulkDelete(options, booking, {});
  }
};
