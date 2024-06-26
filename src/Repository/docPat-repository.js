const docPatModel = require('../db/models/DocPat-model');
const mongoose = require('mongoose');

const addUserAdditionalData = async(data) => {
    return await docPatModel.create(data);
  };

const updateUserAdditionalData = async(data) => {
      return await docPatModel.updateOne({ _id: data._id, role: data.role },{  $set: data });
};
const fetchUserData = async(data) => {
  const respData = await docPatModel.find({_id: data._id, role: data.role});
  return respData;
};

const getRoleBasedData = async(data) =>{
  const respData = await docPatModel.find({role: data.role});
  return respData;
}

const deleteRoleBasedData =  async(data) =>{
  const deleteData = await docPatModel.deleteOne({_id: new mongoose.Types.ObjectId(data._id) });
  return deleteData; 
}

const getDataById = async(data) => {
  return docPatModel.findOne({_id: data._id});
}

const getPatientData = async(data) => {
  return docPatModel.find(data);
}
module.exports = {
  addUserAdditionalData,
  updateUserAdditionalData,
  fetchUserData,
  getRoleBasedData,
  deleteRoleBasedData,
  getDataById,
  getPatientData,
}