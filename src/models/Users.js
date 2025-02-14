import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "USER"
  },
  phoneNumber: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable:true
  }
});

const User = models.Users || model("Users", userSchema);

export default User;
