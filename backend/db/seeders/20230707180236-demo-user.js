/** @type {import('sequelize-cli').Migration} */
'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users'
   await queryInterface.bulkInsert(options, [
    {
      firstName: 'Aston',
      lastName: 'Martinez',
      email: 'aston@demo.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      firstName: 'Paul',
      lastName: 'Martinez',
      email: 'paul@demo.io',
      username: 'xPaulxMartinezx',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      firstName: 'Aiden',
      lastName: 'Martinez',
      email: 'user1@user.io',
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync('password2')
    },
    {
      firstName: 'Audrey',
      lastName: 'Martinez',
      email: 'user2@user.io',
      username: 'FakeUser2',
      hashedPassword: bcrypt.hashSync('password3')
    },
    {
      firstName: 'Allison',
      lastName: 'Martinez',
      email: 'user3@user.io',
      username: 'FakeUser3',
      hashedPassword: bcrypt.hashSync('password4')
    },
    {
      firstName: 'Authy',
      lastName: 'Demouser',
      email: 'demotesting1@demotesting.io',
      username: 'authDemoUser1',
      hashedPassword: bcrypt.hashSync('password')
    }
   ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'xPaulxMartinezx', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'authDemoUser'] }
    }, {});
  }
};
