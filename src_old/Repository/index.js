const userModel = require('../db/models/user-model');
const mongoose = require('mongoose');
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
  ];
  
  const findUserByUsername = async(email, password) => {
    const respData = await userModel.findOne({email: email, password: password});
    return respData;
  };

  const addUserByUsername = async(data) => {
    return await userModel.create(data);
  };
  
  module.exports = { findUserByUsername, addUserByUsername };