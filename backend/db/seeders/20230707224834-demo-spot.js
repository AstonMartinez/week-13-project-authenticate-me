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

   const user6 = await User.findOne({
    where: {
      firstName: 'Authy'
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
      name: "Castle Dour",
      description: "A seaside castle with beautiful sunsets and gloomy, rainy days.",
      price: 500,
      tags: 'castle'
      // previewImage: "https://images.pexels.com/photos/14043487/pexels-photo-14043487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      ownerId: user2.id,
      address: "1010 Fake Street",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 45.7645358,
      lng: -321.4730327,
      name: "Minimalist Clubhouse",
      description: "A calming paradise that's just the right size.",
      price: 150,
      tags: 'trending'
      // previewImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      ownerId: user2.id,
      address: "2020 Volkihar Street",
      city: "Coomhola",
      state: "County Cork",
      country: "Ireland",
      lat: 45.7645358,
      lng: -321.4730327,
      name: "Castle Volkihar",
      description: "May or may not be inhabited by vampires.",
      price: 600,
      tags: 'castle'
      // previewImage: 'https://images.pexels.com/photos/145847/pexels-photo-145847.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      ownerId: user3.id,
      address: "5600 Castle Terrace",
      city: "Vik",
      state: "Sogn og Fjordane",
      country: "Norway",
      lat: 50.7645358,
      lng: -400.4730327,
      name: "Scenic Refurbished Castle",
      description: "The perfect place for both eccentric villainy and harmless seclusion.",
      price: 800,
      tags: 'castle'
      // previewImage: 'https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      ownerId: user4.id,
      address: "5050 Artists Lane",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 23.7645358,
      lng: -700.4730327,
      name: "Dallas Art Palace",
      description: "A spacious home with a built-in art gallery.",
      price: 300,
      tags: '[great views, iconic cities'
      // previewImage: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      ownerId: user4.id,
      address: "5050 Lakeside Road",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 23.7645358,
      lng: -700.4730327,
      name: "Lakeside Cabin",
      description: "A luxurious cabin miles from any disturbances. Has access to a dock with multiple kayaks for guests to use.",
      price: 300,
      tags: 'cabin'
      // previewImage: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      ownerId: user5.id,
      address: "6060 Beauty Way",
      city: "Dallas",
      state: "Texas",
      country: "United States of America",
      lat: 45.7645358,
      lng: -300.4730327,
      name: "Countryside Spa Getaway",
      description: "A beautiful getaway in the middle of nowhere. Includes a spa area, outdoor courtyard, and a four-wheeler for outdoor exploration.",
      price: 123,
      tags: 'countryside'
      // previewImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      ownerId: user6.id,
      address: "666 Volt Way",
      city: "Camhoola",
      state: "County Cork",
      country: "Ireland",
      lat: 45.7645358,
      lng: -300.4730327,
      name: "Draculas Hideout",
      description: "A castle with questionable history. Dont worry, we replaced all the flooring with tile that wont stain.",
      price: 666,
      tags: 'castle'
      // previewImage: 'https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
      name: { [Op.in]: ['Castle Dour', 'Minimalist Clubhouse', 'Castle Volkihar', 'Scenic Refurbished Castle', 'Dallas Art Palace', 'Lakeside Cabin', 'Countryside Spa Getaway', 'Draculas Hideout', 'Aidens Gamer Lounge', 'Pauls Clubhouse', 'Allisons Spa Palace', 'Audreys Art Gallery', 'App Academy'] }
    }, {});
  }
};
