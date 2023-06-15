// import book model
import UserModel from "../models/user.model.js";

export const getAllUsers = async () => {
  try {
    const responseGet = await UserModel.find({});
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneUser = async (id) => {
  try {
    const responseGet = await UserModel.findById(id);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewUser = async (book) => {
  try {
    const responseCreate = await UserModel.create(book);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneUser = async (id, userUpdated) => {
  try {
    const responseUpdate = await UserModel.findByIdAndUpdate(id, userUpdated);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneUser = async (id) => {
  try {
    const responseDelete = await UserModel.findByIdAndRemove(id);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};
