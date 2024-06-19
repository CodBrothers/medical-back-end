
const userRepository = require('../Repository/docPat-repository');
const addUserAdditionalData = async (userData) => {
      const user = await userRepository.addUserAdditionalData(userData);
      return user;
  };

  const updateUserData = async(data) => {
    const updateUser = await userRepository.updateUserAdditionalData(data)
    if(updateUser.modifiedCount > 0){
      return "User Data Updated";
    }
    return "No Data Updated";
  }

  const fetchUserData = async(data) => {
    const fetchData = await userRepository.fetchUserData(data);
    if(fetchData.length > 0){
      return  fetchData;
    }
    return "No Data Found";
  }

  const getRoleBasedData = async(data) => {
    const fetchData = await userRepository.getRoleBasedData(data);
    if(fetchData.length > 0){
      return fetchData;
    }
    return "No Data Found";
}

const deleteRoleBasedData = async(data) => {
const deletedata = await userRepository.deleteRoleBasedData(data);
if(deletedata.deletedCount > 0){
  return "User Data Deleted";
}
  return "No Data deleted";
}

const getDataById = async(data) => {
  const getData = await userRepository.getDataById(data);
  if(!getData){
    return "No Data Found";
  }
  return getData;
}
  module.exports = {
    addUserAdditionalData,
    updateUserData,
    fetchUserData,
    getRoleBasedData,
    deleteRoleBasedData,
    getDataById
  }