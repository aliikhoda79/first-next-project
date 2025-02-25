import Blog from "../../../models/blogs";
import connectDB from "../../../utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    //1.connect to database
    await connectDB();
    //2. fetch data from request
    const data = await req.json();
    const { blogIntro, blogTitle, blogBody, blogConclusion, blogImages } = data;
    //3. check necessary fields
    if (!blogIntro || !blogTitle) {
      return NextResponse.json(
        { error: "empty fields,title and body are necessary" },
        { status: 422 }
      );
    }
    // add data to the collection
    const newBlog = await Blog.create({
      blogTitle,
      blogIntro,
      blogImages,
      blogBody,
      blogConclusion
    });
    return NextResponse.json(
      {
        message: "new blog added"
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "something is wrong with server" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await connectDB();

    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
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