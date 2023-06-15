// import mongoose
import mongoose from "mongoose";

// create new user schema
const UserSchema = new mongoose.Schema(
  // define attributes
  {
    name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    dni: {
      type: String,
    },
    residence: {
      type: String,
    },
    town: {
      type: String,
    },
    province: {
      type: String,
    },
    birthdate: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export the model
export default mongoose.model("users", UserSchema);
