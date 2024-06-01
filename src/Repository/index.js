const userModel = require('../db/models/user-model');
const mongoose = require('mongoose');
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
  ];
  
  const findUserByUsername = async(email) => {
    const respData = await userModel.find({email: email});
    console.log(respData);
    return respData;
  };

  const addUserByUsername = async(data) => {
    const respData = await userModel.create(data);
    console.log(respData);
    return respData;
  };
  
  module.exports = { findUserByUsername, addUserByUsername };