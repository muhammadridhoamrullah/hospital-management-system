import { loginUser } from "@/app/db/services/user.service";
import { NextRequest, NextResponse } from "next/server";
import z, { success } from "zod";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const login = await loginUser(data);

    return NextResponse.json(
      {
        success: true,
        data: login,
        message: "User logged in successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const path = error.issues[0].path[0];
      const message = error.issues[0].message;

      return NextResponse.json(
        {
          success: false,
          data: null,
          message: `Validation error on ${path.toString()} : ${message}`,
        },
        {
          status: 400,
        }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: "Internal Server Error",
        },
        {
          status: 500,
        }
      );
    }
  }
}
