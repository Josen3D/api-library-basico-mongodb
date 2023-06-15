// import mongoose
import mongoose from "mongoose";

// export connection to mongoose DB
export const dbConnect = () => {
  try {
    const DB_URI = process.env.DB_URI; // defines the mongoDB URI
    // connect to mongoDB
    mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to mongoDB"))
      .catch(() => console.log("Error conecting to mongoDB"));
  } catch (error) {
    console.log("Error connection to mongoDB: ", error);
  }
};
