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
      tags: 'creative-space'
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
      tags: 'lakehouse'
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
    },
    {
      ownerId: user1.id,
      address: "6000 Candle Cove Blvd",
      city: "Galveston",
      state: "Texas",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Candle Cove Getaway",
      description: "A seaside getaway with all the luxurious add-ons you could possibly imagine. Be a villain in the lap of luxury.",
      price: 800,
      tags: 'beachfront'
    },
    {
      ownerId: user1.id,
      address: "1000 Who Knows Where St",
      city: "Pueblo",
      state: "Colorado",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "World's Best View",
      description: "A peaceful getaway with a gorgeous, un-matched view you wont find anywhere else.",
      price: 999,
      tags: 'great-view'
    },
    {
      ownerId: user2.id,
      address: "Lake Granbury",
      city: "Granbury",
      state: "Texas",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "SS Villainy",
      description: "Made for villains on-the-go, you can cruise the lake as much as you want, or you can dock at the nearby marina and scope out your next... catch of the day",
      price: 550,
      tags: 'houseboat'
    },
    {
      ownerId: user3.id,
      address: "3000 Beatrice Lane",
      city: "New York",
      state: "New York",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Heart of the City",
      description: "A small but cozy apartment in the middle of the place so nice they named it twice.",
      price: 999,
      tags: 'iconic-city'
    },
    {
      ownerId: user4.id,
      address: "1000 Nowhere Road",
      city: "Casper",
      state: "Wyoming",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Cabin de LeBlanc",
      description: "Snow or shine, this cabin has the space, activity access, and scenery you crave.",
      price: 589,
      tags: 'cabin'
    },
    {
      ownerId: user5.id,
      address: "3535 Expensive Street",
      city: "California",
      state: "Los Angeles",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Chateau Elite",
      description: "Unless youre one of the elites, this place isnt for you. Otherwise, welcome to the best place you've ever been.",
      price: 9999,
      tags: 'mansion'
    },
    {
      ownerId: user6.id,
      address: "5678 Oak St",
      city: "Salem",
      state: "Ohio",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "The Quirky Klubhouse",
      description: "Remember that treehouse you had as a kid? Here it is, but way better and you dont have to wait for your dad to finish building it.",
      price: 150,
      tags: 'treehouse'
    },
    {
      ownerId: user6.id,
      address: "10 Itty-Bitty Ln",
      city: "Happy",
      state: "Texas",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Tiny Escape",
      description: "If you're part of the Itty Bitty Villain Committee, this place is for you!",
      price: 600,
      tags: 'tiny-home'
    },
    {
      ownerId: user1.id,
      address: "8000 Farm Way",
      city: "Tulsa",
      state: "Oklahoma",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Tilly Farm",
      description: "One of the biggest farms in the state, and one of the comfiest.",
      price: 450,
      tags: 'farm'
    },
    {
      ownerId: user2.id,
      address: "123 Frame St",
      city: "Albequerque",
      state: "New Mexico",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Stylish A-Frame",
      description: "A minimalistic but home-y and cozy A-frame in the middle of nowhere.",
      price: 123,
      tags: 'a-frame'
    },
    {
      ownerId: user3.id,
      address: "200 Magick Island",
      city: "Reno",
      state: "Nevada",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Mystical Secret Island",
      description: "Somehow located in the middle of an entirely landlocked state, finding this island is a magickal endevour.",
      price: 660,
      tags: 'island'
    },
    {
      ownerId: user4.id,
      address: "1287 Rocky Rd",
      city: "Tucson",
      state: "Arizona",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Rocky Cave",
      description: "This cave will absolutely rock your world. At a rock-bottom price, how can you resist?",
      price: 100,
      tags: 'cave'
    },
    {
      ownerId: user5.id,
      address: "1000 Earthen Way",
      city: "Roswell",
      state: "New Mexico",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Earth to Vacay",
      description: "A place so incredible, it's practically out of this world.",
      price: 550,
      tags: 'earth-home'
    },
    {
      ownerId: user6.id,
      address: "248 Yurt St",
      city: "Red River",
      state: "New Mexico",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Sturdy Yurty",
      description: "Similar to a camping tent, but much more roomy and comfortable.",
      price: 300,
      tags: 'yurt'
    },
    {
      ownerId: user1.id,
      address: "5600 Campground Rd",
      city: "El Paso",
      state: "Texas",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Glamorous Campsite",
      description: "Youve never tried glamping till you've visited this highly villain-recommended campsite.",
      price: 145,
      tags: 'camping'
    },
    {
      ownerId: user2.id,
      address: "543 Poolhouse Dr",
      city: "Chicago",
      state: "Illinois",
      country: "United States",
      lat: 48.1234567,
      lng: -320.1234567,
      name: "Dreamy Poolside Lair",
      description: "Psst... theres a hidden lair beneath the pool, as well as a rather cozy normal house above ground.",
      price: 260,
      tags: 'amazing-pool'
    },
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
      name: { [Op.in]: ['Castle Dour', 'Minimalist Clubhouse', 'Castle Volkihar', 'Scenic Refurbished Castle', 'Dallas Art Palace', 'Lakeside Cabin', 'Countryside Spa Getaway', 'Draculas Hideout', "Candle Cove Getaway", "World's Best View", "SS Villainy", "Heart of the City", "Cabin de LeBlanc", "Chateau Elite", "The Quirky Klubhouse", "Tiny Escape", "Tilly Farm", "Stylish A-Frame", "Mystical Secret Island", "Rocky Cave", "Earth to Vacay", "Sturdy Yurty", "Glamorous Campsite", "Dreamy Poolside Lair"] }
    }, {});
  }
};
