const docPatModel = require('../db/models/DocPat-model');
const mongoose = require('mongoose');

const addUserAdditionalData = async(data) => {
    return await docPatModel.create(data);
  };

const updateUserAdditionalData = async(data) => {
      return await docPatModel.updateOne({ Adhar: data.Adhar },{  $set: data });
};
module.exports = {
  addUserAdditionalData,
  updateUserAdditionalData,
}