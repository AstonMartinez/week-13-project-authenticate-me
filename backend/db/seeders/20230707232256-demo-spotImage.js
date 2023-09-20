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
        address: "2020 Volkihar Street"
      }
    })

    const spot4 = await Spot.findOne({
      where: {
        address: "5600 Castle Terrace"
      }
    })

    const spot5 = await Spot.findOne({
      where: {
        address: "5050 Artists Lane"
      }
    })

    const spot6 = await Spot.findOne({
      where: {
        address: "5050 Lakeside Road"
      }
    })

    const spot7 = await Spot.findOne({
      where: {
        address: "6060 Beauty Way"
      }
    })

    const spot8 = await Spot.findOne({
      where: {
        address: "666 Volt Way"
      }
    })

    const spot9 = await Spot.findOne({
      where: {
        address: "6000 Candle Cove Blvd"
      }
    })

    const spot10 = await Spot.findOne({
      where: {
        address: "1000 Who Knows Where St"
      }
    })

    const spot11 = await Spot.findOne({
      where: {
        address: "Lake Granbury"
      }
    })

    const spot12 = await Spot.findOne({
      where: {
        address: "3000 Beatrice Lane"
      }
    })

    const spot13 = await Spot.findOne({
      where: {
        address: "1000 Nowhere Road"
      }
    })

    const spot14 = await Spot.findOne({
      where: {
        address: "3535 Expensive Street"
      }
    })

    const spot15 = await Spot.findOne({
      where: {
        address: "5678 Oak St"
      }
    })

    const spot16 = await Spot.findOne({
      where: {
        address: "10 Itty-Bitty Ln"
      }
    })

    const spot17 = await Spot.findOne({
      where: {
        address: "8000 Farm Way"
      }
    })

    const spot18 = await Spot.findOne({
      where: {
        address: "123 Frame St"
      }
    })

    const spot19 = await Spot.findOne({
      where: {
        address: "200 Magick Island"
      }
    })

    const spot20 = await Spot.findOne({
      where: {
        address: "1287 Rocky Rd"
      }
    })

    const spot21 = await Spot.findOne({
      where: {
        address: "1000 Earthen Way"
      }
    })

    const spot22 = await Spot.findOne({
      where: {
        address: "248 Yurt St"
      }
    })

    const spot23 = await Spot.findOne({
      where: {
        address: "5600 Campground Rd"
      }
    })

    const spot24 = await Spot.findOne({
      where: {
        address: "543 Poolhouse Dr"
      }
    })

    await queryInterface.bulkInsert(options, [
      {
        spotId: spot1.id,
        url: "https://images.pexels.com/photos/14043487/pexels-photo-14043487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        key: "pexels-photo-14043487.jpeg",
        preview: true
      },
      {
        spotId: spot1.id,
        url: "https://images.pexels.com/photos/17177651/pexels-photo-17177651/free-photo-of-silhouette-of-windows-frame.jpeg?auto=compress&cs=tinysrgb&w=1200",
        key: "free-photo-of-silhouette-of-windows-frame.jpeg",
        preview: false
      },
      {
        spotId: spot1.id,
        url: "https://images.pexels.com/photos/1170070/pexels-photo-1170070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        key: "pexels-photo-1170070.jpeg",
        preview: false
      },
      {
        spotId: spot1.id,
        url: "https://images.pexels.com/photos/6957089/pexels-photo-6957089.jpeg?auto=compress&cs=tinysrgb&w=1200",
        key: "pexels-photo-6957089.jpeg",
        preview: false
      },
      {
        spotId: spot1.id,
        url: "https://images.pexels.com/photos/6957097/pexels-photo-6957097.jpeg?auto=compress&cs=tinysrgb&w=1200",
        key: "pexels-photo-6957089.jpeg",
        preview: false
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-106399.jpeg",
        preview: true
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/9582414/pexels-photo-9582414.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-9582414.jpeg",
        preview: false
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/17386428/pexels-photo-17386428/free-photo-of-minimalist-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "free-photo-of-minimalist-interior-design.jpeg",
        preview: false
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6480707.webp",
        preview: false
      },
      {
        spotId: spot2.id,
        url: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-534172.webp",
        preview: false
      },
      {
        spotId: spot3.id,
        url: 'https://images.pexels.com/photos/145847/pexels-photo-145847.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-145847.jpeg",
        preview: true
      },
      {
        spotId: spot3.id,
        url: 'https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-218480.jpeg",
        preview: false
      },
      {
        spotId: spot3.id,
        url: 'https://media.istockphoto.com/id/910827792/photo/3d-rendering-dark-palace.jpg?b=1&s=612x612&w=0&k=20&c=UbVe2AjYaL3UGD296RpoHKCYv3d-Rny1o9mgDFGm9Zs=',
        key: "istockphoto-910827792-612x612.jpg",
        preview: false
      },
      {
        spotId: spot3.id,
        url: 'https://media.istockphoto.com/id/1480594709/photo/royal-bathroom-with-a-gothic-window-in-a-castle-on-the-sea.jpg?b=1&s=612x612&w=0&k=20&c=7K75Z_A0cmKfjt8y7f8VOYz9qEJGPgQ5pKY_-xvIcdw=',
        key: "istockphoto-1480594709-612x612.jpg",
        preview: false
      },
      {
        spotId: spot3.id,
        url: 'https://media.istockphoto.com/id/1363830876/photo/fantasy-medieval-temple-in-the-castle-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=GMmLIdSdpBOIdwBMUcbMVroGE2OPjickNM0uQVoQcX0=',
        key: "istockphoto-1363830876-612x612.jpg",
        preview: false
      },
      {
        spotId: spot4.id,
        url: 'https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&w=1200',
        key: "mont-saint-michel-france-normandy-europe.jpg",
        preview: true
      },
      {
        spotId: spot4.id,
        url: 'https://images.pexels.com/photos/15996636/pexels-photo-15996636/free-photo-of-art-building-tunnel-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "free-photo-of-art-building-tunnel-architecture.jpeg",
        preview: false
      },
      {
        spotId: spot4.id,
        url: 'https://media.istockphoto.com/id/172236366/photo/stone-staircase-and-courtyard.jpg?b=1&s=612x612&w=0&k=20&c=T14JoVRd1TUxRo8FFUAUH0lhOi8DNXtAFUdSy0erxTc=',
        key: "istockphoto-172236366-612x612.jpg",
        preview: false
      },
      {
        spotId: spot4.id,
        url: 'https://media.istockphoto.com/id/607477044/photo/gothic-cathedral-interior-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=wREVjBA1bzh3GQkoOVqoE4jf0WvHL1nIcFjkc9CgRrc=',
        key: "istockphoto-607477044-612x612.jpg",
        preview: false
      },
      {
        spotId: spot4.id,
        url: 'https://media.istockphoto.com/id/476433490/photo/columned-arched-gothic-room.jpg?b=1&s=612x612&w=0&k=20&c=OAyGpl4HiSV2yvpfOuOuL8OKcaTeTNiubgkafjLUYk0=',
        key: "istockphoto-476433490-612x612.jpg",
        preview: false
      },
            {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-5563472.jpeg",
        preview: true
      },
      {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-1669799.jpeg",
        preview: false
      },
      {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-931887.webp",
        preview: false
      },
      {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-139764.webp",
        preview: false
      },
      {
        spotId: spot5.id,
        url: 'https://images.pexels.com/photos/17345918/pexels-photo-17345918/free-photo-of-barcelona-pavilion-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "free-photo-of-barcelona-pavilion-in-spain.jpeg",
        preview: false
      },
      {
        spotId: spot6.id,
        url: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-1612351.jpeg",
        preview: true
      },
      {
        spotId: spot6.id,
        url: 'https://images.pexels.com/photos/6438744/pexels-photo-6438744.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6438744.webp",
        preview: false
      },
      {
        spotId: spot6.id,
        url: 'https://images.pexels.com/photos/2434255/pexels-photo-2434255.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-2434255.jpeg",
        preview: false
      },
      {
        spotId: spot6.id,
        url: 'https://images.pexels.com/photos/5784432/pexels-photo-5784432.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-5784432.jpeg",
        preview: false
      },
      {
        spotId: spot6.id,
        url: 'https://images.pexels.com/photos/9220877/pexels-photo-9220877.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-9220877.jpeg",
        preview: false
      },
      {
        spotId: spot7.id,
        url: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-9220877.jpeg",
        preview: true
      },
      {
        spotId: spot7.id,
        url: 'https://images.pexels.com/photos/12534075/pexels-photo-12534075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-12534075.jpeg",
        preview: false
      },
      {
        spotId: spot7.id,
        url: 'https://images.pexels.com/photos/7174404/pexels-photo-7174404.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7174404.webp",
        preview: false
      },
      {
        spotId: spot7.id,
        url: 'https://images.pexels.com/photos/6957087/pexels-photo-6957087.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6957087.jpeg",
        preview: false
      },
      {
        spotId: spot7.id,
        url: 'https://images.pexels.com/photos/6958150/pexels-photo-6958150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-6958150.jpeg",
        preview: false
      },
      {
        spotId: spot8.id,
        url: 'https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-819806.jpeg",
        preview: true
      },
      {
        spotId: spot8.id,
        url: 'https://media.istockphoto.com/id/1288807843/photo/medieval-bedroom-with-a-large-bed.jpg?b=1&s=612x612&w=0&k=20&c=J4LGWE9VXnalnxo-oLWWuBqZT1cN8JUDU2y-_5SIR0k=',
        key: "istockphoto-1288807843-612x612.jpg",
        preview: false
      },
      {
        spotId: spot8.id,
        url: 'https://media.istockphoto.com/id/182913408/photo/luxury-bedroom.jpg?b=1&s=612x612&w=0&k=20&c=Tx4RSxrdythLPZe7zuTkCMW08ivLDykM858qkftXFBY=',
        key: "istockphoto-182913408-612x612.jpg",
        preview: false
      },
      {
        spotId: spot8.id,
        url: 'https://images.pexels.com/photos/2938918/pexels-photo-2938918.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-2938918.jpeg",
        preview: false
      },
      {
        spotId: spot8.id,
        url: 'https://images.pexels.com/photos/678047/pexels-photo-678047.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-678047.jpeg",
        preview: false
      },
      {
        spotId: spot9.id,
        url: 'https://images.pexels.com/photos/12715492/pexels-photo-12715492.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-12715492.jpeg",
        preview: true
      },
      {
        spotId: spot9.id,
        url: 'https://images.pexels.com/photos/1233281/pexels-photo-1233281.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-1233281.jpeg",
        preview: false
      },
      {
        spotId: spot9.id,
        url: 'https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-453201.jpeg",
        preview: false
      },
      {
        spotId: spot9.id,
        url: 'https://images.pexels.com/photos/494057/pexels-photo-494057.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-494057.webp",
        preview: false
      },
      {
        spotId: spot9.id,
        url: 'https://images.pexels.com/photos/1154498/pexels-photo-1154498.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-1154498.jpeg",
        preview: false
      },
      {
        spotId: spot10.id,
        url: 'https://images.pexels.com/photos/1038256/pexels-photo-1038256.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-1038256.jpeg",
        preview: true
      },
      {
        spotId: spot10.id,
        url: 'https://images.pexels.com/photos/4183537/pexels-photo-4183537.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-4183537.jpeg",
        preview: false
      },
      {
        spotId: spot10.id,
        url: 'https://images.pexels.com/photos/7764341/pexels-photo-7764341.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7764341.jpeg",
        preview: false
      },
      {
        spotId: spot10.id,
        url: 'https://images.pexels.com/photos/12404352/pexels-photo-12404352.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-12404352.webp",
        preview: false
      },
      {
        spotId: spot10.id,
        url: 'https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7534555.jpeg",
        preview: false
      },
      {
        spotId: spot11.id,
        url: 'https://images.pexels.com/photos/10933045/pexels-photo-10933045.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-10933045.jpeg",
        preview: true
      },
      {
        spotId: spot11.id,
        url: 'https://images.pexels.com/photos/6034021/pexels-photo-6034021.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6034021.jpeg",
        preview: false
      },
      {
        spotId: spot11.id,
        url: 'https://images.pexels.com/photos/7114136/pexels-photo-7114136.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7114136.jpeg",
        preview: false
      },
      {
        spotId: spot11.id,
        url: 'https://images.pexels.com/photos/7118800/pexels-photo-7118800.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7118800.jpeg",
        preview: false
      },
      {
        spotId: spot11.id,
        url: 'https://images.pexels.com/photos/15784940/pexels-photo-15784940/free-photo-of-sea-view-from-window.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "free-photo-of-sea-view-from-window.jpeg",
        preview: false
      },
      {
        spotId: spot12.id,
        url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-323780.webp",
        preview: true
      },
      {
        spotId: spot12.id,
        url: 'https://images.pexels.com/photos/9826968/pexels-photo-9826968.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-9826968.jpeg",
        preview: false
      },
      {
        spotId: spot12.id,
        url: 'https://images.pexels.com/photos/14175921/pexels-photo-14175921.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-14175921.jpeg",
        preview: false
      },
      {
        spotId: spot12.id,
        url: 'https://images.pexels.com/photos/7635919/pexels-photo-7635919.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7635919.jpeg",
        preview: false
      },
      {
        spotId: spot12.id,
        url: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-342800.jpeg",
        preview: false
      },
      {
        spotId: spot13.id,
        url: 'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-206648.jpeg",
        preview: true
      },
      {
        spotId: spot13.id,
        url: 'https://images.pexels.com/photos/8112856/pexels-photo-8112856.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-8112856.jpeg",
        preview: false
      },
      {
        spotId: spot13.id,
        url: 'https://images.pexels.com/photos/516930/pexels-photo-516930.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-516930.jpeg",
        preview: false
      },
      {
        spotId: spot13.id,
        url: 'https://images.pexels.com/photos/5439495/pexels-photo-5439495.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-5439495.jpeg",
        preview: false
      },
      {
        spotId: spot13.id,
        url: 'https://images.pexels.com/photos/7512047/pexels-photo-7512047.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7512047.jpeg",
        preview: false
      },
      {
        spotId: spot14.id,
        url: 'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo.jpg",
        preview: true
      },
      {
        spotId: spot14.id,
        url: 'https://images.pexels.com/photos/6283961/pexels-photo-6283961.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6283961.jpeg",
        preview: false
      },
      {
        spotId: spot14.id,
        url: 'https://images.pexels.com/photos/7061415/pexels-photo-7061415.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-7061415.jpeg",
        preview: false
      },
      {
        spotId: spot14.id,
        url: 'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6283973.webp",
        preview: false
      },
      {
        spotId: spot14.id,
        url: 'https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-6957079.jpeg",
        preview: false
      },
      {
        spotId: spot15.id,
        url: 'https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=1200',
        key: "8daeb070-e9f1-40f1-a0c2-fb90682483d3.webp",
        preview: true
      },
      {
        spotId: spot15.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/1d9a6c99-3971-4246-a51f-1cde98d03178.jpeg?im_w=1200',
        key: "1d9a6c99-3971-4246-a51f-1cde98d03178.webp",
        preview: false
      },
      {
        spotId: spot15.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/b48678e1-ac17-4d9f-97ef-966b890782b2.jpeg?im_w=1200',
        key: "b48678e1-ac17-4d9f-97ef-966b890782b2.webp",
        preview: false
      },
      {
        spotId: spot15.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/989eacf2-e53e-4b63-aec7-73347066c41c.jpeg?im_w=1200',
        key: "989eacf2-e53e-4b63-aec7-73347066c41c.webp",
        preview: false
      },
      {
        spotId: spot15.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/a8d7fd19-d21d-4cef-9c95-3194b621a3d4.jpeg?im_w=1200',
        key: "a8d7fd19-d21d-4cef-9c95-3194b621a3d4.webp",
        preview: false
      },
      {
        spotId: spot16.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/68491e8d-d6bc-49e8-9ade-a843e2f4a93a.jpeg?im_w=1200',
        key: "68491e8d-d6bc-49e8-9ade-a843e2f4a93a.webp",
        preview: true
      },
      {
        spotId: spot16.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/ec34cde4-1a85-455e-b62c-b40bba243af3.jpeg?im_w=1200',
        key: "ec34cde4-1a85-455e-b62c-b40bba243af3.webp",
        preview: false
      },
      {
        spotId: spot16.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/b0bd891a-4f97-4a69-a895-37b3a58c2b8d.jpeg?im_w=1200',
        key: "b0bd891a-4f97-4a69-a895-37b3a58c2b8d.webp",
        preview: false
      },
      {
        spotId: spot16.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/225be1be-7ab4-4c79-9baf-7b1dca869734.jpeg?im_w=1200',
        key: "225be1be-7ab4-4c79-9baf-7b1dca869734.webp",
        preview: false
      },
      {
        spotId: spot16.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/452ea726-6fe0-4bf4-8e1b-5f45efe5e931.jpeg?im_w=720',
        key: "452ea726-6fe0-4bf4-8e1b-5f45efe5e931.webp",
        preview: false
      },
      {
        spotId: spot17.id,
        url: 'https://images.pexels.com/photos/462107/pexels-photo-462107.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-462107.jpeg",
        preview: true
      },
      {
        spotId: spot17.id,
        url: 'https://images.pexels.com/photos/16082415/pexels-photo-16082415/free-photo-of-interior-of-a-rustic-room.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "free-photo-of-interior-of-a-rustic-room.jpeg",
        preview: false
      },
      {
        spotId: spot17.id,
        url: 'https://images.pexels.com/photos/14175921/pexels-photo-14175921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        key: "pexels-photo-14175921.jpeg",
        preview: false
      },
      {
        spotId: spot17.id,
        url: 'https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-279857.jpeg",
        preview: false
      },
      {
        spotId: spot17.id,
        url: 'https://images.pexels.com/photos/5561787/pexels-photo-5561787.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-5561787.jpeg",
        preview: false
      },
      {
        spotId: spot18.id,
        url: 'https://images.pexels.com/photos/9211814/pexels-photo-9211814.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-9211814.jpeg",
        preview: true
      },
      {
        spotId: spot18.id,
        url: 'https://www.pexels.com/photo/interior-of-stylish-bathroom-in-cottage-6032425/',
        key: "pexels-photo-6032425.jpeg",
        preview: false
      },
      {
        spotId: spot18.id,
        url: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/09/23172734-ezgif-5-25d1cacaa57a_cover_1200x800.jpg',
        key: "23172734-ezgif-5-25d1cacaa57a_cover_1200x800.jpg",
        preview: false
      },
      {
        spotId: spot18.id,
        url: 'https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-5849392.webp",
        preview: false
      },
      {
        spotId: spot18.id,
        url: 'https://images.pexels.com/photos/2062433/pexels-photo-2062433.jpeg?auto=compress&cs=tinysrgb&w=1200',
        key: "pexels-photo-2062433.webp",
        preview: false
      },
      {
        spotId: spot19.id,
        url: 'https://a0.muscache.com/im/pictures/b4b8bf70-3e3e-4547-94db-f3a03408dffe.jpg?im_w=960',
        key: "b4b8bf70-3e3e-4547-94db-f3a03408dffe.webp",
        preview: true
      },
      {
        spotId: spot19.id,
        url: 'https://a0.muscache.com/im/pictures/df2b191a-d913-4ce5-bb3d-7565f05e6acd.jpg?im_w=1200',
        key: "df2b191a-d913-4ce5-bb3d-7565f05e6acd.webp",
        preview: false
      },
      {
        spotId: spot19.id,
        url: 'https://a0.muscache.com/im/pictures/2bf4e771-5cce-47f3-955c-91df7cdfe373.jpg?im_w=1200',
        key: "2bf4e771-5cce-47f3-955c-91df7cdfe373.webp",
        preview: false
      },
      {
        spotId: spot19.id,
        url: 'https://a0.muscache.com/im/pictures/ee3145ec-8f42-4516-b05f-3863b97da4c4.jpg?im_w=1200',
        key: "ee3145ec-8f42-4516-b05f-3863b97da4c4.webp",
        preview: false
      },
      {
        spotId: spot18.id,
        url: 'https://a0.muscache.com/im/pictures/9c9dee42-5146-41b8-9b4e-3b88d2e53a63.jpg?im_w=1200',
        key: "9c9dee42-5146-41b8-9b4e-3b88d2e53a63.webp",
        preview: false
      },
      {
        spotId: spot20.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-650261020715906740/original/4a79f822-9148-48dd-9423-1ea8a5f3a0ea.jpeg?im_w=960',
        key: "4a79f822-9148-48dd-9423-1ea8a5f3a0ea.webp",
        preview: true
      },
      {
        spotId: spot20.id,
        url: 'https://a0.muscache.com/im/pictures/8fe073aa-5d54-4d1a-9dc5-4ee02477b29a.jpg?im_w=1200',
        key: "8fe073aa-5d54-4d1a-9dc5-4ee02477b29a.webp",
        preview: false
      },
      {
        spotId: spot20.id,
        url: 'https://a0.muscache.com/im/pictures/59c7abfa-a446-49a7-80c1-962408db2469.jpg?im_w=1200',
        key: "59c7abfa-a446-49a7-80c1-962408db2469.webp",
        preview: false
      },
      {
        spotId: spot20.id,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-650261020715906740/original/ee0da1a5-8fbf-4508-8040-d81a14904da9.jpeg?im_w=1200',
        key: "ee0da1a5-8fbf-4508-8040-d81a14904da9.webp",
        preview: false
      },
      {
        spotId: spot20.id,
        url: 'https://a0.muscache.com/im/pictures/ce810ed1-366a-4237-8b3b-c369bc173836.jpg?im_w=1200',
        key: "ce810ed1-366a-4237-8b3b-c369bc173836.webp",
        preview: false
      },
      {
        spotId: spot21.id,
        url: 'https://a0.muscache.com/im/pictures/49732403/06cb9f75_original.jpg?im_w=1200',
        key: "06cb9f75_original.webp",
        preview: true
      },
      {
        spotId: spot21.id,
        url: 'https://a0.muscache.com/im/pictures/24916643/9b74bf9b_original.jpg?im_w=1200',
        key: "9b74bf9b_original.webp",
        preview: false
      },
      {
        spotId: spot21.id,
        url: 'https://a0.muscache.com/im/pictures/24916605/bd3151aa_original.jpg?im_w=720',
        key: "bd3151aa_original.webp",
        preview: false
      },
      {
        spotId: spot21.id,
        url: 'https://a0.muscache.com/im/pictures/a24cdd11-174c-4cd1-8559-fd1dbaae2bd6.jpg?im_w=1200',
        key: "a24cdd11-174c-4cd1-8559-fd1dbaae2bd6.webp",
        preview: false
      },
      {
        spotId: spot21.id,
        url: 'https://a0.muscache.com/im/pictures/bd26c971-a149-41d7-9a51-53962cb89d52.jpg?im_w=720',
        key: "bd26c971-a149-41d7-9a51-53962cb89d52.webp",
        preview: false
      },
      {
        spotId: spot22.id,
        url: 'https://a0.muscache.com/im/pictures/df624229-4009-4649-bb50-dba4005ec416.jpg?im_w=1200',
        key: "df624229-4009-4649-bb50-dba4005ec416.webp",
        preview: true
      },
      {
        spotId: spot22.id,
        url: 'https://a0.muscache.com/im/pictures/6f835f66-5288-4a2c-999c-af5b3750c13c.jpg?im_w=1200',
        key: "6f835f66-5288-4a2c-999c-af5b3750c13c.webp",
        preview: false
      },
      {
        spotId: spot22.id,
        url: 'https://a0.muscache.com/im/pictures/7e6bbc69-eae7-4721-aa84-923d3a27c6e3.jpg?im_w=1200',
        key: "7e6bbc69-eae7-4721-aa84-923d3a27c6e3.webp",
        preview: false
      },
      {
        spotId: spot22.id,
        url: 'https://a0.muscache.com/im/pictures/a80e81d6-775e-4622-a368-2bc77062cb57.jpg?im_w=1200',
        key: "a80e81d6-775e-4622-a368-2bc77062cb57.webp",
        preview: false
      },
      {
        spotId: spot22.id,
        url: 'https://a0.muscache.com/im/pictures/897b59e5-84d4-4037-98da-d871c47e468a.jpg?im_w=960',
        key: "897b59e5-84d4-4037-98da-d871c47e468a.webp",
        preview: false
      },
      {
        spotId: spot23.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/09d1a1fe-0b8e-4598-8d04-2e7ebe06ce2e.png?im_w=1200',
        key: "09d1a1fe-0b8e-4598-8d04-2e7ebe06ce2e.webp",
        preview: true
      },
      {
        spotId: spot23.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/aeb22dc1-2026-40cc-a086-df9dffa34fa6.png?im_w=720',
        key: "aeb22dc1-2026-40cc-a086-df9dffa34fa6.webp",
        preview: false
      },
      {
        spotId: spot23.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/941ef3a6-5c68-4153-940b-6a5745e47153.png?im_w=1200',
        key: "941ef3a6-5c68-4153-940b-6a5745e47153.webp",
        preview: false
      },
      {
        spotId: spot23.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/908ca891-7ce8-4c49-ac3e-577ba0c1502c.png?im_w=720',
        key: "908ca891-7ce8-4c49-ac3e-577ba0c1502c.webp",
        preview: false
      },
      {
        spotId: spot23.id,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/20305d73-ba32-4926-ade6-1fb466782235.png?im_w=1200',
        key: "20305d73-ba32-4926-ade6-1fb466782235.webp",
        preview: false
      },
      {
        spotId: spot24.id,
        url: 'https://a0.muscache.com/im/pictures/20368c83-750c-46c0-be55-fba78c10b81d.jpg?im_w=960',
        key: "20368c83-750c-46c0-be55-fba78c10b81d.webp",
        preview: true
      },
      {
        spotId: spot24.id,
        url: 'https://a0.muscache.com/im/pictures/0c2df643-781b-410d-a4ec-3009d32e4b1b.jpg?im_w=1200',
        key: "0c2df643-781b-410d-a4ec-3009d32e4b1b.webp",
        preview: false
      },
      {
        spotId: spot24.id,
        url: 'https://a0.muscache.com/im/pictures/27fc9f60-51d6-4118-8ce9-d9460d724474.jpg?im_w=1200',
        key: "27fc9f60-51d6-4118-8ce9-d9460d724474.webp",
        preview: false
      },
      {
        spotId: spot24.id,
        url: 'https://a0.muscache.com/im/pictures/b6659325-7b1e-40fd-b807-92647f248c09.jpg?im_w=720',
        key: "b6659325-7b1e-40fd-b807-92647f248c09.webp",
        preview: false
      },
      {
        spotId: spot24.id,
        url: 'https://a0.muscache.com/im/pictures/ec8e63e3-4823-4070-8a41-e1e55a3c8bfe.jpg?im_w=720',
        key: "ec8e63e3-4823-4070-8a41-e1e55a3c8bfe.webp",
        preview: false
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
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/14043487/pexels-photo-14043487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/17177651/pexels-photo-17177651/free-photo-of-silhouette-of-windows-frame.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1170070/pexels-photo-1170070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6957089/pexels-photo-6957089.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6957097/pexels-photo-6957097.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/9582414/pexels-photo-9582414.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/17386428/pexels-photo-17386428/free-photo-of-minimalist-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/145847/pexels-photo-145847.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://media.istockphoto.com/id/910827792/photo/3d-rendering-dark-palace.jpg?b=1&s=612x612&w=0&k=20&c=UbVe2AjYaL3UGD296RpoHKCYv3d-Rny1o9mgDFGm9Zs=',
        'https://media.istockphoto.com/id/1480594709/photo/royal-bathroom-with-a-gothic-window-in-a-castle-on-the-sea.jpg?b=1&s=612x612&w=0&k=20&c=7K75Z_A0cmKfjt8y7f8VOYz9qEJGPgQ5pKY_-xvIcdw=',
        'https://media.istockphoto.com/id/1363830876/photo/fantasy-medieval-temple-in-the-castle-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=GMmLIdSdpBOIdwBMUcbMVroGE2OPjickNM0uQVoQcX0=',
        'https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/15996636/pexels-photo-15996636/free-photo-of-art-building-tunnel-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://media.istockphoto.com/id/172236366/photo/stone-staircase-and-courtyard.jpg?b=1&s=612x612&w=0&k=20&c=T14JoVRd1TUxRo8FFUAUH0lhOi8DNXtAFUdSy0erxTc=',
        'https://media.istockphoto.com/id/607477044/photo/gothic-cathedral-interior-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=wREVjBA1bzh3GQkoOVqoE4jf0WvHL1nIcFjkc9CgRrc=',
        'https://media.istockphoto.com/id/476433490/photo/columned-arched-gothic-room.jpg?b=1&s=612x612&w=0&k=20&c=OAyGpl4HiSV2yvpfOuOuL8OKcaTeTNiubgkafjLUYk0=',
        'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/17345918/pexels-photo-17345918/free-photo-of-barcelona-pavilion-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6438744/pexels-photo-6438744.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2434255/pexels-photo-2434255.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/5784432/pexels-photo-5784432.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/9220877/pexels-photo-9220877.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/12534075/pexels-photo-12534075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7174404/pexels-photo-7174404.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6957087/pexels-photo-6957087.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6958150/pexels-photo-6958150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://media.istockphoto.com/id/1288807843/photo/medieval-bedroom-with-a-large-bed.jpg?b=1&s=612x612&w=0&k=20&c=J4LGWE9VXnalnxo-oLWWuBqZT1cN8JUDU2y-_5SIR0k=',
        'https://media.istockphoto.com/id/182913408/photo/luxury-bedroom.jpg?b=1&s=612x612&w=0&k=20&c=Tx4RSxrdythLPZe7zuTkCMW08ivLDykM858qkftXFBY=',
        'https://images.pexels.com/photos/2938918/pexels-photo-2938918.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/678047/pexels-photo-678047.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1233281/pexels-photo-1233281.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/494057/pexels-photo-494057.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1154498/pexels-photo-1154498.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1038256/pexels-photo-1038256.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4183537/pexels-photo-4183537.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7764341/pexels-photo-7764341.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/12404352/pexels-photo-12404352.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/10933045/pexels-photo-10933045.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6034021/pexels-photo-6034021.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7114136/pexels-photo-7114136.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7118800/pexels-photo-7118800.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/15784940/pexels-photo-15784940/free-photo-of-sea-view-from-window.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/9826968/pexels-photo-9826968.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/14175921/pexels-photo-14175921.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7635919/pexels-photo-7635919.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8112856/pexels-photo-8112856.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/516930/pexels-photo-516930.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/5439495/pexels-photo-5439495.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7512047/pexels-photo-7512047.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6283961/pexels-photo-6283961.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7061415/pexels-photo-7061415.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/1d9a6c99-3971-4246-a51f-1cde98d03178.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/b48678e1-ac17-4d9f-97ef-966b890782b2.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/989eacf2-e53e-4b63-aec7-73347066c41c.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/a8d7fd19-d21d-4cef-9c95-3194b621a3d4.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/68491e8d-d6bc-49e8-9ade-a843e2f4a93a.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/ec34cde4-1a85-455e-b62c-b40bba243af3.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/b0bd891a-4f97-4a69-a895-37b3a58c2b8d.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/225be1be-7ab4-4c79-9baf-7b1dca869734.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51087072/original/452ea726-6fe0-4bf4-8e1b-5f45efe5e931.jpeg?im_w=720',
        'https://images.pexels.com/photos/462107/pexels-photo-462107.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/16082415/pexels-photo-16082415/free-photo-of-interior-of-a-rustic-room.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/14175921/pexels-photo-14175921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/5561787/pexels-photo-5561787.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/9211814/pexels-photo-9211814.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://www.pexels.com/photo/interior-of-stylish-bathroom-in-cottage-6032425/',
        'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/09/23172734-ezgif-5-25d1cacaa57a_cover_1200x800.jpg',
        'https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2062433/pexels-photo-2062433.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://a0.muscache.com/im/pictures/b4b8bf70-3e3e-4547-94db-f3a03408dffe.jpg?im_w=960',
        'https://a0.muscache.com/im/pictures/df2b191a-d913-4ce5-bb3d-7565f05e6acd.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/2bf4e771-5cce-47f3-955c-91df7cdfe373.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/ee3145ec-8f42-4516-b05f-3863b97da4c4.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/9c9dee42-5146-41b8-9b4e-3b88d2e53a63.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-650261020715906740/original/4a79f822-9148-48dd-9423-1ea8a5f3a0ea.jpeg?im_w=960',
        'https://a0.muscache.com/im/pictures/8fe073aa-5d54-4d1a-9dc5-4ee02477b29a.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/59c7abfa-a446-49a7-80c1-962408db2469.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/miso/Hosting-650261020715906740/original/ee0da1a5-8fbf-4508-8040-d81a14904da9.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/ce810ed1-366a-4237-8b3b-c369bc173836.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/49732403/06cb9f75_original.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/24916643/9b74bf9b_original.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/24916605/bd3151aa_original.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/a24cdd11-174c-4cd1-8559-fd1dbaae2bd6.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/bd26c971-a149-41d7-9a51-53962cb89d52.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/df624229-4009-4649-bb50-dba4005ec416.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/6f835f66-5288-4a2c-999c-af5b3750c13c.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/7e6bbc69-eae7-4721-aa84-923d3a27c6e3.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/a80e81d6-775e-4622-a368-2bc77062cb57.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/897b59e5-84d4-4037-98da-d871c47e468a.jpg?im_w=960',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/09d1a1fe-0b8e-4598-8d04-2e7ebe06ce2e.png?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/aeb22dc1-2026-40cc-a086-df9dffa34fa6.png?im_w=720',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/941ef3a6-5c68-4153-940b-6a5745e47153.png?im_w=1200',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/908ca891-7ce8-4c49-ac3e-577ba0c1502c.png?im_w=720',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-842809536743291781/original/20305d73-ba32-4926-ade6-1fb466782235.png?im_w=1200',
        'https://a0.muscache.com/im/pictures/20368c83-750c-46c0-be55-fba78c10b81d.jpg?im_w=960',
        'https://a0.muscache.com/im/pictures/0c2df643-781b-410d-a4ec-3009d32e4b1b.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/27fc9f60-51d6-4118-8ce9-d9460d724474.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/b6659325-7b1e-40fd-b807-92647f248c09.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/ec8e63e3-4823-4070-8a41-e1e55a3c8bfe.jpg?im_w=720'
      ] }
    }, {});
  }
};
