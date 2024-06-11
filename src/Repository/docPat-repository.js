const docPatModel = require('../db/models/DocPat-model');
const mongoose = require('mongoose');

const addUserAdditionalData = async(data) => {
    return await docPatModel.create(data);
  };

const updateUserAdditionalData = async(data) => {
      return await docPatModel.updateOne({ _id: data._id, role: data.role },{  $set: data });
};
const fetchUserData = async(data) => {
  const respData = await docPatModel.findOne({_id: data._id, role: data.role});
  return respData;
};

const getRoleBasedData = async(data) =>{
  const respData = await docPatModel.findOne({role: data.role});
  return respData;
}
module.exports = {
  addUserAdditionalData,
  updateUserAdditionalData,
  fetchUserData,
  getRoleBasedData,
}