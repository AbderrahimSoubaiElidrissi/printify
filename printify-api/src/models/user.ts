import { Document, Schema, Model, model, Error } from "mongoose";
import bcrypt from "bcryptjs";
const JWT = require("jsonwebtoken");

export type UserModel = Document & {
  email: string;
  password: string;
  tokens: Object;
  role: string;
  firstName: string;
  lastName: string;
  occupation: string;
  phoneNumber: Object; // { dialCode: string , number : string }
  identityCardNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    tokens: Object,
    role: { type: String, default: "USER" },
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    occupation: String,
    phoneNumber: Object, // { dialCode: string , number : string }
    identityCardNumber: String,
    address: String,
    zipCode: String,
    city: String,
    country: String
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (doc: any, ret: any, opt: any) => {
    delete ret["password"];
    return ret;
  }
});

userSchema.pre("save", function (next) {
  if (this.isNew) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
  }
  next();
});

userSchema.methods.validPassword = function (inputedPassword: string) {
  return bcrypt.compareSync(inputedPassword, this.password);
};

userSchema.methods.getJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.ACCESS_TOKEN_SIGNATURE_KEY);
};

userSchema.methods.hashPassword = function () {
  this.password = bcrypt.hashSync(this.password, 8);
};



const User = model("User", userSchema);
export default User;
