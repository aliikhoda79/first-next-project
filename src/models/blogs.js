import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  blogTitle: {
    type: String,
    required: true
  },
  blogImages: {
    type: Array
    
  },
  blogIntro: {
    type: String,
    required: true
  },
  blogBody: {
    type: String,
    required: true
  },
  
  blogConclusion: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});
const Blog = models.Blogs || model("Blogs", blogSchema);

export default Blog;
