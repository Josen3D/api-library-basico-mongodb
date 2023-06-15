// import mongoose
import mongoose from "mongoose";

// create new user schema
const LoanSchema = new mongoose.Schema(
  // define attributes
  {
    id_book: {
      type: mongoose.Types.ObjectId,
    },
    id_user: {
      type: mongoose.Types.ObjectId,
    },
    loan_date: {
      type: String,
    },
    end_date: {
      type: String,
    },
    return_date: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**
 * implement methods with relationship with ussers and books
 */

// find all data from DB joining loans, users and books
LoanSchema.statics.findAllData = function () {
  // saves the data join between loans, users and books
  const joinData = this.aggregate([
    // loans => users
    {
      $lookup: {
        from: "users", // loans => users
        localField: "id_user", // loans.id_user
        foreignField: "_id", // users._id
        as: "user", // alias
      },
    },
    // loans => books
    {
      $lookup: {
        from: "books", // loans => users
        localField: "id_book", // loans.id_user
        foreignField: "_id", // users._id
        as: "book", // alias
      },
    },
    {
      $unwind: "$user",
      $unwind: "$book",
    },
  ]);
  return joinData;
};

// find One loan from DB joining loan, user and book
LoanSchema.statics.findOneData = function (id) {
  // saves the data join between loans, users and books
  const joinData = this.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    // loans => users
    {
      $lookup: {
        from: "users", // loans => users
        localField: "id_user", // loans.id_user
        foreignField: "_id", // users._id
        as: "user", // alias
      },
    },
    // loans => books
    {
      $lookup: {
        from: "books", // loans => users
        localField: "id_book", // loans.id_user
        foreignField: "_id", // users._id
        as: "book", // alias
      },
    },
    {
      $unwind: "$user",
      $unwind: "$book",
    },
  ]);
  return joinData;
};

// export the model
export default mongoose.model("loans", LoanSchema);
