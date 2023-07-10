'use strict';
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const { User } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
   options.tableName = 'Spots'

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

   await queryInterface.bulkInsert(options, [
    {
      ownerId: user1.id,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123
    },
    {
      ownerId: user2.id,
      address: "1010 Fake Street",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 45.7645358,
      lng: -321.4730327,
      name: "Pauls Clubhouse",
      description: "Nothing but league of legends and cats",
      price: 123
    },
    {
      ownerId: user3.id,
      address: "4000 Gamer Lane",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 50.7645358,
      lng: -400.4730327,
      name: "Aidens Gamer Lounge",
      description: "I like turtles and video games",
      price: 123
    },
    {
      ownerId: user4.id,
      address: "5050 Artists Lane",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 23.7645358,
      lng: -700.4730327,
      name: "Audreys Art Gallery",
      description: "Art and bugs",
      price: 123
    },
    {
      ownerId: user5.id,
      address: "6060 Beauty Way",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 45.7645358,
      lng: -300.4730327,
      name: "Allisons Spa Palace",
      description: "Free makeovers included",
      price: 123
    }
   ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['App Academy', 'Pauls Clubhouse', 'Aidens Gamer Lounge', 'Audreys Art Gallery', 'Allisons Spa Palace'] }
    }, {});
  }
};
