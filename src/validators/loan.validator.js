// import check from express validator
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createLoan
export const validatorCreateLoan = [
  check("id_book").exists().notEmpty().isMongoId(),
  check("id_user").exists().notEmpty().isMongoId(),
  check("loan_date").exists().notEmpty().isLength({ min: 8, max: 10 }),
  check("end_date").exists().notEmpty().isLength({ min: 8, max: 10 }),
  check("return_date").exists().notEmpty().isLength({ min: 8, max: 10 }),

  // validates the data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validator for getLoan
export const validatorGetLoan = [
  check("id").exists().notEmpty().isMongoId(),

  // validates the result of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
