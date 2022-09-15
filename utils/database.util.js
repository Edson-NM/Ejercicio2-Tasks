const { Sequelize, DataTypes } = require('sequelize');

// Stablish db connection
const db = new Sequelize({
  dialect: 'postgres',
  host: 'ec2-34-200-205-45.compute-1.amazonaws.com',
  username: 'jyehkbixbbofxp',
  password: '8ee4818aaadc72d1164fbb8c4ebcef2a3209a6286232c512b62b62778a743793',
  port: 5432,
  database: 'dafuff2m896708',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = { db, DataTypes };
