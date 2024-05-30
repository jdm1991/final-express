// app/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check the username and password against your authentication logic
        if (
          credentials.username === "admin" &&
          credentials.password === "password"
        ) {
          return { id: 1, name: "Admin" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
