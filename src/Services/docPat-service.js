
const userRepository = require('../Repository/docPat-repository');
const addUserAdditionalData = async (userData) => {
      const user = await userRepository.addUserAdditionalData(userData);
      return user;
  };

  const updateUserData = async(data) => {
    const updateUser = await userRepository.updateUserAdditionalData(data)
    if(!updateUser){
      return "No Data Updated";
    }
    return updateUser;
  }

  const fetchUserData = async(data) => {
    const fetchData = await userRepository.fetchUserData(data);
    if(!fetchData){
      return "No Data Found";
    }
    return fetchData;
  }
  module.exports = {
    addUserAdditionalData,
    updateUserData,
    fetchUserData
  }