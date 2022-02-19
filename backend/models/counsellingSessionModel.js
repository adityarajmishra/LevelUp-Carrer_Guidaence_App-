import mongoose from "mongoose";

const sessionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sessionItems: [
      {
        name: { type: String, required: true },
        availability: { type: String, required: true },
        image: { type: String, required: true },
        workingHrs: {
          type: String,
          required: true,
        },
        googleMeet: {
          type: String,
          required: true,
        },

        counsellor: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Counsellor",
        },
      },
    ],
    sessionDetails: {
      note: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
      forWhom: { type: String, required: true },
    },
    isConfirm: {
      type: Boolean,

      default: false,
    },
    sessionDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Session = mongoose.model("CounsellingSession", sessionSchema);

export default Session;
