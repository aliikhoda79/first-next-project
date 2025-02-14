import connectDB from "../../../../utils/database";
import User from "../../../../models/Users";
import { parse } from "path";
import { NextResponse } from "next/server";
import { hashPassword } from "../../../../utils/auth";

export async function GET(req) {
  try {
    await connectDB();

    // لاگ گرفتن از درخواست
    const parsedUrl = parse(req.url);
    const userId = parsedUrl.name;
    const user = await User.findById(userId);
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("Server error: ", err);
    return new Response("Server error", { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const data = await req.json();
    const { userId, pass, name, familyName, email, phoneNumber } = data;

    if (!pass || !name) {
      return NextResponse.json({ message: "invalid data" }, { status: 422 });
    }
    const user = await User.findById(userId);
    if (user.email !== email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return NextResponse.json(
          { message: "there is such user with this phone/mail" },
          { status: 422 }
        );
      }
      user.email = email;
    }
    if (user.phoneNumber !== phoneNumber) {
      const existingPhone = await User.findOne({ phoneNumber });
      if (existingPhone) {
        return NextResponse.json(
          { message: "there is such user with this phone/mail" },
          { status: 422 }
        );
      }
      user.phoneNumber = phoneNumber;
    }
    if (pass) {
      const hashedPass = await hashPassword(pass);
      console.log("hashpass is", hashedPass);
      user.pass = hashedPass;
    }
    user.name = name;
    user.familyName = familyName;
    console.log("new user", user);
    try {
      await user.save();
      console.log("user edited");
    } catch (err) {
      console.log("err happened", err);
    }

    return NextResponse.json({ message: "dddd" }, { status: 200 });
  } catch (err) {
    console.log("err message is", err);
    return NextResponse.json(
      { error: "something wrong with server" },
      { status: 500 }
    );
  }
  // fetch the sent data for updating user
}

export async function DELETE(req) {
  try {
    await connectDB();
    const parsedUrl = parse(req.url);
    const userId = parsedUrl.name;
    console.log(userId)
    const user = await User.findById(userId);
    if (!user) {
      console.log('user doesnt exist');

      return NextResponse.json(
        { message: "problem finding user" },
        { status: 404 }
      );
    }
    

    console.log(`delete ${user} success`);
    try {
      await User.deleteOne(user)
      console.log("user deleted");
    } catch (err) {
      console.log("err happened", err);
    }


    return NextResponse.json(
      { message: "everyting is fine for now" },
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
