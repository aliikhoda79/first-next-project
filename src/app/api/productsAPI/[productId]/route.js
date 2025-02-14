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
      { message: "user deleted successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "something is wrong", err },
      { status: 500 }
    );
  }
}
