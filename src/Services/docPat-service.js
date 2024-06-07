
const userRepository = require('../Repository/docPat-repository');
const addUserAdditionalData = async (userData) => {
      const user = await userRepository.addUserAdditionalData(userData);
      return user;
  };

  const updateUserData = async(data) => {
    const updateuser = await userRepository.updateUserAdditionalData(data)
  }
  module.exports = {
    addUserAdditionalData,
    updateUserData,
  }