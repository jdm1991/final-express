// src/app/api/login/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Find the user by email using Prisma
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      // Compare the provided password with the hashed password using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Generate a session token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        // Set the token as a cookie in the response
        const response = NextResponse.json({ message: "Login successful" });
        response.cookies.set("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });
        return response;
      }
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
