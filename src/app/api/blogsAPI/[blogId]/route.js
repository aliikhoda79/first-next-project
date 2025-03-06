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
    const blogId = parsedUrl.name;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      console.log("product doesnt exist");
      return NextResponse.json(
        { message: "problem finding product" },
        { status: 404 }
      );
    }

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
    console.log(blogId);
    const blog = await Blog.findById(blogId);
    if (!blog) {
      console.log("blog doesnt exist");
      return NextResponse.json(
        { message: "problem finding blog" },
        { status: 404 }
      );
    }
    try {
      await Blog.deleteOne(blog);
      return NextResponse.json({ message: "blog deleted" }, { status: 201 });
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
export async function PATCH(req) {
  try {
    await connectDB();
    const {
      blogId,
      blogTitle,
      blogImages,
      blogIntro,
      blogBody,
      blogConclusion
    } = await req.json();
    const blog = await Blog.findById(blogId);

    if (!blog)
      return NextResponse.json({ message: "no such user" }, { status: 404 });

    blog.blogTitle = blogTitle;
    blog.blogImages = blogImages;
    blog.blogIntro = blogIntro;
    blog.blogBody = blogBody;
    blog.blogConclusion = blogConclusion;
    try {
      await blog.save();
      console.log("blog edited");
    } catch (err) {
      console.log("err happened", err);
    }
    return NextResponse.json(
      { message: "blog edit was successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something wrong with server", error },
      { status: 500 }
    );
  }
}
