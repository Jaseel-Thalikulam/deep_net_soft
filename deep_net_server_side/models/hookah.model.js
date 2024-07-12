import mongoose from "mongoose";

const hookahFlavorSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const HookahFlavor = mongoose.model("HookahFlavor", hookahFlavorSchema);
