import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { parse } from "path";
import Product from "../../../../models/Products";

export async function GET(req) {
  try {
    //connect to db
    await connectDB();
    // get blog id
    const parsedUrl = parse(req.url);
    const productId = parsedUrl.name;
    const product = await Product.findById(productId);
    return NextResponse.json({ product, message: "logged" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "not logged" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const parsedUrl = parse(req.url);
    const productId = parsedUrl.name;
    console.log(productId);
    const product = await Product.findById(productId);
    if (!product) {
      console.log("product doesnt exist");
      return NextResponse.json(
        { message: "problem finding product" },
        { status: 404 }
      );
    }
    try {
      await Product.deleteOne(product);
      console.log(`${product} deleted`);
    } catch (err) {
      console.log("err happened", err);
    }
    return NextResponse.json(
      { message: "item deleted successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "something is wrong", err },
      { status: 500 }
    );
  }
}

export async function PATCH(req){
  try {
    await connectDB()
    const {productName,
      category,
      productId,
      description,
      productColor,
      productBrand,
      productSize,
      price,
      productImages}=await req.json()
      const product=await Product.findById(productId)
      product.productName =productName
      product.category =category
      product.description =description
      product.productColor =productColor
      product.productBrand =productBrand
      product.productSize =productSize
      product.price =price
      product.productImages =productImages
      console.log('updated product',product)
      try {
        await product.save();
        console.log("product edited");
      } catch (err) {
        console.log("err happened", err);
      }
      return NextResponse.json({message:'log from editUser'})
  } catch (error) {
    return NextResponse.json({message:`something wrong with the server :${error}`},{status:500})
  }
}

