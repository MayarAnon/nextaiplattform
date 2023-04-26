import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  Name: String,
  Rating: {
    Verygood: Number,
    Good: Number,
    Average: Number,
    Bad: Number,
    Terrible: Number,
  },
  ratedUsers: [String],
});

module.exports =
  mongoose.models.Rating || mongoose.model("Rating", RatingSchema);
