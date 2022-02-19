import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,

      default: false,
    },
    numSession: {
      type: Number,
      default: 0,
    },
    subscription: {
      type: Boolean,
      // required: true,
      default: false,
    },
    paymentMethod: {
      type: String,
      // required: true
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
    },
    totalPrice: {
      type: Number,
      // required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      // required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
