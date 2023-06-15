// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/book.controller.js";
// import book validators
import {
  validatorCreateBook,
  validatorGetBook,
} from "../validators/book.validator.js";

// create the router
const router = Router();

//create routes
router
  .get("/books", getItems)
  .get("/books/:id", validatorGetBook, getItem)
  .post("/books", validatorCreateBook, createItem)
  .put("/books/:id", validatorGetBook, validatorCreateBook, updateItem)
  .delete("/books/:id", validatorGetBook, deleteItem);

// export the router
export default router;
