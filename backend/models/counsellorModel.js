import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const counsellorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    googleMeet: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    availability: {
      type: String,
      required: true,
    },
    working: {
      type: String,
      required: true,
    },
    workingHrs: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Counsellor = mongoose.model("Counsellor", counsellorSchema);

export default Counsellor;
