import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { parse } from "path";
import Blog from "../../../../models/blogs";

export async function GET(req) {
  try {
    //connect to db
    await connectDB();
    // get blog id
    console.log("request object:", req);
    const parsedUrl = parse(req.url);
    const blogId= parsedUrl.name
    const blog = await Blog.findById(blogId)
    return NextResponse.json({ blog }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "not logged" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const parsedUrl = parse(req.url);
    const blogId = parsedUrl.name;
    console.log(blogId)
    const blog = await Blog.findById(blogId);
    if (!blog) {
      console.log('blog doesnt exist');
      return NextResponse.json(
        { message: "problem finding blog" },
        { status: 404 }
      );
    }
    try {
      await Blog.deleteOne(blog)
      console.log(`${blog} deleted`);
    } catch (err) {
      console.log("err happened", err);
    }


    return NextResponse.json(
      { message: "user deleted successfully" },
      { status: 201 }
    );
  } 
  catch (err) {
    return NextResponse.json(
      { message: "something is wrong", err },
      { status: 500 }
    );
  }
}