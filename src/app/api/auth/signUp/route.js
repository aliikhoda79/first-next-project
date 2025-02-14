import User from '../../../../models/Users'
import { hashPassword } from "../../../../utils/auth";
import connectDB from "../../../../utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const { name, familyName, phoneNumber, pass, email } = data;

    //validation for req data
    if (!name || !familyName || !phoneNumber || !pass || !email) {
      return NextResponse.json({ error: "empty fields!!" }, { status: 422 });
    }

    const existingEmail = await User.findOne({ email });
    const existingPhone = await User.findOne({ phoneNumber });
    if (existingEmail) {
      return NextResponse.json(
        { error: "existing such email" },
        { status: 422 }
      );
    }
    if (existingPhone) {
      return NextResponse.json(
        { error: "existing such phone number" },
        { status: 422 }
      );
    }
    const hashedPass = await hashPassword(pass);
    const newUser = await User.create({
      name,
      familyName,
      phoneNumber,
      pass: hashedPass,
      email
    });
    return NextResponse.json(
      {
        message: "new user added",
        user:newUser
      },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "something wrong with server" },
      { status: 500 }
    );
  }
}
