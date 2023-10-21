// import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  progress: {
    type: Number,
  },
  status: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
});

export const Ticket =
  mongoose?.models?.Ticket || mongoose?.model("Ticket", ticketSchema);
