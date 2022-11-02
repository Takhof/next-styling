import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CognitoProvider from "next-auth/providers/cognito";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: `mongodb+srv://takhof:asdfasdf@cluster0.icqpwpr.mongodb.net/tomsDB?retryWrites=true&w=majority`,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asihdufaospidf188297",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // async session({ session, token }) {
    //   session.user.id = token.id;
    //   return session;
    // },
  },
});
