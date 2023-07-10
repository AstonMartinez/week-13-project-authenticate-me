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
        address: "4000 Gamer Lane"
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
        userId: user5.id,
        review: "Best place ever!",
        stars: 5
      },
      {
        spotId: spot2.id,
        userId: user4.id,
        review: "Too much league, not enough cats",
        stars: 5
      },
      {
        spotId: spot3.id,
        userId: user1.id,
        review: "The owner is awkward but we had a good time",
        stars: 5
      },
      {
        spotId: spot4.id,
        userId: user3.id,
        review: "The art gallery in the house is impressive",
        stars: 5
      },
      {
        spotId: spot5.id,
        userId: user2.id,
        review: "Great makeovers from the owner, very relaxing",
        stars: 5
      }
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      review: { [Op.in]: [
        'Best place ever!',
        'Too much league, not enough cats',
        'The owner is awkward but we had a good time',
        'The art gallery in the house is impressive',
        'Great makeovers from the owner, very relaxing'
      ] }
    }, {});
  }
};
