import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  team: { type: String, required: true },
  themes: { type: String, required: true },
  tools: { type: String, required: true },
  github_link: { type: String, required: true },
  discovery_links: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageUrl1: { type: String, required: false },
  imageUrl2: { type: String, required: false },
  imageUrl3: { type: String, required: false },
});

export default mongoose.model("Project", projectSchema);