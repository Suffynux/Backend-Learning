import mongoose from "mongoose";
import { Category } from "./category.model";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: string,
    },
    name: {
      required: true,
      type: string,
    },
    productImage : {
        type : string,

    },
    price : {
        type : Number,
        defaul : 0,
    },
    stock : {
        type : Number,
        default : 0,
    },
    category : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "Category"
    }
    
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
