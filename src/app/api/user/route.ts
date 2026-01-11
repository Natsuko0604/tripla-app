export const runtime = "nodejs";

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/auth";
import { hash } from "argon2";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const hashed = await hash(body.password);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hashed,
      nickName: "", // 初回はニックネームを空にしておく
    },
  });

  const result = await signIn("credentials", {
    email: body.email,
    password: body.password,
    redirect: false,
  });

  if (result?.error) {
    return {
      success: false,
      error: "メールアドレスまたはパスワードが正しくありません",
    };
  }
  return NextResponse.json(user, { status: 201 });
}
