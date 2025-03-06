//login
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/Users";
import connectDB from "../../../../utils/database";
import { verifyPassword } from "../../../../utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, pass,phoneNumber } = credentials;
        //connecting db
        try {
          await connectDB();
          console.log("connected to database");
        } catch (err) {
          throw new Error("server connection error");
        }
        //check if password or email is empty
        if (!email || !pass ||!phoneNumber) {
          throw new Error("fields cannot be empty");
        }
        //find user
        const user = await User.findOne(
          { $or:[{phoneNumber:phoneNumber},{email:email}] });
        // check user existence
        if (!user) {
          throw new Error("wrong information,try again");
        }
        //validation check for passwords
        const isValid = await verifyPassword(pass, user.pass);
        console.log(isValid);
        if (!isValid) {
          throw new Error("wrong password");
        }
        const name = [user.name, user.role];
        //is everything ok
        return { email, name };
      }
    })
    ],
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
