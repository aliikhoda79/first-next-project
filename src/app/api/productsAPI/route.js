import Product from "../../../models/Products";  
import connectDB from "../../../utils/database";  
import { NextResponse } from "next/server";  

export async function POST(req) {  
  try {  
    // 1. Connect to DB  
    await connectDB();  

    // 2. Fetch data from req  
    const data = await req.json();

    const {  
      productName,  
      category,  
      description,  
      productColor,  
      productBrand,  
      productImages,  
      productSize,  
      price  
    } = data;  
    //invalidate empty fields
    // if(!productName||  
    //   !category||  
    //   !description||  
    //   !productColor||  
    //   !productBrand||  
    //   !productImages||  
    //   !productSize||  
    //   !price ){
    //     return NextResponse.json({error:"empty fields"})
    //   }
    
    // 3. Create a new product  
    const newProduct = await Product.create({  
      productName,  
      category,  
      description,  
      productColor,  
      productBrand,  
      productSize,  
      price,  
      productImages  
    });  

    return NextResponse.json(  
      {  
        message: "Product created"  
      },  
      { status: 201 }  
    );  
  } catch (err) {  
    console.error(err); // خطا را در کنسول چاپ کنید  
    return NextResponse.json(  
      { error: "Something went wrong with the server" },  
      { status: 500 }  
    );  
  }  
}

export async function GET(req) {
  try {
    await connectDB();

    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: "problem with fetching data"
      },
      { status: 500 }
    );
  }
}