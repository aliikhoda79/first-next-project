import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import User from "../../../../models/Users";

export async function POST(req) {
  try {
    await connectDB();
    const { searchValue } = await req.json();
    if (!searchValue) {
      return NextResponse.json({ message: "put some info" }, { status: 400 });
    }
    const searchRegex = new RegExp(searchValue, "i");
    const searchedUsers = await User.find({
      $or: [
        { name: { $regex: searchRegex }},
        { familyName: { $regex: searchRegex }},
        { phoneNumber: { $regex: searchRegex }},
        { email: { $regex: searchRegex }}
      ]
    });
    if (searchedUsers.length!==0) 
      return NextResponse.json(
      { message: "user found", searchedUsers },
      { status: 200 }
    );
    else return NextResponse.json(
      { message: "user not found"},
      { status: 404 })
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
