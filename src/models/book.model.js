// import mongoose
import mongoose from "mongoose";

// create new book schema
const BookSchema = new mongoose.Schema(
  // define attributes
  {
    title: {
      type: String,
    },
    editorial: {
      type: String,
    },
    author: {
      type: String,
    },
    genre: {
      type: String,
    },
    author_country: {
      type: String,
    },
    no_pages: {
      type: Number,
    },
    edition_year: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export the model
export default mongoose.model("books", BookSchema);
