import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  secret: String
});
export const createUser = mongoose.model("User", userSchema);
