import { Schema, model, models } from "mongoose";
const productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  productColor: {
    type: String,
    required: true
  },
  productBrand: {
    type: String,
    required: true
  },
  productSize: {
    type: Array,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  productImages: {
    type: Array,
    required:true
  },
  height: {
    type: String,
  },
  comments: {
    type: String
  },
  material: {
    type: String,
  },
  region: {
    type: String
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});
const Product = models.Products || model("Products", productSchema);

export default Product;
