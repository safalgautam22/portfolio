import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
});

export const Blogs = mongoose.model("Blogs", blogSchema);
