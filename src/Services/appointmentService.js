const appRepository = require('./../Repository/appointment-repository');
const docPatrepository = require('./../Repository/docPat-repository');

  const createNewUser = async(data) =>{
    const reqBody = {
      name:data.name,
      phoneNumber:data.phoneNumber,
      role: "patient",
      adhar: data.adhar
    } 
    const getpatientDetails = await docPatrepository.getPatientData(reqBody);
    if(getpatientDetails.length > 0){
      data.userId = getpatientDetails[0]._id;
      const addNewUser = await appRepository.createNewUser(data);
      return addNewUser;
    } else {
       const newpatdetails = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        role: "patient",
        age: data.age,
        adhar: data.adhar,
        address: data.address
       }
      const addpatdetails = await docPatrepository.addUserAdditionalData(newpatdetails);
      data.userId = addpatdetails._id;
      const addNewUser = await appRepository.createNewUser(data);
      return addNewUser;
    } 
  }

  const fetchUserById = async(data) => {
    const getUserById = await appRepository.fetchUserById(data);
    console.log("enter");
    if (!getUserById) {
      return "No Data Found";
    }
   return getUserById;
  }

  const fetchAllData = async() => {
    const getAllUser = await appRepository.fetchAllData();
    if (!getAllUser || getAllUser.length === 0) {
      return "No Data Found";
    }
   return getAllUser;
  }

  const updateById = async(data) =>{
   const updateData = await appRepository.updateDataById(data);
   return updateData;
  }

  const deleteById = async(data)=>{
   const deleteData = await appRepository.deleteById(data);
   if(deleteData.deletedCount > 0){
    return "Data Deleted Successfully";
   }
   return "No Data Found To Be Deleted";
  }
  module.exports = {
    createNewUser,
    fetchUserById,
    fetchAllData,
    updateById,
    deleteById
  }