// import book model
import LoanModel from "../models/loan.model.js";

export const getAllLoans = async () => {
  try {
    const responseGet = await LoanModel.findAllData();
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneLoan = async (id) => {
  try {
    const responseGet = await LoanModel.findOneData(id);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewLoan = async (book) => {
  try {
    const responseCreate = await LoanModel.create(book);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneLoan = async (id, userUpdated) => {
  try {
    const responseUpdate = await LoanModel.findByIdAndUpdate(id, userUpdated);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneLoan = async (id) => {
  try {
    const responseDelete = await LoanModel.findByIdAndRemove(id);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};
