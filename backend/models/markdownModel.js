const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [70, "Name cannot exceed 50 characters"],
      minlength: [3, "Name must exceed 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      unique: [true, "Name exist already"],
      trim: true,
      minlength: [5, "Description must exceed 5 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    runValidators: true,
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("item", ItemSchema);
module.exports = ItemModel;
