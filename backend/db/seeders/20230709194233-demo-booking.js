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

    const user1 = await User.findOne({
      where: {
        firstName: 'Aston'
      }
     })

     const user2 = await User.findOne({
      where: {
        firstName: 'Paul'
      }
     })

     const user3 = await User.findOne({
      where: {
        firstName: 'Aiden'
      }
     })

     const user4 = await User.findOne({
      where: {
        firstName: 'Audrey'
      }
     })

     const user5 = await User.findOne({
      where: {
        firstName: 'Allison'
      }
     })

    const spot1 = await Spot.findOne({
      where: {
        address: "123 Disney Lane"
      }
    })

    const spot2 = await Spot.findOne({
      where: {
        address: "1010 Fake Street"
      }
    })

    const spot3 = await Spot.findOne({
      where: {
        address: "666 Volt Way"
      }
    })

    const spot4 = await Spot.findOne({
      where: {
        address: "5050 Artists Lane"
      }
    })

    const spot5 = await Spot.findOne({
      where: {
        address: "6060 Beauty Way"
      }
    })

    await queryInterface.bulkInsert(options, [
      {
        spotId: spot1.id,
        userId: user2.id,
        startDate: "2023-07-30",
        endDate: '2023-08-06',
        numGuests: 2,
        stayLength: 8,
        hasTravelIns: 'true'
      },
      {
        spotId: spot2.id,
        userId: user3.id,
        startDate: "2023-08-01",
        endDate: '2023-08-04',
        numGuests: 2,
        stayLength: 3,
        hasTravelIns: 'true'
      },
      {
        spotId: spot3.id,
        userId: user4.id,
        startDate: "2023-08-02",
        endDate: '2023-08-06',
        numGuests: 2,
        stayLength: 4,
        hasTravelIns: 'false'
      },
      {
        spotId: spot4.id,
        userId: user5.id,
        startDate: "2023-07-25",
        endDate: '2023-08-01',
        numGuests: 4,
        stayLength: 7,
        hasTravelIns: 'true'
      },
      {
        spotId: spot5.id,
        userId: user1.id,
        startDate: "2023-07-16",
        endDate: '2023-07-20',
        numGuests: 5,
        stayLength: 4,
        hasTravelIns: 'false'
      }
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      startDate: { [Op.in]: ['2023-07-30', '2023-08-01', '2023-08-02', '2023-07-25', '2023-07-16'] }
    }, {});
  }
};
