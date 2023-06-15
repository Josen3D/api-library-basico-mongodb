// import book model
import BookModel from "../models/book.model.js";

export const getAllBooks = async () => {
  try {
    const responseGet = await BookModel.find({});
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const getOneBook = async (id) => {
  try {
    const responseGet = await BookModel.findById(id);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewBook = async (book) => {
  try {
    const responseCreate = await BookModel.create(book);
    return responseCreate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const updateOneBook = async (id, bookUpdated) => {
  try {
    const responseUpdate = await BookModel.findByIdAndUpdate(id, bookUpdated);
    return responseUpdate;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const deleteOneBook = async (id) => {
  try {
    const responseDelete = await BookModel.findByIdAndRemove(id);
    return responseDelete;
  } catch (error) {
    console.log("Error service: ", error);
  }
};
