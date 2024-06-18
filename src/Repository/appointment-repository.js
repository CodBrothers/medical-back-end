const { updateById } = require('../Services/appointmentService');
const appointModel = require('../db/models/appointment-model');
const mongoose = require('mongoose');

const createNewUser = async(data) =>{
 return appointModel.create(data);
}

const fetchUserById = async(data)=>{
    return appointModel.findOne({_id: data._id}).populate('userId').populate('doctorId');
}

const fetchAllData = async(data)=>{
    return appointModel.find().populate('userId').populate('doctorId');
}

const updateDataById = async(data) => {
    return appointModel.findByIdAndUpdate({_id: data._id}, data, { new:true }).populate('userId').populate('doctorId');
}

const deleteById = async(data)=>{
    return appointModel.deleteOne({_id: data._id});
}
module.exports = {
    createNewUser,
    fetchUserById,
    fetchAllData,
    updateDataById,
    deleteById
}