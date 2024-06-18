
const userRepository = require('../Repository/docPat-repository');
const addUserAdditionalData = async (userData) => {
      const user = await userRepository.addUserAdditionalData(userData);
      return user;
  };

  const updateUserData = async(data) => {
    const updateUser = await userRepository.updateUserAdditionalData(data)
    if(!updateUser.modifiedCount >= 0){
      return "No Data Updated";
    }
    return "User Data Updated";
  }

  const fetchUserData = async(data) => {
    const fetchData = await userRepository.fetchUserData(data);
    if(!fetchData){
      return "No Data Found";
    }
    return fetchData;
  }

  const getRoleBasedData = async(data) => {
    const fetchData = await userRepository.getRoleBasedData(data);
    if(!fetchData){
      return "No Data Found";
    }
    return fetchData;
}
  module.exports = {
    addUserAdditionalData,
    updateUserData,
    fetchUserData,
    getRoleBasedData
  }