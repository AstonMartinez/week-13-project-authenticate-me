#!/usr/bin/env node

// import environment variables
require('dotenv').config();

const { port } = require('../config');

const app = require('../app');
const db = require('../db/models');

// check the database connection before starting the app
db.sequelize
    .authenticate()
    .then(() => {


        // start listening for connections
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    })
    .catch((err) => {

        console.error(err)
    });
