import mongoose from "mongoose";

const secretSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export const Secret = mongoose.model('Secret', secretSchema);