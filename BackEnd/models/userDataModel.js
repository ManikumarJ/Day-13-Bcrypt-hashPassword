import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    UserName: { type: String, required: true },
    email: { type: String, required: true, unique : true},
    Password: { type: String, required: true }
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("UserData", userSchema);

export default userDataModel;