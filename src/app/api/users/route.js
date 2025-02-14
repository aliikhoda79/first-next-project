import { hashPassword } from "../../../utils/auth";
import connectDB from "../../../utils/database";
import User from "../../../models/Users";
import { NextResponse } from "next/server";
//get users
export async function GET(req) {
  try {
    await connectDB();

    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
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
//create user
export async function POST(req) {
  try {
    //1.connect database
    await connectDB();

    //2.fetch recieved data from frontend(request)
    const { name, familyName, phoneNumber, pass, email } = await req.json();
    // 3.validate data: no empty values
    if (!name || !familyName || !phoneNumber || !pass || !email) {
      return NextResponse.json({ error: "empty fields" }, { status: 422 });
    }
    //3.validate data: check for not temporary data
    const existingEmail = await User.findOne({ email });
    const existingPhone = await User.findOne({ phoneNumber });
    if (existingEmail) {
      return NextResponse.json({ error: "such email exists" }, { status: 422 });
    }
    if (existingPhone) {
      return NextResponse.json(
        { error: "user with such phone number exists" },
        { status: 422 }
      );
    }
    //hash recieving password
    const hashedPass = await hashPassword(pass);
    //creating user
    const newUser = User.create({
      name,
      familyName,
      phoneNumber,
      pass: hashedPass,
      email,
      createdAt:()=> Date.now()

    });
    return NextResponse.json({ message: "new user added" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "something wrong with server" },
      { status: 500 }
    );
  }
}
