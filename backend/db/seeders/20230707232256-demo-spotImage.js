'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const { Spot } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'

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
        url: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        preview: true
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        preview: true
      },
      {
        spotId: spot3.id,
        url: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        preview: true
      },
      {
        spotId: spot4.id,
        url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        preview: true
      },
      {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        preview: true
      }

    ] ,{ validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: [
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ] }
    }, {});
  }
};
